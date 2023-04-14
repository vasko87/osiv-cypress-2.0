import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {c51287 as testData} from "../../../support/helpers/DataManager";

describe(`C51286: Calculations from the Invalideneinkommen fieldset for the Frühinvalidität entity (Part 3)" 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/51287`, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open ENT = ${testData.entId}
  Step 2: Navigate to "Rente" sidebar and double click on existed Frühinvalidität record
  Step 3: Set Lohnart=Stundenlohn; `, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
    pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded();
    pages.entscheid.detail.renteTab.grid.dblClickRowValue(testData.methode);
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnartS);
  });

  it(`Step 4: Set Fr.=2 and "Soziallohn / Gewinnkosten in %"=4 ->
  Field “SL/GK in Fr. pro Monat” is recalculated and it's value=9`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .setFrInvalideneinkommenTxt(testData.step4.fr)
         .setSoziallohnGewinnkostenInPersentTxt(testData.step4.soziallohnGewinnkostenInPersent)
         .checkSLGKInFrProMonatTxt(testData.step4.sLGKInFrProMonat);
  });

  it(`Step 5: Set Fr.=3 and "Soziallohn / Gewinnkosten in %"=3 ->
  Field “SL/GK in Fr. pro Jahr” is recalculated and it's value=120`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .setFrInvalideneinkommenTxt(testData.step5.fr)
         .setSoziallohnGewinnkostenInPersentTxt(testData.step5.soziallohnGewinnkostenInPersent)
         .checkSLGKInFrProJahrTxt(testData.step5.sLGKInFrProJahr);
  });

  it(`Step 6: Set Fr.=8 and "Abzug in %"=2 ->
  Field “Abzug in Fr. pro Monat” is recalculated and it's value=17`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .setFrInvalideneinkommenTxt(testData.step6.fr)
         .setAbzugInPersentTxt(testData.step6.abzugInPersent)
         .checkAbzugInFrProMonatTxt(testData.step6.abzugInFrProMonat);
  });

  it(`Step 7: Set Fr.=7 and "Abzug in %"=2 ->
  Field “Abzug in Fr. pro Jahr” is recalculated and it's value=180`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .setFrInvalideneinkommenTxt(testData.step7.fr)
         .setAbzugInPersentTxt(testData.step7.abzugInPersent)
         .checkAbzugInFrProJahrTxt(testData.step7.abzugInFrProJahr);
  });
});
