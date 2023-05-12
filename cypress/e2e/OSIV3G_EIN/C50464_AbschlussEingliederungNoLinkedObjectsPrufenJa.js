import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import constants from "../../support/helpers/Constants";

const testData = {
  einID      : "1617",
  resultat   : "Eingegliedert",
  benutzer   : "RE-mte - Mirjam Tendon",
  rentenfrage: "Ja",
  al         : "Abgeschlossen",
  ent        : {
    lc: "RE - Rente",
    lg: "RE",
    al: "Bearbeiten",
    gesuch: "vom",
    ereignis: "Unfall vom",
    bereich: "IV"
  }
};

describe.skip(`C50464: "Abschluss Eingliederung" _no linked objects (Prufen = Ja); 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50464`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open Eingliederung ${testData.einID}`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.data1.einID);
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
    pages.eingliederung.detail.detailTabBar.checkArbeitslisteTxt(testData.al);
    pages.eingliederung.detail.tabBar.navigateToEntscheideTab()
         .grid.dblClickRowWithText(testData.ent.al);
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.ent.al)
         .checkLeistungscodeDropdown(testData.ent.lg)
         .checkLeistungscodeDropdownEmpty(testData.ent.lc)
         .checkGesuchDropdown(testData.ent.gesuch)
         .checkEreignisDropdown(testData.ent.ereignis)
         .checkBereichDropdown(testData.ent.bereich);
  });
});
