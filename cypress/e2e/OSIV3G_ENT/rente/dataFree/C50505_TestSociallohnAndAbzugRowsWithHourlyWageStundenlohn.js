import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";

const testData = {
  entId                          : "23153",
  methode                        : "Fruehinvaliditaet",
  lohnart                        : "Stundenlohn",
  fr                             : "40.00",
  stundenProTag                  : "7",
  tageDieWoche                   : "4",
  soziallohnGewinnkostenInPersent: "10.00",
  abzugInPersent                 : "2.00",
  sLGKInFrProMonat               : "486",
  abzugInFrProMonat              : "97",
  sLGKInFrProJahr                : "5'832",
  abzugInFrProJahr               : "1'164",
  totalInFr                      : "51'334"
};

describe(`C50505: Test Sociallohn and Abzug rows - with hourly wage (Stundenlohn)
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50505`, {failFast: {enabled: true}}, () => {

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
  “Lohnart” = Stundenlohn, 
  “in Fr” = 40.00, 
  "Stunden pro Tag" = 7
   "Soziallohn/Gewinnkosten in %" = 10.00, 
   "Abzug in %" = 2.00;`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnart)
         .setInFrTxt(testData.fr)
         .setStundenProTagTxt(testData.stundenProTag)
         .setTageDieWocheTxt(testData.tageDieWoche)
         .setSoziallohnGewinnkostenInPersentTxt(testData.soziallohnGewinnkostenInPersent)
         .setAbzugInPersentTxt(testData.abzugInPersent);
  });

  it(`Expected: calc fields:
   “SL/GK in Fr. pro Monat” = 480,
   "Abzug in Fr. pro Monat" = 97,
   “SL/GK in Fr. pro Jahr” = 5'832,
   "Abzug in Fr. pro Jahr" = 1'164, 
   "Total in Fr." = 51'334`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .checkSLGKInFrProMonatTxt(testData.sLGKInFrProMonat)
         .checkAbzugInFrProMonatTxt(testData.abzugInFrProMonat)
         .checkSLGKInFrProJahrTxt(testData.sLGKInFrProJahr)
         .checkAbzugInFrProJahrTxt(testData.abzugInFrProJahr)
         .checkTotalInFrTxt(testData.totalInFr);
  });
});
