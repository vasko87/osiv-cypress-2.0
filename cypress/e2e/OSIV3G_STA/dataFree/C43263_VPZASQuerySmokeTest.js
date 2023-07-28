import pages from "../../../support/base/OsivPageObject";

const testData = {
  name     : "Trovato",
  firstname: "Daniele",
  birthdate: "13.07.1970",
  gender   : "Männlich"
};

// @Bugs: OSIV-22863(Step 5)
describe(`C43263: VP ZAS - Query - smoke test; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/43263;`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
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
    pages.versicherte.neuerVersicherterPopup.zasDatenAbfragenPopup
         .grid.checkGridRowsCount(3);
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
