import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import constants from "../../../support/helpers/Constants";
import pageBase from "../../../support/base/PageBase";
import {c50985 as testData} from "../../../support/helpers/DataManager";

describe(`C50985: Dossier-Erhalt registrieren (Functionalities); 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/50985`, {failFast: {enabled: false}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1 - 2: open vP = 2564.2422.32
      go to the ‘Dossier-Chronik’ sidebar tab
      press on 'Erhalt registrieren' ribbon button ->
      Warning message is shown: Es ist bereits ein offenes Gesuch vorhanden.
      Soll der Dossier-Erhalt trotzdem registriert werden?
      Step 2: Press OK on the warning -> Warning message 'Es ist bereits ein offener Entscheid vorhanden!
      Soll der Dossier-Erhalt trotzdem registriert werden?' appears;
      Pressing ‘Abbrechen’  warning is closed and User is on the same page`, () => {
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step1.vp);
    pages.versicherte.detail.ribbonMenu.clickErhaltRegistrierenBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCSTAMM_208);
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCSTAMM_209)
         .clickAbbrechenBtn();
  });

  it(`Step 3: open vP=4781.1883.00
      go to the ‘Dossier-Chronik’ sidebar tab
      press on 'Erhalt registrieren' ribbon button
      create RAD Abklarung -> "Dossier-Erhalt registrieren" dialog is opened without any warnings
      RAD Abklarung is created without any error;
      Step 4: press on 'Erhalt registrieren' ribbon button ->
      Error is shown: Pro Tag kann maximal ein Dossier-Ereignis registriert werden.
      Es wurde heute bereits ein Dossier-Ereignis registriert.  AND "Dossier-Erhalt registrieren" dialog is not opened`, () => {
    pages.nav.clickHomeBtn();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step3.vp);
    pages.versicherte.detail.ribbonMenu.clickErhaltRegistrierenBtn()
         .waitForLoaded()
         .selectDossierEreignisDropdown(testData.step3.dossierEreignisDropdown)
         .selectDosseirErhaltVonDropdownByIndex(1)
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisible()
         .waitForSuccessMessageDisappears();

    pages.versicherte.detail.ribbonMenu.clickErhaltRegistrierenBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCSTAMM_206)
         .clickOkBtn();
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pageBase.waitForLoadingDisappears();
  });

  it(`Step 5:
      open vP=2457.4089.50
      press on 'Erhalt registrieren' ribbon button
      create new Erhalt with Ereignise ‘Erhalten von’ , any IV Stelle
      press OK (OK on the appeared warnings) -> Warning is shown:
      "Beim Erhalt eines Dossiers sollten üblicherweise die erhaltenen Gesuche und Entscheide nacherfasst werden,
      falls solche vorhanden sind. Vergessen Sie nicht diese Daten nachträglich noch zu erfassen."`, () => {
    pages.nav.clickHomeBtn();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step5.vp);
    pages.versicherte.detail.ribbonMenu.clickErhaltRegistrierenBtn();
    pages.warningPopup.clickOkBtn()
         .clickOkBtn();
    pages.versicherte.dossierErhaltRegistrierenPopup.waitForLoaded()
         .selectDossierEreignisDropdown(testData.step5.dossierEreignisDropdown)
         .selectDosseirErhaltVonDropdownByIndex(1)
         .clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCSTAMM_210)
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisible()
         .waitForSuccessMessageDisappears();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkGridRowsCount(1);
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pageBase.waitForLoadingDisappears();
  });

  it(`Step 6:
      open vP=0258.9806.51
      press on 'Erhalt registrieren' ribbon button
      create new Erhalt with Ereignise ‘Erhalten von’ , any IV Stelle
      press OK -> Warning is shown: "Beim Erhalt eines Dossiers sollten üblicherweise die erhaltenen Gesuche und Entscheide nacherfasst werden,
      falls solche vorhanden sind. Vergessen Sie nicht diese Daten nachträglich noch zu erfassen."
      New DossierErhalt is created and ereignis is changed from ‘Erhalten von’ to ‘Wiedererhalten von’"`, () => {
    pages.nav.clickHomeBtn();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step6.vp);
    pages.versicherte.detail.ribbonMenu.clickErhaltRegistrierenBtn()
         .waitForLoaded()
         .selectDossierEreignisDropdown(testData.step5.dossierEreignisDropdown)
         .selectDosseirErhaltVonDropdownByIndex(1)
         .clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCSTAMM_210)
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisible()
         .waitForSuccessMessageDisappears();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid
         .clickRowWithTextToSelectIt(testData.step6.dossierEreignisGrid);
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn()
         .clickOkBtn();
    pageBase.waitForLoadingDisappears();
    pages.nav.clickHomeBtn();
  });

  it(`Step 7:
      open vP = 5648.3846.68
      go to the ‘Dossier-Chronik’ sidebar tab
      press on 'Erhalt registrieren' ribbon button
      in the opened "Dossier-Erhalt registrieren" window press OK
      set one of the field empty and press OK -> All the time User sees an error on the top right and mandatory field is in red"`, () => {
    pages.nav.clickHomeBtn();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step7.vp);
    pages.versicherte.detail.ribbonMenu.clickErhaltRegistrierenBtn()
         .waitForLoaded()
         .clickOkBtn();
    pages.notification.checkErrorMessageText(testData.step7.errorMsg);
    pages.notification.waitForNotificationMessageDisappears();
    pages.versicherte.dossierErhaltRegistrierenPopup.checkDossierEreignisDropdownValidationErrorVisible(testData.step7.validationError_Ereignis, true)
         .checkDosseirErhaltVonDropdownValidationErrorVisible(testData.step7.validationError_Erhalt, true);
    pages.versicherte.dossierErhaltRegistrierenPopup.selectDosseirErhaltVonDropdownByIndex(1)
         .clickOkBtn();
    pages.notification.checkErrorMessageText(testData.step7.errorMsg);
    pages.notification.waitForNotificationMessageDisappears();
    pages.versicherte.dossierErhaltRegistrierenPopup.checkDossierEreignisDropdownValidationErrorVisible(testData.step7.validationError_Ereignis, true)
         .checkDosseirErhaltVonDropdownValidationErrorVisible(testData.step7.validationError_Erhalt, false);
  });
});
