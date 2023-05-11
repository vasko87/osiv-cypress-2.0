import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";

const testData = {
  entId: "23315",
  methode: "Fruehinvaliditaet",
  lohnartS: "Stundenlohn",
  fr: "5",
  monatslohnInFr: "868"
};

describe(`C51286: Calculations from the Invalideneinkommen fieldset for the Frühinvalidität entity (Part 2)" 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/51286`, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open ENT = ${testData.entId}
  Step 2: Navigate to "Rente" sidebar and double click on existed Frühinvalidität record`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
    pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded();
    pages.entscheid.detail.renteTab.grid.dblClickRowValue(testData.methode);
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.waitForLoaded();
  });

  it(`Step 3: Set Lohnart=Stundenlohn; 
  Step 4: Set Fr.=5 -> Fields “Monatslohn in Fr.” recalculated and it's value=868`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnartS)
         .setFrInvalideneinkommenTxt(testData.fr)
         .checkMonatslohnInFrTxt(testData.monatslohnInFr);
  });
});
