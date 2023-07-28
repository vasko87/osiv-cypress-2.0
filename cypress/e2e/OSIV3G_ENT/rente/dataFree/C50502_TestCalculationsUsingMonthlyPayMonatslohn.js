import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";

const testData = {
  entId            : "23153",
  methode          : "Fruehinvaliditaet",
  lohnart          : "Monatslohn",
  fr               : "4000",
  anzahlMonathLohne: "13",
  inFrProJahr      : "52'000"
};

describe(`C50502: Test calculations - using monthly pay (Monatslohn) 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50502`, {failFast: {enabled: true}}, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open ENT = ${testData.entId}
  Navigate to "Rente" sidebar and double click on existed Frühinvalidität record`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
    pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded();
    pages.entscheid.detail.renteTab.grid.dblClickRowValue(testData.methode);
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.waitForLoaded();
  });

  it(`Step 2: 
  “Lohnart” = Monatslohn , 
  “in Fr” = 4000 (monthly salary ), 
  "Anzahl Monatslöhne" = 13; 
  Expected: calc field “in Fr. pro Jahr” = 52’000 (Yearly salary)`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnart)
         .setFrInvalideneinkommenTxt(testData.fr)
         .setAnzahlMonathLohneTxt(testData.anzahlMonathLohne)
         .checkInFrProJahrTxt(testData.inFrProJahr);
  });
});
