import pages from "../../support/base/OsivPageObject";
import helpers from "../../support/helpers/HelperObject";

const testData = {
  name     : "Trovato",
  firstname: "Daniele",
  birthdate: "13.07.1970",
  gender   : "Männlich"
};

describe(`C43263: VP ZAS - Query - smoke test; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/43263; 
  DEFECT(step 5): https://jiraosiv3g.atlassian.net/browse/OSIV-22863`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
    helpers.jira.isJiraDone("OSIV-22863").then((isDone) => {
      console.log(isDone);
      if (isDone === false) {
        Cypress.env("isJira", true);
        console.log(Cypress.env("isJira"));
      }
    });
  });

  it(`Step 1: login as hulk1 and navigate to desktop VP`, () => {
    pages.desktopMenu.navigateToVersicherteTab();
  });

  it(`Step 2: click the PLUS icon that triggers the dialog to create a new VP`, () => {
    pages.versicherte.grid.clickPlusBtn();
    pages.modalWindow.waitForLoaded();
  });

  it(`Step 3: within the dialog type name=Trovato, firstname=Daniele, Birthdate=13.7.1970, Gender=M`, () => {
    pages.versicherte.neuerVersicherterPopup.setNameTxt(testData.name)
         .setVornameTxt(testData.firstname)
         .setGeburtsdatumDate(testData.birthdate)
         .selectGeschlechtDropdown(testData.gender);
  });

  it(`Step 4:click ZAS button`, () => {
    pages.versicherte.neuerVersicherterPopup.clickZasDatenBtn()
         .waitForLoaded();
  });

  it(`Step 5: VERIFY you get a valid response with 3 records where only the top most is set to active`, () => {
    // TODO Defect
    cy.skipOn(Cypress.env("isJira") === true);
    pages.versicherte.neuerVersicherterPopup.zasDatenAbfragenPopup
         .grid.checkGridRowCount(3);
    pages.versicherte.neuerVersicherterPopup.zasDatenAbfragenPopup
         .grid
         .filter.checkNachnameTxt(testData.name)
         .checkVornameTxt(testData.firstname)
         .checkGeburtsDatTxt(testData.birthdate)
         .checkGeschlechtDropdown(testData.gender);
    pages.versicherte.neuerVersicherterPopup.zasDatenAbfragenPopup
         .grid.checkIfRowActive(1, true)
         .checkIfRowActive(2, false)
         .checkIfRowActive(3, false);
  });
});
