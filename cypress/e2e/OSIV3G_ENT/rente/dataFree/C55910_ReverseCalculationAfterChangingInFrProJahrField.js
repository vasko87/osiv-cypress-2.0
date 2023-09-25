import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";

const testData = {
  entId         : "23160",
  lohnart       : "Stundenlohn",
  inFr_step4    : "32",
  inFrProJahr   : "150'000",
  monatslohnInFr: "12’500",
  inFR_expeccted: "72"
};

describe(`C55910: Reverse calculation after changing "in Fr. pro Jahr" field" 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/55910`, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open ENT = ${testData.entId}`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
  });

  it(`Step 2: Switch to tab "Rente"`, () => {
    pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded();
  });

  it(`Step 3: Click on button "Neuer Einkommensvergleich"; `, () => {
    pages.entscheid.detail.ribbonMenu.clickNeuerEinkommensvergleichBtn();
    pages.entscheid.detail.renteTab.einkommensvergleichPopup.waitForLoaded();
  });

  it(`Step 4: Set the following fields as:
      -Lohnart=Stundenlohn
      -in Fr.=32"; `, () => {
    pages.entscheid.detail.renteTab.einkommensvergleichPopup
         .invalideneinkommenBlock.selectLohnartDropdown(testData.lohnart)
         .setInFrTxt(testData.inFr_step4);
  });

  it(`Step 5: Change value in "in Fr. pro Jahr" from 66662 to 150000"; `, () => {
    pages.entscheid.detail.renteTab.einkommensvergleichPopup
         .invalideneinkommenBlock.setInFrProJahrTxt(testData.inFrProJahr);
  });

  it(`Expected 1: Recalculation of fields "Total in Fr.", "Monatslohn in Fr.", "in Fr." should perform, 
                and fields should be equal to:
                Total in Fr.=150000"; `, () => {
    pages.entscheid.detail.renteTab.einkommensvergleichPopup
         .invalideneinkommenBlock.checkTotalInFrTxt(testData.inFrProJahr);
  });

  it(`Expected 2: Monatslohn in Fr.=12500"; `, () => {
    pages.entscheid.detail.renteTab.einkommensvergleichPopup
         .invalideneinkommenBlock.checkMonatslohnInFrTxt(testData.monatslohnInFr);
  });

  it(`Expected 3: in Fr.=72"; `, () => {
    pages.entscheid.detail.renteTab.einkommensvergleichPopup
         .invalideneinkommenBlock.checkInFrTxt(testData.inFR_expeccted);
  });
});
