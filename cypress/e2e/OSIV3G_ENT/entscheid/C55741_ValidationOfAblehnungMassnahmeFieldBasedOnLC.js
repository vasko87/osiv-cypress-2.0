import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {c55741 as testData} from "../../../support/helpers/DataManager";
import pageBase from "../../../support/base/PageBase";
import helpers from "../../../support/helpers/HelperObject";

// @Bugs: OSIV-24342(step 2)
describe(`C55741: Validation of 'Ablehnung Massnahme' field based on LC; 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/55741; DEFECT(step 2): OSIV-24342`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    helpers.jira.isJiraDone("OSIV-24342").then((isDone) => {
      console.log(isDone);
      if (isDone === false) {
        Cypress.env("isJira", true);
        console.log(Cypress.env("isJira"));
      }
    });
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
    flows.modalPopup.clickOkBtn_CheckSuccessMsg();
    pages.entscheid.detail.basisdatenTabBar.selectEntscheidDropdown(testData.step1.entscheid)
         .checkAblehnungMassnahmeDropdownContains(testData.step1.ablehnungMassnahme);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisibleAndWaitForDisappeared();
    pageBase.waitForLoadingDisappears();
  });

  it(`Step 2: Delete LG / LC
      Select LC=010
      Observe "Ablehnung Massnahme" field -> "Ablehnung Massnahme" set as M06`, () => {
    cy.skipOn(Cypress.env("isJira") === true);
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
    pages.notification.checkSuccessMessageVisibleAndWaitForDisappeared();
    pages.entscheid.detail.basisdatenTabBar.checkAblehnungMassnahmeDropdownContains(testData.step2.ablehnungMassnahme)
         .clearLeistungscodeDropdown()
         .clearLeistungsgruppeDropdown()
         .selectLeistungscodeDropdownByTyping(testData.step3.lc)
         .checkAblehnungMassnahmeDropdownEmpty(true);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pageBase.waitForLoadingDisappears();
    pages.entscheid.detail.basisdatenTabBar.checkLeistungscodeDropdownContains(testData.step3.lc)
         .checkAblehnungMassnahmeDropdownEmpty(true);
  });

  it(`Step 4: 
      Set LC=571 and Save changes -> "Ablehnung Massnahme" set as M05 and User doesn't see in panel message anything about this field
      Delete value from the dynselect pressing on x and Save -> "Ablehnung Massnahme" set as empty and in panel message User sees an info about "Ablehnung Massnahme"`, () => {
    pages.entscheid.detail.basisdatenTabBar
         .clearLeistungscodeDropdown()
         .clearLeistungsgruppeDropdown()
         .selectLeistungscodeDropdownByTyping(testData.step4.lc)
         .checkAblehnungMassnahmeDropdownContains(testData.step4.ablehnungMassnahme);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisibleAndWaitForDisappeared();
    pages.checkMsgWarningContainsText(testData.step4.msg, false);
    pages.entscheid.detail.basisdatenTabBar.clearAblehnungMassnahmeDropdown();
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.checkMsgWarningContainsText(testData.step4.msg, true);
  });

  after(function() {
    pages.entscheid.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn()
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  afterEach(function() {
    console.log(this.currentTest.state);
    if (this.currentTest.state === "pending") {
      Cypress.log(this.currentTest.err);
      Cypress.runner.stop();
    }
  });
});
