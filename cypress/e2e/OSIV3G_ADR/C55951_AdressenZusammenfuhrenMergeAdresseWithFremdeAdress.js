import pages from "../../support/base/OsivPageObject";

const testData = {
  adr1: "619915",
  adr2: "619911"
};

//TODO waiting for 3 datasets from JANE
describe(`[SKIPPED: Waiting for 3 datasets from Jane] 
          C55951: Adressen zusammenführen_merge adresse with fremde adress;
          TestRail: https://osiv.testrail.net/index.php?/cases/view/55951`, {failFast: {enabled: true}}, () => {
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
    pages.infoPopup.clickOkBtn();
  });

  it(`Expected 1: adress is not presented in the list of adresses in Adressen zusammenführen`, () => {
    pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.checkGridRowsCount(0);
    pages.adressen.detail.adressenZusammenfuehrenpPopup.clickAbbrechenBtn();
    pages.confirmPopup.clickJaBtn();
    pages.waitForLoadingDisappears();
  });

  it(`Expected 2: fremde adress of adr2 is presented for adr1`, () => {
    pages.adressen.detail.;
    pages.adressen.grid.filter.searchAdresseID(testData.adr2);
    pages.adressen.grid.checkGridRowsCount(0);
  });

  it(`Expected 3: Ansprechpartner address is merged to the main address`, () => {

  });

});
