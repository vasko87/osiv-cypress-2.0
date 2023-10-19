import pages from "../../support/base/OsivPageObject";

const testData = {
  adr1: "750604",
  adr2: "560619",
  text: "Test adressen"
};

//TODO waiting for 3 datasets from JANE
describe(`[SKIPPED: Waiting for 3 datasets from Jane] 
          C55949: Adressen zusammenführen_merge adress with Ansprechpartner address;
          TestRail: https://osiv.testrail.net/index.php?/cases/view/55949`, {failFast: {enabled: true}}, () => {
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

  });

  it(`Expected 1: adress is not presented in the list of adresses in Adressen zusammenführen`, () => {
    pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.checkGridRowsCount(0);
    pages.adressen.detail.adressenZusammenfuehrenpPopup.clickAbbrechenBtn();
    pages.infoPopup.clickOkBtnIfVisible();
    pages.waitForLoadingDisappears();
  });

  it(`Expected 2: Ansprechpartner address is merged to the main address;
      additionally check that buttons new and speichern are disabled, Loschen is enabled`, () => {
    pages.adressen.detail.sideMenu.navigateToAnsprechpartnerTab()
         .waitForLoaded()
         .adresseZuhandenGrid
         .checkGridRowsCount(1)
         .checkValueInGridExists(testData.text);
    pages.adressen.detail.ribbonMenu.checkNeuBtnDisabled(true)
         .checkSpeichernBtnDisabled(true)
         .checkLoschenBtnDisabled(false);
    pages.nav.clickHomeBtn();
  });

  it(`Expected 3: adress is not found on adress list`, () => {
    pages.adressen.grid.waitGridViewLoaded();
    pages.adressen.grid.filter.searchAdresseID(testData.adr2);
    pages.adressen.grid.checkGridRowsCount(0);
  });
});
