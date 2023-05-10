import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {spec} from "mocha/lib/reporters";

const testData = {
  entId                          : "23153",
  methode                        : "Fruehinvaliditaet",
  lohnart                        : "Jahreslohn",
  fr                             : "50'000",
  soziallohnGewinnkostenInPersent: "10.00",
  abzugInPersent                 : "2.00",
  sLGKInFrProMonat               : "385",
  abzugInFrProMonat              : "77",
  sLGKInFrProJahr                : "5'000",
  abzugInFrProJahr               : "1'000",
  totalInFr                      : "44'000"
};

describe(`C50500: Test Sociallohn and Abzug rows - with yearly income (Jahreslohn)
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50500`, {failFast: {enabled: true, strategy: spec}}, () => {

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
  "Soziallohn/Gewinnkosten in %" = 10.00, 
  "Abzug in %" = 2.00;`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnart)
         .setFrInvalideneinkommenTxt(testData.fr)
         .setSoziallohnGewinnkostenInPersentTxt(testData.soziallohnGewinnkostenInPersent)
         .setAbzugInPersentTxt(testData.abzugInPersent);
  });

  it(`Expected: calc fields:
   “SL/GK in Fr. pro Monat” = 385, 
   "Abzug in Fr. pro Monat" = 77, 
   “SL/GK in Fr. pro Jahr” = 5'000, 
   "Abzug in Fr. pro Jahr" = 1'000, 
   "Total in Fr." = 44'000`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .checkSLGKInFrProMonatTxt(testData.sLGKInFrProMonat)
         .checkAbzugInFrProMonatTxt(testData.abzugInFrProMonat)
         .checkSLGKInFrProJahrTxt(testData.sLGKInFrProJahr)
         .checkAbzugInFrProJahrTxt(testData.abzugInFrProJahr)
         .checkTotalInFrTxt(testData.totalInFr);
  });
});
