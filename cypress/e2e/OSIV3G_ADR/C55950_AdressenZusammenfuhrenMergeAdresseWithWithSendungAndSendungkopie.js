import pages from "../../support/base/OsivPageObject";

const testData = {
  adr1: "1022000",
  adr2: "1022001"
};

//TODO waiting for 3 datasets from JANE
describe(`[SKIPPED: Waiting for 3 datasets from Jane] 
          C55950: Adressen zusammenführen_merge adresse with with sendung and sendungkopie;
          TestRail: https://osiv.testrail.net/index.php?/cases/view/55950`, {failFast: {enabled: true}}, () => {
  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open adr1 (${testData.adr1} )`, () => {
    pages.loginPage.openUrl();
    pages.desktopMenu.navigateToAdressenTab();
    pages.adressen.grid.searchAndOpenAdresseID(testData.adr1);
  });

  it(`Step 2: click "Adressen zusammenführen" button`, () => {
    pages.adressen.detail.ribbonMenu.clickAdressenZusammenfuhrenBtn()
         .waitForLoaded();
  });

  it(`Step 3: Search for adr2 (${testData.adr2})`, () => {
    pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.headerActivePanel.selectAllDropdown();
    pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.filter.searchAdresseID(testData.adr2);
  });

  it(`Step 4: Select adress and click  Zusammenführen button`, () => {
    pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.setAllRowsCheckboxesSelected(true);
    pages.adressen.detail.adressenZusammenfuehrenpPopup.clickZusammenfuhrenBtn();
  });

  it(`Step 5: Confirm frage (OSCIADR:108)
      confirm warning  (OSCIADR:110)
      confirm Hinweis  (OSCIADR:109)`, () => {
    pages.confirmPopup.ckeckConfirmationContainsText("(OSCIADR:108)");
    pages.confirmPopup.clickJaBtn();
    pages.warningPopup.checkWarningContainsText("(OSCIADR:110)");
    pages.warningPopup.clickOkBtn();
    pages.infoPopup.ckeckInformationContainsText("(OSCIADR:109)");
    pages.infoPopup.clickOkBtn();
  });

  it(`Expected 1: adress is not presented in the list of adresses in Adressen zusammenführen`, () => {
    pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.checkGridRowsCount(0);
    pages.adressen.detail.adressenZusammenfuehrenpPopup.clickAbbrechenBtn();
    pages.waitForLoadingDisappears();
    pages.nav.clickHomeBtn();
  });

  it(`Expected 2: adress is not found on adress list`, () => {
    pages.adressen.grid.waitGridViewLoaded();
    pages.adressen.grid.filter.searchAdresseID(testData.adr2);
    pages.adressen.grid.checkGridRowsCount(0);
  });

  it(`Expected 3: for senung id = 123459345 > only copy with adr1 left
      for senung id = 123459346 > adress of sendung copy is changed to adr1
      for sendung id =123459351 > copy is deleted
      for senung 123459347 and 123459348 adress is not changed`, () => {

  });

});
