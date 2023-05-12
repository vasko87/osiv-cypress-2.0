import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import constants from "../../support/helpers/Constants";

const testData = {
  einID      : "3234",
  resultat   : "Eingliederung im Arbeitsmarkt möglich",
  benutzer   : "User1 - User1 Eins",
  rentenfrage: "Nein"
};

describe.skip(`C50462: "Abschluss Eingliederung" _no linked objects (Prufen = Nein); 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50462`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open Eingliederung ${testData.einID}`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.data1.einID);
  });

  it(`Step 2: Click Abschluss Eingliederung button`, () => {
    pages.eingliederung.detail.ribbonMenu.clickAbschlussEingliederungBtn()
         .waitForLoaded();
  });

  it(`Step 3: On Abschluss window fill in mandatory data;
    Click Speichern -> warning is presented: Das angegebene Resultat und die Anstellungen werden gespeichert. (OSCEIN:77); 
    confirm warning`, () => {
    pages.eingliederung.abschlussEingliederungPopup.selectResultatDropdown(testData.resultat)
         .selectArtDropdownByIndex(1)
         .selectRentenfrageDropdown(testData.rentenfrage)
         .clickSpeichernBtn();
    pages.warningPopup
         .checkWarningContainsText(constants.MSG.OSCIENT_77_PART1)
         .checkWarningContainsText(constants.MSG.OSCIENT_77_PART2)
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  it(`Step 4: Verify: Data is saved (except Prufen) and popup is not closed
  --> additionaly check: if you close popup and reopen it again>> no data is lost`, () => {
    pages.eingliederung.abschlussEingliederungPopup.checkResultatDropdown(testData.resultat)
         .checkRentenfrageDropdown(testData.rentenfrage)
         .checkBenutzerDropdown(testData.benutzer)
         .checkBearbeiterFolgeEntscheidDropdown(testData.benutzer);
    // TODO
  });

  it(`Step 5: Add meldung in Folge ENT section
    Select Rentenfrage as Nein and click OK`, () => {
    pages.eingliederung.abschlussEingliederungPopup.checkResultatDropdown(testData.resultat)
         .checkRentenfrageDropdown(testData.rentenfrage)
         .checkBenutzerDropdown(testData.benutzer)
         .checkBearbeiterFolgeEntscheidDropdown(testData.benutzer);
    // TODO
  });
});
