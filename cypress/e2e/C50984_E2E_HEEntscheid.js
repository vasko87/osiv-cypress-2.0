import pages from "../support/base/OsivPageObject";
import constants from "../support/helpers/Constants";
import {c50984 as testData} from "../support/helpers/DataManager";

describe(`C50984: E2E (HE Entscheid); 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50984`, () => {

  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it("Step 1: Open VP; Open Entscheide tab, Click Neu button -> Form for new ENT creation opens", () => {
    pages.loginPage.openUrl();
    pages.desktopMenu.navigateToVersicherteTab();
    pages.versicherte.grid.searchAndOpenVersicherteName(testData.step1.versicherteName);
    pages.versicherte.detail.waitForLoaded();
    pages.versicherte.detail.tabBar.navigateToEntscheideTab();
    pages.entscheid.detail.ribbonMenu.clickNeuBtn();
  });

  it(`Step 2: Select Leistunggruppe and Leistungscode = HE; fill in mandatory data and click OK -> 
  ENT details page opens in a separate tab: Tabs basisdate, Durfuhrungsstellen and Hilflosigkeit 
  are presented on the left side; orange flag is near Details tab, basisdaten abd hilflosigkeit; 
  correct info panel messages; data from ent creation form is prefilled, ENT Arbeitliste = Neu`, () => {
    pages.entscheid.neuPopup
         .selectLeistungsgruppeDropdown("Hilflosenentschädigung")
         .selectLeistungscodeDropdown("Hilflosenentschädigung")
         .verifyValuesBulk(testData.step2.verifyEntNew);
    pages.modalWindow.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.entscheid.detail.sideMenu
         .checkBasisdatenTabColor(constants.color.orange, true)
         .checkHilflosigkeitTabColor(constants.color.orange, true)
         .checkDurchfuhrungsstellenTabColor(constants.color.orange, false);
    pages.entscheid.detail.tabBar.checkDetailsTabColor(constants.color.orange, true);
    pages.entscheid.detail
         .checkMsgOnThePage(constants.msg.OSCIENT_522, true)
         .checkMsgOnThePage(constants.msg.OSCIENT_523, true)
         .verifyValuesBulk(testData.step2.verifyEntDetail);
  });

  it(`Step 3: Fill in the data on Basisdaten tab -> data is filled in as on screenshot; 
  orange flag is removed from tab Basisdaten and orange info panel message is not presented anymore;
  side tab Entscheid sendungen appears on the left menu`, () => {
    pages.entscheid.detail.fillInFieldsBulk(testData.step3.fillInEntDetail);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtn();
    pages.entscheid.detail.sideMenu
         .checkEntscheidSendungenTabVisible(true)
         .checkBasisdatenTabColor(constants.color.orange, false)
         .checkMsgOnThePage(constants.msg.OSCIENT_522, true)
         .checkMsgOnThePage(constants.msg.OSCIENT_523, false);
  });

  it(`Step 4: Click Bearbeitung Einleiten button -> berabeitung einleiten popup dialog is presented`, () => {
    pages.entscheid.detail.ribbonMenu.clickBearbeitungEinleitenBtn()
         .waitForLoaded()
         .checkBearbeiterDropdown(Cypress.env("username"));
  });

  it(`Step 5: Click OK button -> ENT arbeitliste = Bearbeiten, no info panel messages; 
  tabs Freitexte and Diskutieren are presented on the left`, () => {
    pages.modalWindow.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.entscheid.detail.checkArbeitslistevalueTxt(testData.step5.arbeitslistevalueTxt)
         .checkMsgOnThePage(constants.msg.OSCIENT_522, false)
         .checkMsgOnThePage(constants.msg.OSCIENT_523, false);
    pages.entscheid.detail.sideMenu
         .checkFreitexteTabVisible(true)
         .checkDiskutierenTabVisible(true);
  });

  // afterEach(function() {
  //   if (this.currentTest.state === "failed") {
  //     const screenshotFileName = `${test.title} (failed).png`;
  //     cy.screenshot(screenshotFileName);
  //     // addContext({test}, `assets/${Cypress.spec.name}/${screenshotFileName}`);
  //     Cypress.runner.stop();
  //   }
  // });
});
