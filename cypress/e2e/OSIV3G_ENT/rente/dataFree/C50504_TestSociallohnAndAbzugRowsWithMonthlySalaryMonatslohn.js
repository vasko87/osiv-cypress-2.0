import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";

const testData = {
  entId                          : "23153",
  methode                        : "Fruehinvaliditaet",
  lohnart                        : "Monatslohn",
  fr                             : "4'000",
  soziallohnGewinnkostenInPersent: "10.00",
  abzugInPersent                 : "2.00",
  sLGKInFrProMonat               : "400",
  abzugInFrProMonat              : "80",
  sLGKInFrProJahr                : "5'200",
  abzugInFrProJahr               : "1'040",
  inFrProJahr                    : "52'000",
  totalInFr                      : "45'760"
};

describe(`C50504: Test Sociallohn and Abzug rows - with monthly salary (Monatslohn)
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50504`, {failFast: {enabled: true}}, () => {

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
  “Lohnart” = Monatslohn, 
  “in Fr” = 4’000 (yearly income ), 
  "Soziallohn/Gewinnkosten in %" = 10.00, 
  "Abzug in %" = 2.00;`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnart)
         .setFrInvalideneinkommenTxt(testData.fr)
         .setSoziallohnGewinnkostenInPersentTxt(testData.soziallohnGewinnkostenInPersent)
         .setAbzugInPersentTxt(testData.abzugInPersent);
  });

  it(`Expected: calc fields
   “SL/GK in Fr. pro Monat” = 400, 
   "Abzug in Fr. pro Monat" = 80, 
   “SL/GK in Fr. pro Jahr” = 5'200, 
   "Abzug in Fr. pro Jahr" = 1'040, 
   "Total in Fr." = 45'760, 
   "in Fr. pro Jahr" = 52'000`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .checkSLGKInFrProMonatTxt(testData.sLGKInFrProMonat)
         .checkAbzugInFrProMonatTxt(testData.abzugInFrProMonat)
         .checkSLGKInFrProJahrTxt(testData.sLGKInFrProJahr)
         .checkAbzugInFrProJahrTxt(testData.abzugInFrProJahr)
         .checkInFrProJahrTxt(testData.inFrProJahr)
         .checkTotalInFrTxt(testData.totalInFr);
  });
});
