import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import constants from "../../support/helpers/Constants";
import {c51299 as testData} from "../../support/helpers/DataManager";

describe(`C51299: Abgabe registrrieren _ no error/warning messages; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/51299`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open VP`, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.vpNname);
  });

  it(`Step 2: Open Dossier Chronik>Dossier Abgabe tabP --> Abgabe registrieren button is enabled`, () => {
    pages.versicherte.detail.sideMenu.navigateToDossierChronikTab()
         .waitForLoaded()
         .clickDossierAbgabeTab();
    pages.versicherte.detail.ribbonMenu.clickAgabeKontrollierenBtn()
         .checkAbgabeRegistrierenBtnDisabled(false);
  });

  it(`Step 3: Click button "Abgabe registrieren" -> Pop up dialog "Dossier-Abgabe registrieren" opens`, () => {
    pages.versicherte.detail.ribbonMenu.clickAbgabeRegistrierenBtn()
         .waitForLoaded();
  });

  it(`Step 4: Select IV-Stelle and press OK -> 
      Confirm warning: Diese Aktion kann nicht rückgängig gemacht werden! (OSCSTAMM:363)`, () => {
    pages.versicherte.abgabeRegistrierenPopup.selectDosseirAbgabeAnDropdown(testData.dosseirAbgabeAnDropdown)
         .clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCIENT_363)
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  it(`Expected results: 
      - buttons "Abgabe registrieren" and Abgabe kontrolieren are disabled;
      - button Abgabe Durchfuhren is enabled
      - info panel message is presented: (OSCSTAMM:152)
      - status of VP is changed to Abgegeben`, () => {
    pages.versicherte.detail.ribbonMenu.checkAgabeKontrollierenBtnDisabled(true)
         .checkAbgabeRegistrierenBtnDisabled(true)
         .checkAbgabeDurchfuhrenBtnDisabled(false);
    pages.checkMsgOnThePage(testData.msg_part1, true)
         .checkMsgOnThePage(testData.msg_part2, true)
         .checkMsgOnThePage(testData.msg_part3, true);
    pages.versicherte.detail.sideMenu.navigateToBasisdatenTab()
         .waitForLoaded()
         .checkStatusTxt(testData.status);
  });

  it(`Expected results: 
      - entry is added to Dossier-Chronik`, () => {
    pages.versicherte.detail.sideMenu.navigateToDossierChronikTab().clickDossierChronikTab();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkGridRowsCount(1)
         .checkValueInGridExists(testData.dosseirAbgabeAnDropdownToCheck, true)
         .checkValueInGridExists(testData.status, true);
  });

  it(`Expected results: 
      - New protokol is added (with typ = Automatisch generierter Systemeintrag)`, () => {
    pages.versicherte.detail.tabBar.navigateToProtocollTab()
         .grid.waitGridViewLoaded()
         .clickRowNumber(1);
    pages.versicherte.detail.protocollTabBar.detail.checkTypDropdown(testData.type);
  });
});
