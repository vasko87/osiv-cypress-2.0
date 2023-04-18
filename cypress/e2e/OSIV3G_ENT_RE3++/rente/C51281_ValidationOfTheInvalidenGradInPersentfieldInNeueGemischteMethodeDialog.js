import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import helpers from "../../../support/helpers/HelperObject";

const testData = {
  entId       : "23178",
  methode     : "GemischteMethode",
  invGrad     : "120",
  invaliditat2: "105",
  errMsg      : "Der Inv.-Grad darf 100% nicht überschreiten.",
  errMsg2     : "Ein Inv.-Grad darf auch in der Mischrechnung 100% nicht überschreiten. (OSCINVGRAD:78)"
};

describe(`C51281: Validation of the "Invaliden-Grad in %" field in "Neue gemischte Methode" dialog
  TestRail:https://osiv.testrail.net/index.php?/cases/view/51281`, () => {

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
  });

  // it(`Step 4: Set to the "Invalidität in %" field from the second row the value greater than 100 and try to save ->
  // Error message is appeared "Ein Inv.-Grad darf auch in der Mischrechnung 100% nicht überschreiten. "`, () => {
  //   pages.entscheid.detail.renteTab.gemischtePopup.invalidenGradRenteBlock
  //        .setInvGradTxt(testData.invGrad);
  //   pages.entscheid.detail.renteTab.gemischtePopup.invalidenGradRenteBlock
  //        .setRenteAbDate(helpers.date.getCurrentDate());
  //   pages.entscheid.detail.renteTab.gemischtePopup.clickOkBtn();
  //   pages.errorPopup.ckeckErrorContainsText(testData.errMsg)
  //        .clickOkBtn();
  // });

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
