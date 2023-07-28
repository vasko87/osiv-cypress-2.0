import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";
import {c50511 as testData} from "../../../../support/helpers/DataManager";

describe(`C50511: The calculated fields of the "Neue gemischte Methode" modal window" 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50511`, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open ENT = ${testData.entId};
    Step 2: Navigate to 'Rente' sidebar;
    Step 3: Click on button 'Neue gemischte Methode`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
      pages.entscheid.detail.sideMenu.navigateToRenteTab()
           .waitForLoaded();
    pages.entscheid.detail.ribbonMenu.clickNeueGemischteMethodeBtn()
         .waitForLoaded();
  });

  it(`Step 4: The value in field 'Anteil in %' is set to 100 -> 
  The value in field "Anteil in %" is set to 100`, () => {
    pages.entscheid.detail.renteTab.gemischtePopup
         .mischrechnungBlock
         .setAnteilInGekvTxt(testData.step4.anteilGekvTxt_toSet)
         .checkAnteilGekvTxt(testData.step4.anteilGekvTxt_toCheck);
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
    pages.entscheid.detail.renteTab.gemischtePopup
         .invalideneinkommenBlock
         .selectLohnartDropdown(testData.step5.lohnartDropdown)
         .setFrInvalideneinkommenTxt(testData.step5.frInvalideneinkommenTxt)
         .setInFrProJahrTxt(testData.step5.jahreslohnInFr)
         .setSLGKInFrProJahrTxt(testData.step5.sLGKInFrProJahrTxt)
         .setAbzugInFrProJahrTxt(testData.step5.abzugInFrProJahrTxt);
    pages.entscheid.detail.renteTab.gemischtePopup
         .valideneinkommenBlock
         .setIndexierungInFrProJahrTxt(testData.step5.indexierungInFrProJahrTxt)
         .setReallohnerhohungInFrProJahrTxt(testData.step5.reallohnerhohungInFrProJahrTxt);
    pages.entscheid.detail.renteTab.gemischtePopup
         .invalidenGradRenteBlock
         .checkInvGradTxt(testData.step5.invGrad)
         .checkRenteTxt(testData.step5.renteTxt);
  });

  it(`Step 6: Change "Invaliden-Grad ab" -> "Rente ab" is recalculated based on "Invaliden-Grad ab"`, () => {
    pages.entscheid.detail.renteTab.gemischtePopup.invalidenGradRenteBlock
         .setInvGradTxt(testData.step6.invGrad2)
         .checkRenteTxt(testData.step6.renteTxt2);
  });

  it(`Step 7: Set value 50 to all fields "Anteil in % and 100 to second and third field "Invaliditat in %" ->
  The all fields Gew. Inv are calculated as "Invaliditat in %"/2 
  (full rule is "Invaliditat in %" / (100 / "Anteil in %") correspondingly`, () => {
    pages.entscheid.detail.renteTab.gemischtePopup.mischrechnungBlock
         .setAnteilInGekvTxt(testData.step7.anteilInPersent)
         .setAnteilInPersent1Txt(testData.step7.anteilInPersent)
         .setAnteilInPersent2Txt(testData.step7.anteilInPersent)
         .setInvaliditat1Txt(testData.step7.invaliditat)
         .setInvaliditat2Txt(testData.step7.invaliditat)
         .checkGewInvTxt(testData.step7.invaliditat / (100 / testData.step7.anteilInPersent))
         .checkGewInv1Txt(testData.step7.invaliditat / (100 / testData.step7.anteilInPersent))
         .checkGewInv2Txt(testData.step7.invaliditat / (100 / testData.step7.anteilInPersent));
  });
});
