import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import constants from "../../../support/helpers/Constants";
import {c58184 as testData} from "../../../support/helpers/DataManager";

describe.skip(`C58184: Displaying panel message OSCIENT:523 about needed ICD based of LC and Gebrechenscode 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/58184`, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open ENT = ${testData.entId}`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
  });

  it(`Step 2: [Test 1] Set Gebrechenscode = 646 and save" 
                        -> System should show the panel message OSCIENT:523`, () => {
    pages.entscheid.detail.basisdatenTabBar.selectGebrechenDropdownByTyping(testData.gebrechen_test1);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
    pages.checkMsgOnThePage(constants.MSG.OSCIENT_523, true);
  });

  it(`Step 3: [Test 2] Set Gebrechenscode = 111 and save 
                         -> System should NOT show the panel message OSCIENT:523`, () => {
    pages.entscheid.detail.basisdatenTabBar.selectGebrechenDropdownByTyping(testData.gebrechen_test2);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
    pages.checkMsgOnThePage(constants.MSG.OSCIENT_523, false);
  });

  it(`Step 4: [Test 3] Set Leistungscode = 757, change Bereich to "AHV", remove Supertext and save.
                          -> System should NOT show the panel message OSCIENT:523
                       Set any acceptable Supertext and save."; 
                          -> System should NOT show the panel message OSCIENT:523`, () => {
    pages.entscheid.detail.basisdatenTabBar.clearLeistungsgruppeDropdown()
         .clearLeistungscodeDropdown()
         .selectLeistungscodeDropdown(testData.leistungscode)
         .selectBereichDropdown(testData.bereich)
         .clearSupertextDropdown();
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.infoPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
    pages.checkMsgOnThePage(constants.MSG.OSCIENT_523, false);
    pages.entscheid.detail.basisdatenTabBar.selectSupertextDropdownByIndex(1);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
    pages.checkMsgOnThePage(constants.MSG.OSCIENT_523, false);
  });

  it(`Step 5: [Test 4] Set Gebrechenscode = 646 and save
                          -> System should NOT show the panel message OSCIENT:523`, () => {
    pages.entscheid.detail.basisdatenTabBar.selectGebrechenDropdownByTyping(testData.gebrechen_test4);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
    pages.checkMsgOnThePage(constants.MSG.OSCIENT_523, false);
  });
});
