import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import constants from "../../../support/helpers/Constants";
import {c50987 as testData} from "../../../support/helpers/DataManager";
import helperObject from "../../../support/helpers/HelperObject";

describe(`C50987: Dossier-Chronik-Einträge verwalten (edit and save); 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/50987`, {failFast: {enabled: false}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: open vP = 2564.2422.32
      go to the ‘Dossier-Chronik’ sidebar tab
      observe ‘Dossier-Chronik bearbeiten’ ribbon block and ‘Dossier-Chronik verwalten’ right tab ->
      Speichern button is visible but disabled
      In the right panel User sees  fields that are empty and read-only`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step1.vp);
    pages.versicherte.detail.ribbonMenu.checkSpeichernBtnDisabled(true);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .checkDossierEreignisTxtDisabled(true)
         .checkDossierEreignisTxtEmpty(true)
         .checkIVStelleDropdownDisabled(true)
         .checkIVStelleDropdownEmpty(true)
         .checkDatumnAmDateDisabled(true)
         .checkDatumnAmDateEmpty(true);
  });

  it(`Step 2: open vP=8260.4754.62
      go to the Dossier-Chronik
      observe ‘Dossier-Chronik bearbeiten’ ribbon block and ‘Dossier-Chronik verwalten’ right tab ->
      Speichern button is visible and enabled
      In the right side User sees same data as selected Dossier-Chronik record`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step2.vp);
    pages.versicherte.detail.ribbonMenu.checkSpeichernBtnDisabled(false);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.waitGridViewLoaded().getGridData().then((gridData) => {
      const er = JSON.stringify(gridData[0].Ereignis).replaceAll("\"", "");
      const iv = JSON.stringify(gridData[0]["IV-Stelle"]).replaceAll("\"", "");
      const date = JSON.stringify(gridData[0].Datum).replaceAll("\"", "");
      pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(er);
      pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm
           .checkDossierEreignisTxt(er)
           .checkIVStelleDropdown(iv)
           .checkDatumnAmDate(date);
    });
  });

  it(`Step 3:
      open vP= 8260.4754.62
      go to the Dossier-Chronik
      select dossier-erhalt = Wiedererhalten
      set the date = 12.01.2019
      press Save" -> Error message: "Ein aktuelles Dossier-Ereignis darf nicht vor ein früheres Ereignis verschoben werden.
      Die Abgabe oder der Erhalt eines Dossiers darf hier niemals manuell erzeugt werden.
      Sie müssen dazu unbedingt die obigen Funktion 'Erhalt / Abgabe registrieren" verwenden. (OSCSTAMM:203);
      No changes have to be saved`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step3.vp);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step3.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .setDatumnAmDate(testData.step3.date);
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCSTAMM_203)
         .clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step3.ereignis_diff);
    pages.warningPopup.clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step3.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .checkDatumnAmDateIsNot(testData.step3.date);
  });

  it(`Step 4:
      open vP=8260.4754.62
      go to the Dossier-Chronik
      select record ‘RAD Abklärung von’ (01.01.2020)
      change the date to the same as date of record' Abgegeben von' (20.12.2019)
      press Save -> Error message: "Es existiert bereits ein Chronik-Eintrag mit gleichem Datum.
      Zwei Chronik-Einträge am gleichem Tag sind nicht erlaubt."
      No changes have to be saved"`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step4.vp);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step4.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .setDatumnAmDate(testData.step4.date);
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCSTAMM_205)
         .clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step4.ereignis_diff);
    pages.warningPopup.clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step4.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .checkDatumnAmDateIsNot(testData.step4.date);
  });

  it(`Step 5:
      open vP=8260.4754.62
      go to the Dossier-Chronik
      select record Wiedererhalten (16.01.2020)
      change the date to the future
      press Save -> Error message: "Der Chronik-Eintrag darf nicht in der Zukunft liegen."
      No changes have to be saved`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step5.vp);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step5.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .setDatumnAmDate(helperObject.date.getCurrentDayPlusDays(2));
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCSTAMM_204)
         .clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step5.ereignis_diff);
    pages.warningPopup.clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step5.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .checkDatumnAmDateIsNot(helperObject.date.getCurrentDayPlusDays(2));
  });

  it(`Step 6:
      open vP=7538.9057.00
      go to the Dossier-Chronik
      select Ereignis=Externe Abklärung von
      set the date at today
      press Save -> Error message:
      "Das Erhalten-Datum darf nicht so geändert werden, dass dieser Eintrag zum aktuellen Erhalt wird.
      Der aktuelle Erhalt des Dossiers darf hier niemals manuell erfasst werden.Sie müssen dazu unbedingt die obige Funktion 'Erhalt registrieren' verwenden.” (OSCSTAMM:202)
      No changes have to be saved`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step6.vp);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step6.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .setDatumnAmDate(helperObject.date.getCurrentDate());
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCSTAMM_202)
         .clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step6.ereignis_diff);
    pages.warningPopup.clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step6.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .checkDatumnAmDateIsNot(helperObject.date.getCurrentDate());
  });

  it(`Step 7:
      open vP=1820.7324.94
      go to the Dossier-Chronik
      select the record where Ereignis=Abgegeben an
      set the date = 20.01.2022
      press Save -> Error message: "Das Abgabe-Datum darf nicht so geändert werden, dass dieser Eintrag zur aktuellen Abgabe wird.   
      Die aktuelle Abgabe des Dossiers darf hier niemals manuell erfasst werden. Sie müssen dazu unbedingt die obige Funktion 'Abgabe registrieren' verwenden."   
      No changes have to be saved`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step7.vp);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step7.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .setDatumnAmDate(testData.step7.date);
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCSTAMM_201)
         .clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step7.ereignis_diff);
    pages.warningPopup.clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step7.ereignis);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.waitForLoaded()
         .checkDatumnAmDateIsNot(testData.step7.date);
  });
});
