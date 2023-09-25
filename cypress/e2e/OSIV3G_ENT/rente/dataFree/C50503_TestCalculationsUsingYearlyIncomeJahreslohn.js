import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";

const testData = {
  entId            : "23153",
  methode          : "Fruehinvaliditaet",
  lohnart          : "Jahreslohn",
  fr               : "50'000",
  anzahlMonathLohne: "13",
  monatslohnInFr   : "3’846.15"
};

describe(`C50503: Test calculations - using Yearly income (Jahreslohn)
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50503`, {failFast: {enabled: true}}, () => {

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
  “Lohnart” = Jahreslohn, 
  “in Fr” = 50’000 (yearly income ), 
  "Anzahl Monatslöhne" = 13; 
  Expected: calc field “Monatslohn in Fr. ” = 3’846`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnart)
         .setInFrTxt(testData.fr)
         .setAnzahlMonathLohneTxt(testData.anzahlMonathLohne)
         .checkMonatslohnInFrTxt(testData.monatslohnInFr);
  });
});
