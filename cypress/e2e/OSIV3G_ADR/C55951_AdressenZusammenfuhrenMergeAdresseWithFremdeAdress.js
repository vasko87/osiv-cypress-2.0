import pages from "../../support/base/OsivPageObject";

const testData = {
  test1: {
    tcNumber: 1,
    adr1: "619915",
    adr2: "619911",
    adressLine: "Frau Dr. med. Susan Basak, Badenerstrasse 678, 8048 Zürich"
  },
  test2: {
    tcNumber: 2,
    adr1: "619912",
    adr2: "39248",
    adressLine: "Ambimed Basel AG, Augenchirurgische Tagesklinik, Klingentalstrasse 9, 4057 Basel"
  }
};

// TODO waiting for 3 datasets from JANE
describe(`[IMPORTANT: Doestn't work for DataSet2 and DataSet3 - waiting for data from Jane];
          C55951: Adressen zusammenführen_merge adresse with fremde adress;
          TestRail: https://osiv.testrail.net/index.php?/cases/view/55951`, {failFast: {enabled: true}}, () => {
  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  [testData.test1, testData.test2].forEach((data) => {
    it(`Test case ${data.tcNumber}`, () => {
      cy.log(`Step 1: Open adr1 (${data.adr1} )`);
      pages.loginPage.openUrl();
      pages.desktopMenu.navigateToAdressenTab();
      pages.adressen.grid.searchAndOpenAdresseID(data.adr1);

      cy.log(`Step 2: click "Adressen zusammenführen" button`);
      pages.adressen.detail.ribbonMenu.clickAdressenZusammenfuhrenBtn()
           .waitForLoaded();

      cy.log(`Step 3: Search for adr2 (${data.adr2}`);
      pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.headerActivePanel.selectAllDropdown();
      pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.filter.searchAdresseID(data.adr2);

      cy.log(`Step 4: Select adress and click  Zusammenführen button`);
      pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.setAllRowsCheckboxesSelected(true);
      pages.adressen.detail.adressenZusammenfuehrenpPopup.clickZusammenfuhrenBtn();

      cy.log(`Confirm frage (OSCIADR:108)`);
      pages.confirmPopup.ckeckConfirmationContainsText("(OSCIADR:108)");
      pages.confirmPopup.clickJaBtn();

      cy.log(`confirm warning  (OSCIADR:110)`);
      pages.warningPopup.checkWarningContainsText("(OSCIADR:110)");
      pages.warningPopup.clickOkBtn();

      cy.log(` confirm Hinweis  (OSCIADR:109)`);
      pages.infoPopup.ckeckInformationContainsText("(OSCIADR:109)");
      pages.infoPopup.clickOkBtn();
      pages.infoPopup.clickOkBtn();

      cy.log(`Expected 1: adr2 deleted`);
      pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.checkGridRowsCount(0);
      pages.adressen.detail.adressenZusammenfuehrenpPopup.clickAbbrechenBtn();
      pages.waitForLoadingDisappears();
      pages.infoPopup.clickOkBtnIfVisible();
      pages.nav.clickHomeBtn();
      pages.adressen.grid.waitGridViewLoaded();
      pages.adressen.grid.filter.searchAdresseID(data.adr2);
      pages.adressen.grid.checkGridRowsCount(0);

      cy.log(`Expected 2: fremde adress of adr2 is presented for adr1`);
      pages.adressen.grid.searchAndOpenAdresseID(data.adr1);
      pages.adressen.detail.sideMenu.navigateToAuszahlungTab()
           .waitForLoaded()
           .checkAdresseDropdownContains(data.adressLine);
    });
  });
});
