import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import {c55714 as testData} from "../../support/helpers/DataManager";

describe(`C55714: Dossier-Beilagen (Dossier-Ausgabe), export SEN with folders as SEDEX;
  TestRail: https://osiv.testrail.net/index.php?/cases/view/55714;`, {failFast: {enabled: true}}, () => {

  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: open SEN = ${testData.senNr}`, () => {
    pages.loginPage.openUrl();
    flows.sendungen.step_navigateSEN_searchBySENNr_openSEN(testData.senNr);
  });

  it(`Step 2: goto sidetab Dossier-Beialgen`, () => {
    pages.sendungen.detail.sideMenu.navigateToDossierBeilagenTab()
         .waitForLoaded();
  });

  it(`Step 3: mark checkbox=true for both ABK labeled "Die Zahnärzte"`, () => {
    pages.sendungen.detail.dossierBeilagenTab.dossierBeilagenGrid.setAllCheckboxesWithTypAndAdresseChecked(testData.typ, testData.adresse, true);
  });

  it(`Step 4: click Beilaen speichern"`, () => {
    pages.sendungen.detail.ribbonMenu.clickBeilagenSpeichernBtn();
  });

  it(`Step 5: verify red error shows up -> confirm OK"`, () => {
    pages.errorPopup.clickOkBtn();
  });

  it(`Step 6: click on the first selected Beilage (=ordner)"`, () => {
    // pages.sendungen.detail.dossierBeilagenTab.dossierBeilagenGrid.clickFirstRowWithTextsToSelectIt(testData.typ, testData.adresse);
  });

  it(`Step 7: now the folder-elements are shown"`, () => {
    pages.sendungen.detail.dossierBeilagenTab.ordnerDocumentViewerGrid.waitGridViewLoaded();
  });

  it(`Step 8: pick/select(mark=true) all folder elements, except the soft-deleted one"`, () => {
    pages.sendungen.detail.dossierBeilagenTab.ordnerDocumentViewerGrid.setAllRowsCheckboxesSelected(true);
    pages.sendungen.detail.dossierBeilagenTab.ordnerDocumentViewerGrid.setCheckboxesOfSoftDeletedRowsSelected(false);
  });

  it(`Step 9: click Beilagen speichern"`, () => {
    pages.sendungen.detail.ribbonMenu.clickBeilagenSpeichernBtn();
  });

  it(`Step 10: must throw warning->click OK"`, () => {
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  it(`Step 11: verify all 3 folder elements are kept = true after the saving process"`, () => {
    pages.sendungen.detail.dossierBeilagenTab.ordnerDocumentViewerGrid.checkCheckboxOfSoftDeletedRowsSelected(false);
    pages.sendungen.detail.dossierBeilagenTab.ordnerDocumentViewerGrid.chexkCheckboxOfRowWithValueSelected("ResponseFromDIEZAHNAERZTE", true);
    pages.sendungen.detail.dossierBeilagenTab.ordnerDocumentViewerGrid.chexkCheckboxOfRowWithValueSelected("Current Issues in Swiss Language Policy SUMMARY DE", true);
    pages.sendungen.detail.dossierBeilagenTab.ordnerDocumentViewerGrid.chexkCheckboxOfRowWithValueSelected("Current Issues In Swiss Language Policy SUMMARY DE", true);
  });

  it(`Step 12: click ribbon "Beilagen ausgeben""`, () => {
    pages.sendungen.detail.ribbonMenu.clickBeilagenAusgebenBtn();
  });

  it(`Step 13: verify new dialog shows up "Dossier ausgeben"`, () => {
    pages.sendungen.dossierAusgebenPopup.waitForLoaded();
  });

  it(`Step 14: verify the only dynSelect in the dialog shows value SEDEX selected by default"`, () => {
    pages.sendungen.dossierAusgebenPopup.checkAusgabeDropdown("Sedex");
  });

  it(`Step 15: click OK in this dialog`, () => {
    pages.sendungen.dossierAusgebenPopup.clickOkBtn();
  });

  it(`Step 16: verify blue floating panel messages show up on top right -Wait until shows completion of 100%`, () => {
    pages.notification.checkNotificatiomMessageVisible()
      .checkNotificationMessageContainsText("Export status")
      .waitForNotificationMessageContainsText("100%");
  });

  it(`Step 17: when confirmation is completed:`, () => {
  });

});
