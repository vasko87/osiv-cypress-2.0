import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import constants from "../../support/helpers/Constants";
import {c51300 as testData} from "../../support/helpers/DataManager";
import pageBase from "../../support/base/PageBase";

describe(`C51300: Abgabe registrieren _ with warning messages; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/51300`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open VP`, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.vpNname);
  });

  it(`Step 2: Open Dossier Chronik>Dossier Abgabe tab; Click Abgabe kontrolieren button
      --> Abgabe registrieren button is enabled
      --> warning messages are presented in the list`, () => {
    pages.versicherte.detail.sideMenu.navigateToDossierChronikTab()
         .clickDossierAbgabeTab();
    pages.versicherte.detail.ribbonMenu.clickAgabeKontrollierenBtn();
    pages.waitForLoadingDisappears();
  });

  it(`Step 3: check --> Abgabe registrieren button is enabled
      --> warning messages are presented in the list`, () => {
    pages.versicherte.detail.ribbonMenu.checkAbgabeRegistrierenBtnDisabled(false);
    pages.versicherte.detail.dossierChronikTab.dossierAbgabeGrid.checkGridRowsCount(3)
         .checkValueInGridExists(constants.MSG.OSCSTAMM_277, true)
         .checkValueInGridExists(constants.MSG.OSCSTAMM_275, true)
         .checkValueInGridExists(constants.MSG.OSCSTAMM_273, true);
  });

  it(`Step 4: Click button "Abgabe registrieren"`, () => {
    pages.versicherte.detail.ribbonMenu.clickAbgabeRegistrierenBtn()
         .waitForLoaded();
  });

  it(`Step 5: Select IV-Stelle and press OK -> 
      Confirm warning: Der Versicherte besitzt noch offene Fälle, welche jedoch abgegeben werden können.
      Um diese Fälle abgeben zu können, werden diese im eigenen System willkürlich abgeschlossen, und zusammen mit der Information über den Zustand vor dem Abschluss an die andere IV-Stelle übergeben.
      Wollen Sie die Abgabe mit den offenen Fällen jetzt registrieren?
      Achtung!!! Alle offenen Fälle werden willkürlich abgeschlossen.
      Diese Aktion kann nicht rückgängig gemacht werden! (OSCSTAMM:362)`, () => {
    pages.versicherte.abgabeRegistrierenPopup.selectDosseirAbgabeAnDropdown(testData.dosseirAbgabeAnDropdown)
         .clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCIENT_362)
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  it(`Expected result: 
      - buttons "Abgabe registrieren" and Abgabe kontrolieren are disabled
      - Dossier-Abgabe durchführen button is enabled`, () => {
    pages.versicherte.detail.ribbonMenu.checkAgabeKontrollierenBtnDisabled(true)
         .checkAbgabeRegistrierenBtnDisabled(true)
         .checkAbgabeDurchfuhrenBtnDisabled(false);
  });

  it(`Expected result: 
      - info panel message is presented: (OSCSTAMM:152)`, () => {
    pages.checkMsgOnThePage(testData.msg_part1, true)
         .checkMsgOnThePage(testData.msg_part2, true)
         .checkMsgOnThePage(testData.msg_part3, true);
  });

  it(`Expected result: 
      - status of VP is changed to Abgegeben`, () => {
    pages.versicherte.detail.sideMenu.navigateToBasisdatenTab()
         .waitForLoaded()
         .checkStatusTxt(testData.status);
  });

  it(`Expected result: 
      - entry is added to Dossier-Chronik`, () => {
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.waitGridViewLoaded()
         .checkGridRowsCount(1)
         .checkValueInGridExists(testData.dosseirAbgabeAnDropdown, true)
         .checkValueInGridExists(testData.status, true);
  });

  it(`Expected result:
      - New protokol is added (with typ = Automatisch generierter Systemeintrag)`, () => {
    pages.versicherte.detail.tabBar.navigateToProtocollTab()
         .grid.waitGridViewLoaded()
         .clickRowNumber(1);
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.protocollTabBar.detail.checkTypDropdown(testData.type);
  });

  it(`Expected result:
      - all ereignis are in AL - A (except basis)
      - Abschluss datum for Ereignis  is set to the current date
      - the following text is added: Die Ereignis wurde aufgrund Dossier Abgabe am 08.02.2023 (date of dossier abgabe) willkürlich abgeschlossen.`, () => {
    pages.versicherte.detail.tabBar.navigateToProtocollTab()
         .grid.waitGridViewLoaded()
         .clickRowNumber(1);
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.protocollTabBar.detail.checkTypDropdown(testData.type);
  });
});
