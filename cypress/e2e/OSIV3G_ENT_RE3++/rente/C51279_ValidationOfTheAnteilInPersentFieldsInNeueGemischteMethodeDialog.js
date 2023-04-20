import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import helpers from "../../../support/helpers/HelperObject";

const testData = {
  entId              : "23178",
  methode            : "GemischteMethode",
  anteilInPersent    : "90",
  anteilInPersent1   : "5",
  anteilInPersent2   : "15",
  errMsg             : "Das Total der Anteile der Mischrechnung darf 100% nicht überschreiten. (OSCINVGRAD:77)",
  anteilInPersent2New: "2"
};

describe(`C51279: Validation of the "Anteil in %" fields in "Neue gemischte Methode" dialog" 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/51279`, {failFast: {enabled: false}}, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open Entscheid = ${testData.entId}
  Step 2: Navigate to "Rente" sidebar
  Step 3: Double click on the existed Gemischte Methode record in the right grid`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
    pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded();
    pages.entscheid.detail.renteTab.grid.dblClickRowValue(testData.methode);
    pages.entscheid.detail.renteTab.gemischtePopup.waitForLoaded();
  });

  it(`Step 4: Check that the error "Das Total der Anteile der Mischrechnung darf nicht 100% überschreiten."
  appears if sum of all "Anteil in %" is greater then 100`, () => {
    pages.entscheid.detail.renteTab.gemischtePopup.mischrechnungBlock
         .setAnteilInPersentTxt(testData.anteilInPersent)
         .setAnteilInPersent1Txt(testData.anteilInPersent1)
         .setAnteilInPersent2Txt(testData.anteilInPersent2);
    pages.entscheid.detail.renteTab.gemischtePopup.invalidenGradRenteBlock
         .setRenteAbDate(helpers.date.getCurrentDate());
    pages.entscheid.detail.renteTab.gemischtePopup.clickOkBtn();
    pages.errorPopup.ckeckErrorContainsText(testData.errMsg)
         .clickOkBtn();
  });

  it(`Step 5: Set values to all "Anteil in %" fields so that the sum will be less than 100 and try to save ->
  Wollen sie die Daten trotzdem speichern?"`, () => {
    pages.entscheid.detail.renteTab.gemischtePopup.mischrechnungBlock
         .setAnteilInPersent2Txt(testData.anteilInPersent2New);
    pages.entscheid.detail.renteTab.gemischtePopup.invalidenGradRenteBlock
         .setRenteAbDate(helpers.date.getCurrentDate());
    pages.entscheid.detail.renteTab.gemischtePopup.clickOkBtn();
    pages.warningPopup.checkWarningVisible(true);
  });
});
