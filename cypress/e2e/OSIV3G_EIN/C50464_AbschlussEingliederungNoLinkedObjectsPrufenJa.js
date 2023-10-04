import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import constants from "../../support/helpers/Constants";
import pageBase from "../../support/base/PageBase";
import Utility from "../../support/Utility";
import {c50464 as testData} from "../../support/helpers/DataManager";
import helpers from "../../support/helpers/HelperObject";

//@Bugs: OSIV-22841 (step 4)
//       PROD-2435 (step 5)
describe(`C50464: "Abschluss Eingliederung" _no linked objects (Prufen = Ja); 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50464; 
  DEFECT(step 5): https://jiraosiv3g.atlassian.net/browse/PROD-2435`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();

    helpers.jira.isJiraDone("PROD-2435").then((isDone) => {
      console.log(isDone);
      if (isDone === false) {
        Cypress.env("isJira", true);
        console.log(Cypress.env("isJira"));
      }
    });
  });

  it(`Step 1: Open Eingliederung ${testData.einID}`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.einID);
    pageBase.waitForLoadingDisappears();
  });

  it(`Step 2: Press button "Abschluss Eingliederung"`, () => {
    pages.eingliederung.detail.ribbonMenu.clickAbschlussEingliederungBtn()
         .waitForLoaded();
  });

  it(`Step 3: On Abschluss window fill in mandatory data
    select Prufen (Ja)
    Click OK`, () => {
    pages.eingliederung.abschlussEingliederungPopup.selectResultatDropdown(testData.resultat)
         .selectArtDropdownByIndex(1)
         .selectPensumDropdownByIndex(1)
         .selectRentenfrageDropdown(testData.rentenfrage)
         .clickOkBtn();
  });

  it(`Step 4: --> verify warning message: Zur Prüfung der Rentenfrage wird ein neuer Renten-Entscheid angelegt.
    confirm it`, () => {
    pages.warningPopup
         .checkWarningContainsText(constants.MSG.OSCIENT_76_PART1)
         .checkWarningContainsText(constants.MSG.OSCIENT_76_PART2)
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  it(`Step 5: --> Expected: Eing is abgeschlossene
    Linked RE ENT is created with AL = Bearbeiten and data (gesuch, Ereignis, Bereich same as for folge ENT)`, () => {
    // TODO jira
    cy.skipOn(Cypress.env("isJira") === true);
    pages.eingliederung.detail.detailTabBar.checkArbeitslisteTxt(testData.al);
    pages.eingliederung.detail.ribbonMenu.clickFolgeentscheidOffnenBtn().waitForLoaded();
    Utility.gatherElements({
      gesuch  : pages.entscheid.detail.basisdatenTabBar.getGesuchDropdownSelectedValue(),
      ereignis: pages.entscheid.detail.basisdatenTabBar.getEreignisDropdownSelectedValue(),
      bereich : pages.entscheid.detail.basisdatenTabBar.getBereichDropdownSelectedValue()
    }).then((elements) => {
      pages.groupedTaskbar.clickContainsEingliederungTab();
      pages.eingliederung.detail.tabBar.navigateToEntscheideTab()
           .grid.dblClickRowWithText(testData.ent.al);
      pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.ent.al)
           .checkLeistungsgruppeDropdown(testData.ent.lg)
           .checkLeistungscodeDropdown(testData.ent.lc)
           .checkGesuchDropdown(elements.gesuch.text())
           .checkEreignisDropdown(elements.ereignis.text())
           .checkBereichDropdown(elements.bereich.text())
           .checkMassnahmeTxt(testData.ent.massnahme);
    });
  });

  afterEach(function() {
    console.log(this.currentTest.state);
    if (this.currentTest.state === "pending") {
      Cypress.log(this.currentTest.err);
      Cypress.runner.stop();
    }
  });
});
