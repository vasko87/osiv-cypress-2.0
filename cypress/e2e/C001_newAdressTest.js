import pages from "../support/base/OsivPageObject";
import flows from "../support/base/OsivFlowsObject";
import {c001 as testData} from "../support/helpers/DataManager";
import helpers from "../support/helpers/HelperObject";

// TODO: example how to have test data directly in the test
// const testData = {
//   vpName: "Crood Eep"
// }

// TODO: STEPS DEPANDENCIES FEATURE
// use option {failFast: {enabled: true}} - to make skipping the rest of tests on first failure.
// use option {failFast: {enabled: false}} - to make not skipping the rest of tests on first failure.
describe(`#: New address`, {failFast: {enabled: true}}, () => {
  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    // TODO: JIRA FEATURE EXAMPLE
    // To check if JIRA is not fixed for this scenario:
    //
    // helpers.jira.isJiraDone("OSIV-22145").then((isDone) => {
    //   console.log(isDone);
    //   if (isDone === false) {
    //     Cypress.env("isJira", true);
    //     console.log(Cypress.env("isJira"));
    //   }
    // });

    // To skip step do the following in the beggining of the step:
    // cy.skipOn(Cypress.env("isJira") === true);
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

// TODO: in case of Jira and step with jira skipped and you want to skip all further steps - use this afterEach method
  // afterEach(function() {
  //   console.log(this.currentTest.state);
  //   if (this.currentTest.state === "pending") {
  //     Cypress.log(this.currentTest.err);
  //     Cypress.runner.stop();
  //   }
  // });
});

