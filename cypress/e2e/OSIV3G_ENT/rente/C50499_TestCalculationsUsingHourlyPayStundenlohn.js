import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";

const testData = {
  entId            : "23153",
  methode          : "Fruehinvaliditaet",
  lohnart          : "Stundenlohn",
  fr               : "40",
  stundenProTag    : "7",
  tageDieWoche     : "4",
  monatslohnInFr   : "4’860.8",
  anzahlMonathLohne: "12",
  inFrProJahr      : "58'330"
};

describe(`C50499: Test calculations - using hourly pay (Stundenlohn)" 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/510499`, {failFast: {enabled: true}}, () => {

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
  “Lohnart” = Stundenlohn (hourly pay), 
  “in Fr” = 40 (salary per hour)`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnart)
         .setFrInvalideneinkommenTxt(testData.fr);
  });

  it(`Step 3: 
  “Stunden pro Tag” = 7 (work hours per day), 
  “Tage die Woche” = 4 (work days per week)`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .setStundenProTagTxt(testData.stundenProTag)
         .setTageDieWocheTxt(testData.tageDieWoche);
  });

  it(`Expected: calc fields:
   “Monatslohn in Fr” = 4’861 (Monthly salary), 
   “Anzahl Monats-Löhne “ = 12 
    “in Fr. pro Jahr” = 58’330 (Yearly salary)`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .checkMonatslohnInFrTxt(testData.monatslohnInFr)
         .checkAnzahlMonathLohneTxt(testData.anzahlMonathLohne)
         .checkInFrProJahrTxt(testData.inFrProJahr);
  });
});
