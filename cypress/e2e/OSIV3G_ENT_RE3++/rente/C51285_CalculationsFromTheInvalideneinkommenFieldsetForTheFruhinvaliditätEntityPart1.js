import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";

const testData = {
  entId: "23315",
  methode: "Fruehinvaliditaet",
  lohnartS: "Stundenlohn",
  lohnartM: "Monatslohn",
  lohnartJ: "Jahreslohn"
};

describe(`C51285: Calculations from the Invalideneinkommen fieldset for the Frühinvalidität entity (Part 1)" 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/51285`, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open ENT = ${testData.entId}
  Step 2: Navigate to "Rente" sidebar and double click on existed Frühinvalidität record`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
    pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded();
    pages.entscheid.detail.renteTab.grid.dblClickRowValue(testData.methode);
  });

  it(`Step 3: Set Lohnart=Stundenlohn -> 
  Fields “Stunden pro Tag”, “Tage die Woche”, “Monatslohn in Fr”. are visible`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnartS)
         .checkStundenProTagVisible(true)
         .checkTageDieWocheVisible(true)
         .checkMonatslohnInFrVisible(true);
  });

  it(`Step 4: Set Lohnart=Monatslohn -> 
  Fields “Stunden pro Tag”, “Tage die Woche”, “Monatslohn in Fr”. are set hidden`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnartM)
         .checkStundenProTagVisible(false)
         .checkTageDieWocheVisible(false)
         .checkMonatslohnInFrVisible(false);
  });

  it(`Step 5: Set Lohnart=Jahreslohn -> 
  Fields “Stunden pro Tag” and “Tage die Woche” are set hidden`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnartJ)
         .checkStundenProTagVisible(false)
         .checkTageDieWocheVisible(false)
         .checkMonatslohnInFrVisible(true);
  });
});
