import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {c55741 as testData} from "../../../support/helpers/DataManager";
import pageBase from "../../../support/base/PageBase";

describe(`C55741: Validation of 'Ablehnung Massnahme' field based on LC; 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/55741`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: open any vP
      create new Entscheid=RE
      set Entscheid=Ablehnung -> "Ablehnung Massnahme" set as M07 (value set in configuration)`, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.step1.vpName);
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.tabBar.navigateToEntscheideTab();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.ribbonMenu.clickNeuBtn();
    pages.entscheid.neuPopup.waitForLoaded()
         .selectLeistungsgruppeDropdown(testData.step1.lg)
         .selectLeistungscodeDropdown(testData.step1.lc)
         .selectBearbeiterDropdownByTyping(testData.step1.bearbeiter);
    flows.modalPopup.clickOkBtn_warningOk_CheckSuccessMsg();
    pages.entscheid.detail.basisdatenTabBar.selectEntscheidDropdown(testData.step1.entscheid)
         .checkAblehnungMassnahmeDropdownContains(testData.step1.ablehnungMassnahme);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtnIfVisible();
    pages.notification.checkSuccessMessageVisible();
    pageBase.waitForLoadingDisappears();
  });

  it(`Step 2: Delete LG / LC
      Select LC=010
      Observe "Ablehnung Massnahme" field -> "Ablehnung Massnahme" set as M06`, () => {
    pages.entscheid.detail.basisdatenTabBar.clearLeistungsgruppeDropdown()
         .clearLeistungscodeDropdown()
         .selectLeistungscodeDropdownByTyping(testData.step2.lc)
         .checkAblehnungMassnahmeDropdownContains(testData.step2.ablehnungMassnahme);
  });

  it(`Step 3: 
      Save changes -> Changes are saved and "Ablehnung Massnahme" set as M06
      Select LC=bna -> "Ablehnung Massnahme" is empty
      Save changes -> Changes are saved and "Ablehnung Massnahme" is empty`, () => {
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtnIfVisible();
    pages.notification.checkSuccessMessageVisible();
    pageBase.waitForLoadingDisappears();
    pages.entscheid.detail.basisdatenTabBar.checkAblehnungMassnahmeDropdownContains(testData.step2.ablehnungMassnahme)
         .clearLeistungscodeDropdown()
         .clearLeistungsgruppeDropdown()
         .selectLeistungscodeDropdownByTyping(testData.step3.lc)
         .checkAblehnungMassnahmeDropdownEmpty(true);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtnIfVisible();
    pageBase.waitForLoadingDisappears();
    pages.entscheid.detail.basisdatenTabBar.checkLeistungscodeDropdownContains(testData.step3.lc)
         .checkAblehnungMassnahmeDropdownEmpty(true);
  });

  it(`Step 4: 
      Set LC=571 and Save changes -> "Ablehnung Massnahme" set as M05 and User doesn't see in panel message anything about this field
      Delete value from the dynselect pressing on x and Save -> "Ablehnung Massnahme" set as empty and in panel message User sees an info about "Ablehnung Massnahme"`, () => {
    pages.entscheid.detail.basisdatenTabBar.clearLeistungsgruppeDropdown()
         .clearLeistungscodeDropdown()
         .selectLeistungscodeDropdownByTyping(testData.step4.lc)
         .checkAblehnungMassnahmeDropdownContains(testData.step4.ablehnungMassnahme);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtnIfVisible();
    pages.notification.checkSuccessMessageVisible();
    pages.checkMsgWarningContainsText(testData.step4.msg, false);
    pages.entscheid.detail.basisdatenTabBar.clearAblehnungMassnahmeDropdown();
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtnIfVisible();
    pages.notification.checkSuccessMessageVisible();
    pages.checkMsgWarningContainsText(testData.step4.msg, true);
  });
});
