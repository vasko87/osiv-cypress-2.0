import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import constants from "../../../support/helpers/Constants";

const testData = {
  vpName  : "Dossier ENT-abgabe",
  ent     : "22781",
  vpStatus: "Abgegeben"
};

describe(`C58211: Abgabe registrieren _ with error messages; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/58211`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open VP`, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.vpName);
  });

  it(`Step 2: Open Dossier Chronik>Dossier Abgabe tabP; Click Abgabe kontrollieren button =>
      there are 2 failures are presented;`, () => {
    pages.versicherte.detail.sideMenu.navigateToDossierChronikTab()
         .clickDossierAbgabeTab();
    pages.versicherte.detail.ribbonMenu.clickAgabeKontrollierenBtn();
    pages.waitForLoadingDisappears();
  });

  it(`Step 3: Click on the first error with sendung >sendung details page opens
      Click Abschlissen for sendung
      Click OK on abschlissen popup >senung is closed`, () => {
    pages.versicherte.detail.dossierChronikTab.dossierAbgabeGrid.waitGridViewLoaded()
         .dblClickRowWithText("Die Sendung");
    pages.sendungen.detail.waitForLoaded();
    pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
    pages.sendungen.detail.sendungenAbschliessenPopup.modalWindow.clickOkBtn();
    pages.notification.waitForSuccessMessageDisappears();
  });

  it(`Step 4: Go back to dossier-abgabe`, () => {
    pages.groupedTaskbar.clickContainsVersichertendatenTab();
  });

  it(`Step 5: Click on error related to ENT>ent details opens
      Click Berabeiten einleiten`, () => {
    pages.versicherte.detail.dossierChronikTab.dossierAbgabeGrid.waitGridViewLoaded()
         .dblClickRowWithText("Der Entscheid");
    pages.entscheid.detail.waitForLoaded();
    pages.entscheid.detail.ribbonMenu.clickBearbeitungEinleitenBtn();
    pages.notification.waitForSuccessMessageDisappears();
  });

  it(`Step 6: Go back to dossier-abgabe`, () => {
    pages.groupedTaskbar.clickContainsVersichertendatenTab();
  });

  it(`Step7: Click Abgabe registrieren button
      Select Dossier Abgabe an
      Click OK
      confirm warning`, () => {
    pages.versicherte.detail.ribbonMenu.clickAbgabeRegistrierenBtn()
         .selectDosseirAbgabeAnDropdown("301")
         .clickOkBtn();
    pages.warningPopup.clickOkBtn();
  });

  it(`Expected: info panel message appears - (OSCSTAMM:152)
      button abgabe durchfuhren is enabled
      no errors/warnings in the list
      VP status = abgegeben`, () => {
    pages.checkMsgWarningContainsText(constants.MSG.OSCSTAMM_152);
    pages.versicherte.detail.ribbonMenu.checkAbgabeDurchfuhrenBtnDisabled(false);
    pages.versicherte.detail.dossierChronikTab.dossierAbgabeGrid.checkGridRowsCount(0);
    pages.versicherte.detail.tabBar.navigateToDetailsTab().checkStatusTxt(testData.vpStatus);
  });

  it(`Expected: additional check: ENTs are closed and abgegeben`, () => {
    pages.versicherte.detail.tabBar.navigateToEntscheideTab()
         .grid.waitGridViewLoaded()
         .checkTwoTextsExistInRow("Abgegeben", "Abgeschlossen", 1)
         .checkTwoTextsExistInRow("Abgegeben", "Abgeschlossen", 2);
  });

  it(`Expected: gesuch is closed`, () => {
    pages.versicherte.detail.tabBar.navigateToGesucheFMMeldungenTan()
         .grid.waitGridViewLoaded()
         .checkTwoTextsExistInRow("Abgeschlossen", "Die Gesuch wurde aufgrund Dossier Abgabe am 08.09.2023 willkürlich abgeschlossen.", 1);
  });
});
