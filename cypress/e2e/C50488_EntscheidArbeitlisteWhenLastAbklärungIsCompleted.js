import pages from "../support/base/OsivPageObject";

describe(`C50488: Entscheid arbeitliste when last Abklärung is completed; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/50488`, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Scenario 1: Open Gesuch 1 (14306)
  Open sendungens linked to Gesuch and Entscheid
  Close first Sendungen
  --> Verify: Entscheid AL is not changed (stays in Warten)
  Close second sendung
  --> Verify: Entscheid AL is set to Neu`, () => {
    pages.loginPage.openUrl();
    pages.desktopMenu.navigateToVersicherteTab();
    pages.versicherte.grid.searchAndOpenVersicherteName(testData.versicherteName);
    pages.versicherte.detail.waitForLoaded();
    pages.versicherte.detail.tabBar.navigateToEntscheideTab();
    pages.versicherte.detail.entscheidGrid.dblClickRowWithText(testData.entId);
    pages.entscheid.detail.sideMenu.navigateToDurchfuhrungsstellenTab();
  });
});
