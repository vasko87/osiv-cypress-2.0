import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import helpers from "../../../support/helpers/HelperObject";

const testData = {
  entId         : "23178",
  methode       : "GemischteMethode",
  invGrad       : "120",
  invGradCorrect: "0.3",
  invaliditat2  : "105",
  errMsg        : "Ein oder mehrere Felder haben Validierungsfehler. Bitte korrigieren Sie die markierten Felder und speichern Sie dann erneut.",
  errField      : "Zahl ist größer als 100",
  errMsg2       : "Ein Inv.-Grad darf auch in der Mischrechnung 100% nicht überschreiten. (OSCINVGRAD:78)"
};

describe(`C51281: Validation of the "Invaliden-Grad in %" field in "Neue gemischte Methode" dialog
  TestRail:https://osiv.testrail.net/index.php?/cases/view/51281;`, {failFast: {enabled: false}}, () => {

  before(`Login`, function() {
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

  it(`Step 4: Set to the "Inv.Grad in %" field the value greater than 100 and try to save ->
  The red error message in the top right corner is appeared ("Ein oder mehrere Felder haben ...") 
  and the field "Inv.Grad in %" is highlighted by red and has a red validation text under textfield. "`, () => {
    pages.entscheid.detail.renteTab.gemischtePopup.invalidenGradRenteBlock
         .setInvGradTxt(testData.invGrad);
    pages.modalWindow.clickOkBtn();
    pages.notification.checkErrorMessageText(testData.errMsg);
    pages.entscheid.detail.renteTab.gemischtePopup.invalidenGradRenteBlock
         .checkInvGradColorRed()
         .checkInvGradValidationError(testData.errField)
         .checkInvGradValidationErrorColorRed()
         .setInvGradTxt(testData.invGradCorrect);
  });

  it(`Step 5: Set to the "Invalidität in %" field from the third row the value greater than 100 and try to save ->
  Error message is appeared "Ein Inv.-Grad darf auch in der Mischrechnung 100% nicht überschreiten. "`, () => {
    pages.entscheid.detail.renteTab.gemischtePopup.mischrechnungBlock
         .setInvaliditat1Txt("0")
         .setInvaliditat2Txt(testData.invaliditat2);
    pages.entscheid.detail.renteTab.gemischtePopup.invalidenGradRenteBlock
         .setRenteAbDate(helpers.date.getCurrentDate());
    pages.entscheid.detail.renteTab.gemischtePopup.clickOkBtn();
    pages.errorPopup.ckeckErrorContainsText(testData.errMsg2)
         .clickOkBtn();
  });
});
