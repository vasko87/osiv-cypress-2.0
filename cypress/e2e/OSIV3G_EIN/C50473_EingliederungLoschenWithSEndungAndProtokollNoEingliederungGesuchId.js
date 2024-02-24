import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import {c50473 as testData} from "../../support/helpers/DataManager";
import constants from "../../support/helpers/Constants";

describe(`C50473: Eingliederung löschen_with SEndung and Protokoll (no Eingliederung.Gesuch_id); 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50473`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open Eing ${testData.einID}`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.einID);
  });

  it(`Step 2: Click Loeshen button, confirm warnings:
      1. Es existieren noch Sendungen oder Abklärungen zur Eingliederung. Alle Sendungen und Abklärungen werden dem Stamm zugeordnet. Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:65)
      2. Es existieren noch Protokolleinträge zur Eingliederung. Alle Protokolleinträge werden dem Stamm zugeordnet. Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:67)`, () => {
    pages.eingliederung.detail.ribbonMenu.clickLoschenBtn();
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCEIN_65_PART1)
         .checkWarningContainsText(constants.MSG.OSCEIN_65_PART2)
         .checkWarningContainsText(constants.MSG.OSCEIN_65_PART3);
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCEIN_67_PART1)
         .checkWarningContainsText(constants.MSG.OSCEIN_67_PART2)
         .checkWarningContainsText(constants.MSG.OSCEIN_67_PART3);
    pages.warningPopup.clickOkBtn();
  });

  it(`EXPECTED 1: Eing is deleted`, () => {
    pages.eingliederung.grid.checkGridRowsCount(0);
  });

  it(`EXPECTED 2: Sendung is not deleted and has Ursprung - stamm`, () => {
    flows.sendungen.step_navigateSEN_searchBySENNr_openSEN(testData.sendungID);
    pages.sendungen.detail.checkUrsprungTxt("Stamm");
  });

  it(`EXPECTED 3: Protokoll is not deleted and has Ursprung - stamm`, () => {
    pages.sendungen.detail.tabBar.navigateToProtokollTab()
         .waitForLoaded();
    pages.sendungen.detail.protocollTabBar.grid.waitGridViewLoaded()
      .checkGridRowsCount(1);
    pages.sendungen.detail.protocollTabBar.detail.checkUrsprungTextTxt("Stamm");
  });
});

