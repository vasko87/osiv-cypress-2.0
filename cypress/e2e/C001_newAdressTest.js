import pages from "../support/base/OsivPageObject";
import flows from "../support/base/OsivFlowsObject";
import {c001 as testData} from "../support/helpers/DataManager";

describe(`#: Test to add a new adress with Frau solutation`, () => {
  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it("Step: Navigate to Adressen and click 'Adressen new' btn", () => {
    pages.loginPage.openUrl();
    pages.desktopMenu.navigateToAdressenTab();
    pages.adressen.grid.clickAdressenNewBtn();
    pages.adressen.addDialog.waitForLoaded();
  });

  it("Step: Fill in Adressen form;", () => {
    pages.adressen
        .addDialog
        .selectAdressTypeDropdown(testData.adressTypeDropdown)
        .selectSpracheDropdown(testData.spracheDropdown)
        .selectAnredeartDropdown(testData.anredeartDropdown)
        .selectTitelDropdown(testData.titelDropdown)
        .selectPlzDropdownDropdown(testData.plzDropdown);
    pages.adressen.addDialog.elements.nameTxt().type(testData.nameTxt);
    pages.adressen.addDialog.elements.vornameTxt().type(testData.vornameTxt);
  });

  it(`Step: Click Generate btn => Ok confirmation; OK warning popup -> verify success message`, () => {
    pages.adressen.addDialog.elements.generierenBtn().click();
    flows.modalPopup.clickOkBtn_warningOk_CheckSuccessMsg();
  });

  // Add test steps dependency of each other. If any step fail - test stops
  afterEach(function() {
    if (this.currentTest.state === "failed") {
      const screenshotFileName = `${test.title} (failed).png`;
      cy.screenshot(screenshotFileName);
      Cypress.runner.stop();
    }
  });
});
