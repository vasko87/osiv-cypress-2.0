import pages from "../support/base/OsivPageObject";

const testData = {
  adressTypeDropdown : "024",
  spracheDropdown    : "Deutsch",
  anredeartDropdown  : "Frau",
  titelDropdown      : "Dr",
  plzDropdown        : "1000",
  nameTxt            : "Maria",
  vornameTxt         : "Vasko"
};

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

  it("Step: Click Generate btn => Ok confirmation; OK warning popup", () => {
    pages.adressen.addDialog.elements.generierenBtn().click();
    pages.modalWindow.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  // Add test steps dependency of each other. If any step fail - test stops
  afterEach(function() {
    if (this.currentTest.state === "failed") {
      Cypress.runner.stop();
    }
  });
});
