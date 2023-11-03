import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import constants from "../../../support/helpers/Constants";
import {c51260 as testData} from "../../../support/helpers/DataManager";
import helperObject from "../../../support/helpers/HelperObject";

describe(`C51260: vP Delegation-Abschluss; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/51260`, {failFast: {enabled: false}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: open vP=2564.2422.32
            go to the Dossier-Chronik
            observe ribbon block ‘Dossier-Chronik speziefischen Funktionen’ ->
            Ribbon button ‘Delegation Abschluss’ is added to the ribbon block ‘Dossier-Chronik speziefischen Funktionen’`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step1.vp);
    pages.versicherte.detail.ribbonMenu.checkDelegationAbschlussBtnVisible(true);
  });

  it(`Step 2 - 5: open vP = 2469.8286.92
            go to the Dossier-Chronik
            press on ‘Delegation Abschluss’ ->
            Modal window 'Delegation-Abschluss registrieren; is opened;
            Modal window contains these fields:
            Dossier-Ereignis - prefiled with Delegation Abschluss, read-only
            IV-Stelle: dynselect where User sees only Active IVStellen. User doesn’t see IVStellen seted as inactive in the list
            Abschluss am: date field empty by default 
            All fields are mandatory;
            
            Step 3: Press Ok without filling any fields -> Validation error appears;
            
            Step 4: select any IVStellen
            set Date as future  
            press OK -> 
            Once all mandatory fields are set User sees green flag  
            Error message appears: Der Chronik-Eintrag darf nicht in der Zukunft liegen. (OSCSTAMM:204);
            
            Step 5: close error
            set date as today
            press Ok -> Delegation abschluss entry is created and added to the list`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step2.vp);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.waitGridViewLoaded();
    pages.versicherte.detail.ribbonMenu.clickDelegationAbschlussBtn()
         .waitForLoaded()
         .checkDossierEreignisTxtReadonly(true)
         .checkDossierEreignisTxtValue(testData.step2.dossierEreignis)
         .checkIvStelleDropdownReadonly(false)
         .checkIvStelleDropdownMandatory(true)
         .checkAbschlussAmDateEmpty(true)
         .checkAbschlussAmDateMandatory(true);

    cy.log(`Step 3: Press Ok without filling any fields -> Validation error appears`);
    pages.versicherte.delegationAbschlussRegistrierenPopup.clickOkBtn();
    pages.notification.checkErrorMessageText(testData.step3.validationError);

    cy.log(`Step 4: select any IVStellen
        set Date as future  
        press OK -> 
        Once all mandatory fields are set User sees green flag  
        Error message appears: Der Chronik-Eintrag darf nicht in der Zukunft liegen. (OSCSTAMM:204)`);
    pages.versicherte.delegationAbschlussRegistrierenPopup
         .selectIvStelleDropdownByIndex(1)
         .setAbschlussAmDate(helperObject.date.getCurrentDayPlusDays(2))
         .clickOkBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCSTAMM_204)
         .clickOkBtn();

    cy.log(`Step 5: close error
      set date as today
      press Ok -> Delegation abschluss entry is created and added to the list`);
    pages.versicherte.delegationAbschlussRegistrierenPopup
         .setAbschlussAmDate(helperObject.date.getCurrentDate())
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisibleAndWaitForDisappeared();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkValueInGridExists(testData.step2.dossierEreignis, true)
         .checkValueInGridExists(helperObject.date.getCurrentDate(), true)
         .clickRowWithTextToSelectIt(testData.step2.dossierEreignis);
    pages.versicherte.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.clickOkBtn();
  });

  it(`Step 6: open vP=8260.4754.62
      go to the Dossier-Chronik
      press on ‘Delegation Abschluss’
      select any IV Stellen
      set Date as one of the existing record = 01.01.2020
      press OK
      press Ok -> Delegation abschluss entry is created and added to the list`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step6.vp);
    pages.waitForLoadingDisappears();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.waitGridViewLoaded();
    pages.versicherte.detail.ribbonMenu.clickDelegationAbschlussBtn()
         .waitForLoaded()
         .selectIvStelleDropdownByIndex(1)
         .setAbschlussAmDate(testData.step6.date)
         .clickOkBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCSTAMM_205);
  });

  it(`Step 7: open vP=2099.0012.67
      go to the Dossier-Chronik
      select the Dossier-Chronik with Ereignise=Delegation abschluss (date=02.03.2022)
      set the date = 01.01.2021
      press Speichern -> 
      Error message appears: Ein aktuelles Dossier-Ereignis darf nicht vor ein früheres Ereignis verschoben werden.
      Die Abgabe oder der Erhalt eines Dossiers darf hier niemals manuell erzeugt werden. Sie müssen dazu unbedingt die obigen Funktion 'Erhalt / Abgabe registrieren' verwenden. (OSCSTAMM:203)`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.step7.vp);
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.clickRowWithTextToSelectIt(testData.step7.date);
    pages.versicherte.detail.dossierChronikTab.dossierChronikDetailForm.setDatumnAmDate(testData.step7.newDate);
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCSTAMM_203);
  });

});
