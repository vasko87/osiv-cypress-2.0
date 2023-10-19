import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";

const testData = {
  adr1: "1022000",
  adr2: "1022001",
  adressLine1: "Frau Test Kopie, Mollstreet, 1000 Lausanne 12",
  adressLine2: "Frau Test Kopie1, Mollstreet, 1000 Lausanne 12",
  sen1: "123459345",
  sen2: "123459346",
  sen3: "123459351",
  sen4_5: ["123459347", "123459348"]
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

  it(`Expected: adress is not presented in the list of adresses in Adressen zusammenführen`, {failFast: {enabled: false}}, () => {
    pages.adressen.detail.adressenZusammenfuehrenpPopup.grid.checkGridRowsCount(0);
    pages.adressen.detail.adressenZusammenfuehrenpPopup.clickAbbrechenBtn();
    pages.waitForLoadingDisappears();
    pages.infoPopup.clickOkBtnIfVisible();
    pages.nav.clickHomeBtn();
  });

  it(`Expected: adress is not found on adress list`, {failFast: {enabled: false}}, () => {
    pages.adressen.grid.waitGridViewLoaded();
    pages.adressen.grid.filter.searchAdresseID(testData.adr2);
    pages.adressen.grid.checkGridRowsCount(0);
  });

  it(`Expected: for sendung ${testData.sen1} only copy with adr1 left`, {failFast: {enabled: false}}, () => {
    flows.sendungen.step_navigateSEN_searchBySENNr_openSEN(testData.sen1);
    pages.sendungen.detail.sideMenu.navigateToSendungskopieTab()
         .waitForLoaded()
         .sendungskopieGrid.checkGridRowsCount(1)
         .checkValueInGridExists(testData.adressLine1, true);
    pages.nav.clickHomeBtn();
  });

  it(`Expected: for sendung ${testData.sen2} adress of sendung copy is changed to adr1`, {failFast: {enabled: false}},() => {
    pages.sendungen.grid.waitGridViewLoaded();
    pages.sendungen.grid.searchAndOpenSendundenNr(testData.sen2);
    pages.sendungen.detail.waitForLoaded();
    pages.sendungen.detail.sideMenu.navigateToSendungskopieTab()
         .waitForLoaded()
         .sendungskopieGrid.checkGridRowsCount(1)
         .checkValueInGridExists(testData.adressLine1, true);
    pages.nav.clickHomeBtn();
  });

  it(`Expected: for sendung ${testData.sen3} copy is deleted`, {failFast: {enabled: false}}, () => {
    pages.sendungen.grid.waitGridViewLoaded();
    pages.sendungen.grid.searchAndOpenSendundenNr(testData.sen3);
    pages.sendungen.detail.waitForLoaded();
    pages.sendungen.detail.sideMenu.navigateToSendungskopieTab()
         .waitForLoaded()
         .sendungskopieGrid.checkGridRowsCount(0)
         .checkValueInGridExists(testData.adressLine1, false);
    pages.nav.clickHomeBtn();
  });

  testData.sen4_5.forEach((senId) => {
    it(`Expected: for sendung ${senId} adress is not changed`, {failFast: {enabled: false}}, () => {
      pages.sendungen.grid.waitGridViewLoaded();
      pages.sendungen.grid.searchAndOpenSendundenNr(senId);
      pages.sendungen.detail.waitForLoaded()
           .checkEmpfaengerDropdown(testData.adressLine2);
      pages.nav.clickHomeBtn();
    });
  });
});
