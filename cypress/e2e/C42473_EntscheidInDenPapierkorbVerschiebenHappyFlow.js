import pages from "../support/base/OsivPageObject";
import {c42473 as testData} from "../support/helpers/DataManager";

describe.skip(`C42473: Entscheid 'In den Papierkorb verschieben' happy flow; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/42473`, () => {

  before(`Login as ${Cypress.env("username")}; 
  EntschediID = ${testData.entId} (Sendung is completed, the document in the DMS is available.)`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(testData.entId);
    pages.entscheid.detail.waitForLoaded();
  });

  it(`Step 1: Click "In den Papierkorb verschieben" button for entscheid from preconditions
  --> -dialog with ability to provide mandatory reason must show up`, () => {
    pages.entscheid.detail.ribbonMenu.clickInDenPapierkorbBtn();
    pages.modalWindow.waitForLoaded();
  });

  it(`Step 2: Select Losch-Grund -> Click OK -> Confirm warning (OSCIENT:370)`, () => {
  });

  it(`Expect: ENT is moved to the BIN`, () => {
  });

  it(`Expect: popup is closed, button 'In den Papierkorb verschieben' is not visible >> 
  button button "Aus dem Papierkorb wiederherstellen" is visible instead`, () => {
  });

  it(`Expect: check Meta_info for ENT`, () => {
  });

  afterEach(function() {
    if (this.currentTest.state === "failed") {
      const screenshotFileName = `${test.title} (failed).png`;
      cy.screenshot(screenshotFileName);
      // addContext({test}, `assets/${Cypress.spec.name}/${screenshotFileName}`);
      Cypress.runner.stop();
    }
  });
});

