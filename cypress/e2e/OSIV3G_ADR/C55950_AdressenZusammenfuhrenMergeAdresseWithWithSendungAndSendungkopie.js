import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import helperObject from "../../support/helpers/HelperObject";
import {c55950 as testData} from "../../support/helpers/DataManager";

describe(`[DEFECT: OSIV-24840 (steps: expected results SEN)]
          C55950: Adressen zusammenführen_merge adresse with with sendung and sendungkopie;
          TestRail: https://osiv.testrail.net/index.php?/cases/view/55950`, {failFast: {enabled: true}}, () => {
  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();

    helperObject.jira.isJiraDone("OSIV-24840").then((isDone) => {
      console.log(isDone);
      if (isDone === false) {
        Cypress.env("isJira", true);
        console.log(Cypress.env("isJira"));
      }
    });
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
    // TODO Jira
    cy.skipOn(Cypress.env("isJira") === true);
    flows.sendungen.step_navigateSEN_searchBySENNr_openSEN(testData.sen1);
    pages.sendungen.detail.sideMenu.navigateToSendungskopieTab()
         .waitForLoaded()
         .sendungskopieGrid.checkGridRowsCount(1)
         .checkValueInGridExists(testData.adressLine1, true);
    pages.nav.clickHomeBtn();
  });

  it(`Expected: for sendung ${testData.sen2} adress of sendung copy is changed to adr1`, {failFast: {enabled: false}},() => {
    // TODO Jira
    cy.skipOn(Cypress.env("isJira") === true);
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
    // TODO Jira
    cy.skipOn(Cypress.env("isJira") === true);
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
      // TODO Jira
      cy.skipOn(Cypress.env("isJira") === true);
      pages.sendungen.grid.waitGridViewLoaded();
      pages.sendungen.grid.searchAndOpenSendundenNr(senId);
      pages.sendungen.detail.waitForLoaded()
           .checkEmpfaengerDropdown(testData.adressLine2);
      pages.nav.clickHomeBtn();
    });
  });

  afterEach(function() {
    console.log(this.currentTest.state);
    if (this.currentTest.state === "pending") {
      Cypress.log(this.currentTest.err);
      Cypress.runner.stop();
    }
  });
});
