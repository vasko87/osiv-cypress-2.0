import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import constants from "../../support/helpers/Constants";
import {c51272 as testData} from "../../support/helpers/DataManager";
import pageBase from "../../support/base/PageBase";

describe(`C51272: Dossier-Chronik: Einträge verwalten (delete); 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/51272`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Select the record ‘Wiedererhalten von’ (09.09.2022) and press on Delete ribbon
      Cancel deletion by pressing on ‘Abbrechen’ on the warning (OSCSTAMM:211)’ -> 1) First 'Löschen?' popup is shown
      and confirming it
      2) Warning is shown: "Das Löschen des aktuellsten Ereignisses kann inkonsistente Zuständen herbeiführen.
      Auf diese Weise kann zum Beispiel eine Abgabe erreicht werden, auch ohne dass die entsprechende Abgabe tatsächlich
      sauber registriert wurde. Dadurch kann es in der Folge zu einer inkonsistenten Abgabe des Dossiers kommen.
      Das Ereignis in der Dossier-Chronik dennoch löschen."
      3) Canceling deletion record is not deleted and visible in the grid`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.vp);
    pages.waitForLoadingDisappears();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step1.ereignis);
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCSTAMM_211)
         .clickAbbrechenBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkValueInGridExists(testData.step1.ereignis, true);
  });

  it(`Step 2: Select the record Abgegeben (08.08.2022) and press on Delete ribbon
        Confirm deletion -> Abgegeben record is deleted without any warnings
        ‘Wiedererhalten von’ record is changed to ‘Erhalten von’`, () => {
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step2.ereignis);
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.waitForNotificationMessageDisappears();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkValueInGridExists(testData.step2.ereignis, false);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkValueInGridExists(testData.step1.ereignis, false);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkValueInGridExists(testData.step2.ereignisNew, true);
  });

  it(`Step 3: select record 'Erhalten von' (09.09.2022) and press on Delete ribbon
        confirm deletion on the Loschen popup
        press OK ->
        Warning is shown: "Das Löschen des aktuellsten Ereignisses kann inkonsistente Zuständen herbeiführen.
        Auf diese Weise kann zum Beispiel eine Abgabe erreicht werden, auch ohne dass die entsprechende Abgabe tatsächlich
        sauber registriert wurde. Dadurch kann es in der Folge zu einer inkonsistenten Abgabe des Dossiers kommen.
        Das Ereignis in der Dossier-Chronik dennoch löschen.;
        Pressing OK on the warning - record is deleted
        The first record from the list is selected."`, () => {
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step3.ereignis);
    pages.waitForLoadingDisappears();
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCSTAMM_211)
         .clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.waitGridViewLoaded()
         .checkValueInGridExists(testData.step3.ereignis, false);
  });

  it(`Step 4: Delete all records in the list; -> All records are deleted
  'Speichern' and 'Loschen' ribbon buttons are visible but disabled"`, () => {
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step4.ereignis1);
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.waitGridViewLoaded()
         .clickRowWithTextToSelectIt(testData.step4.ereignis2);
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.waitGridViewLoaded()
         .clickRowWithTextToSelectIt(testData.step4.ereignis3);
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.waitGridViewLoaded()
         .clickRowWithTextToSelectIt(testData.step4.ereignis4);
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkGridRowsCount(0)
  });
});
