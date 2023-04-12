import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {c50511 as testData} from "../../../support/helpers/DataManager";

describe(`C50511: The calculated fields of the "Neue gemischte Methode" modal window" 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50511`, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open ENT = ${testData.entId}`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
  });

  it("Step 2: Navigate to 'Rente' sidebar", () => {
    pages.entscheid.detail.sideMenu.navigateToRenteTab()
         .waitForLoaded();
  });

  it("Step 3: Click on button 'Neue gemischte Methode'", () => {
    pages.entscheid.detail.ribbonMenu.clickNeueGemischteMethodeBtn()
         .waitForLoaded();
  });

  it(`Step 4: The value in field 'Anteil in %' is set to 100 -> 
  The value in field "Anteil in %" is set to 100`, () => {
    pages.entscheid.detail.renteTab.gemischteCreatePopup
         .mischrechnungBlock
         .setAnteilInGekvTxt(testData.anteilGekvTxt_toSet)
         .checkAnteilGekvTxt(testData.anteilGekvTxt_toCheck);
  });

  it(`Step 5: Set value and change the focus from the following fields 
  and observe if "Invaliden-Grad in %" is recalculated after that:
    -"Gew. Inv",
    -"Jahreslohn in Fr.",
    -"Indexierung in Fr. pro Jahr ",
    -"Reallohnerhöhung in Fr. pro Jahr",
    -"SL/GK in Fr. pro Jahr",
    -"Abzug in Fr. pro Jahr" ,
    "Fr." (Invalideneinkommen ) -> "Invaliden-Grad in %" is recalculated`, () => {
    pages.entscheid.detail.renteTab.gemischteCreatePopup
         .invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnartDropdown)
         .setFrInvalideneinkommenTxt(testData.frInvalideneinkommenTxt)
         .setJahreslohnInFrTxt(testData.jahreslohnInFr)
         .setSLGKInFrProJahrTxt(testData.sLGKInFrProJahrTxt)
         .setAbzugInFrProJahrTxt(testData.abzugInFrProJahrTxt);
    pages.entscheid.detail.renteTab.gemischteCreatePopup
         .valideneinkommenBlock
         .setIndexierungInFrProJahrTxt(testData.indexierungInFrProJahrTxt)
         .setReallohnerhohungInFrProJahrTxt(testData.reallohnerhohungInFrProJahrTxt);
    pages.entscheid.detail.renteTab.gemischteCreatePopup
         .invalidenGradRenteBlock
         .checkInvGradTxt(testData.invGrad)
         .checkRenteTxt(testData.renteTxt);
  });

  it(`Step 6: Change "Invaliden-Grad ab" -> "Rente ab" is recalculated based on "Invaliden-Grad ab"`, () => {
    pages.entscheid.detail.renteTab.gemischteCreatePopup.invalidenGradRenteBlock
         .setInvGradTxt(testData.invGrad2)
         .checkRenteTxt(testData.renteTxt2);
  });

  it(`Step 7: Set value 50 to all fields "Anteil in % and 100 to second and third field "Invaliditat in %" ->
  The all fields Gew. Inv are calculated as "Invaliditat in %"/2 
  (full rule is "Invaliditat in %" / (100 / "Anteil in %") correspondingly`, () => {
    pages.entscheid.detail.renteTab.gemischteCreatePopup.mischrechnungBlock
         .setAnteilInGekvTxt(testData.anteilInPersent)
         .setAnteilInPersent1Txt(testData.anteilInPersent)
         .setAnteilInPersent2Txt(testData.anteilInPersent)
         .setInvaliditat1Txt(testData.invaliditat)
         .setInvaliditat2Txt(testData.invaliditat)
      .checkGewInvTxt(testData.invaliditat / (100 / testData.anteilInPersent))
      .checkGewInv1Txt(testData.invaliditat / (100 / testData.anteilInPersent))
      .checkGewInv2Txt(testData.invaliditat / (100 / testData.anteilInPersent));
  });

});
