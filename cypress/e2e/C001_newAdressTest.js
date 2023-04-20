import pages from "../support/base/OsivPageObject";
import flows from "../support/base/OsivFlowsObject";
import {c001 as testData} from "../support/helpers/DataManager";

// use option {failFast: {enabled: true}} - to make skipping the rest of tests on first failure.
// use option {failFast: {enabled: false}} - to make not skipping the rest of tests on first failure.
describe(`#: New address`, {failFast: {enabled: true}}, () => {
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
});

