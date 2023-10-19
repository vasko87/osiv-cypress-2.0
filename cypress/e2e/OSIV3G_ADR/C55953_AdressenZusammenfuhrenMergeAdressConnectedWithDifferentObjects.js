import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";

const testData = {
  adr1: "1021467",
  adr2: "1021997",
  vpName: "Eing Adresse",
  adressLine: "Frau Dr. med. Susan Basak, Badenerstrasse 678, 8048 Zürich"
};

//TODO waiting for 3 datasets from JANE
describe(`[SKIPPED: Waiting for 3 datasets from Jane] 
          C55953: Adressen zusammenführen_merge adress connected with different objects;
          TestRail: https://osiv.testrail.net/index.php?/cases/view/55953`, {failFast: {enabled: true}}, () => {
  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

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

  it(`Expected: adress is changed for adressverbindengen, sendung, sendungcopy, dfstellen, fallfuhrung, 
  Versicherungen, Haftpflichtige of VP Eing Adresse`, {failFast: {enabled: false}}, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.vpName);
    pages.versicherte.detail.sideMenu.navigateToAdressverbindungenTab();
  });
});
