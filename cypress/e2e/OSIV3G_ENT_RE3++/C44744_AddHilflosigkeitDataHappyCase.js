import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import helpers from "../../support/helpers/HelperObject";
import {c44744 as testData} from "../../support/helpers/DataManager";
import addContext from "mochawesome/src/addContext";

describe(`C44744: (ENT ${testData.entId}) Add Hilflosigkeit data Happy case; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/44744`, () => {

  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it("Step 1: Open ENT", () => {
    pages.loginPage.openUrl();
    pages.warningPopup.clickOkBtn();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
  });

  it("Step 2: Open Hilflosigkeit", () => {
    pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab();
  });

  it("Step 3: fill in mandatory field Art der Invalidität", () => {
    pages.entscheid.detail.hilflosigkeitTab.allgemeineAngabenBlock
         .selectArtderInvaliditatDropdown(testData.artderInvaliditatDropDown)
         .selectAusgleichskasseDropdown(testData.ausgleichskasseDropdown);
  });

  it("Step 4: fill in 'Alltägliche Lebensverrichtung' or/and 'Lebenspraktische Begleitung' fields", () => {
    pages.entscheid.detail
      .hilflosigkeitTab.alltaglicheLebensverrichtungBlock
      .setAnAuskleidenDate(helpers.date.getCurrentDate())
      .setAufstehenAbsitzenDate(helpers.date.getCurrentDate())
      .setEssenDate(helpers.date.getCurrentDate());
  });

  it("Step 5: Click Speichern button >> warning is presented (OSCIENT:465); Confirm warning", () => {
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.checkWarningContainsText(testData.warningMessage)
      .clickOkBtn();
  });

  it("Step 6: System calculated Wartefrist", () => {
    pages.entscheid.detail
      .hilflosigkeitTab
      .allgemeineAngabenBlock
      .checkAblaufWartefristDate(helpers.date.getSameDayNextYear());
    pages.entscheid.detail
      .hilflosigkeitTab
      .wartefristBlock
      .checkWFGradTxt(testData.wFGradTxt)
      .checkTageTxt(helpers.date.getDaysDiffFromTodayTillSameDayNextYear())
      .checkGrenzgradTxt(testData.grenzgradTxt);
  });

  it("Step 7: Check system calculated Wartefrist Verlauf", () => {
    pages.entscheid.detail
      .hilflosigkeitTab
      .wartefristVerlaufBlock
      .checkBeginnDate(helpers.date.getCurrentDate())
      .checkEndeDate(helpers.date.getOneDayLessNextYear())
      .checkAnzahlTageTxt(helpers.date.getDaysDiffFromTodayTillSameDayNextYear())
      .checkHEGradinPersentTxt(testData.hEGradinPersentTxt);
  });

  it("Step 8: Check system calculated HE-Grad", () => {
    pages.entscheid.detail
      .hilflosigkeitTab
      .hEGradBlock
      .checkHEGradDropdown(testData.hEGradDropdown)
      .checkBeginnDate(helpers.date.getFirstDayOfSameMonthNextYear());
  });

  it("Step 9: Check system calculated HE-Grad Verlauf", () => {
    pages.entscheid.detail
      .hilflosigkeitTab
      .hEGradVerlaufBlock
      .checkHEGradAbTxt(helpers.date.getFirstDayOfSameMonthNextYear())
      .checkHEAbTxt(helpers.date.getFirstDayOfSameMonthNextYear())
      .checkHEGradTxt(testData.hEGradTxt);
  });

  it("Step 10: Click Speichern button >> warning is not presented", () => {
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.checkWarningVisible(false);
  });

  afterEach(function() {
    if (this.currentTest.state === "failed") {
      const screenshotFileName = `${test.title} (failed).png`;
      cy.screenshot(screenshotFileName);
      Cypress.runner.stop();
    }
  });
});
