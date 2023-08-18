import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import {c50474 as testData} from "../../support/helpers/DataManager";
import constants from "../../support/helpers/Constants";

describe(`C50474: Eingliederung löschen_with SEndung and Protokoll (with Eingliederung.Gesuch_id); 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50474`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open Eing`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.einID);
  });

  it(`Step 2: Click Loeshen button, confirm warnings:
      1. Es existieren noch Sendungen oder Abklärungen zur Eingliederung. Alle Sendungen und Abklärungen werden dem Gesuch zugeordnet. Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:66)
      2. Es existieren noch Protokolleinträge zur Eingliederung. Alle Protokolleinträge werden dem Gesuch zugeordnet. Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:68)`, () => {
    pages.eingliederung.detail.ribbonMenu.clickLoschenBtn();
    pages.confirmPopup.clickJaBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCEIN_66_PART1)
         .checkWarningContainsText(constants.MSG.OSCEIN_66_PART2)
         .checkWarningContainsText(constants.MSG.OSCEIN_66_PART3);
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCEIN_68_PART1)
         .checkWarningContainsText(constants.MSG.OSCEIN_68_PART2)
         .checkWarningContainsText(constants.MSG.OSCEIN_68_PART3);
    pages.warningPopup.clickOkBtn();
  });

  it(`EXPECTED 1: Eing is deleted`, () => {
    pages.eingliederung.grid.checkGridRowsCount(0);
  });

  it(`EXPECTED 2: Sendungs are not deleted and has Ursprung - Gesuch`, () => {
    flows.sendungen.step_navigateSEN_searchBySENNr_openSEN(testData.sendungID_1);
    pages.sendungen.detail.checkUrsprungTxtContains("Gesuch");
    pages.groupedTaskbar.closeGroupContentTab();
    flows.sendungen.step_navigateSEN_searchBySENNr_openSEN(testData.sendungID_2);
    pages.sendungen.detail.checkUrsprungTxtContains("Gesuch");
  });

  it(`EXPECTED 3: Protokoll is not deleted and has Ursprung - Gesuch`, () => {
    pages.sendungen.detail.tabBar.navigateToProtokollTab()
         .waitForLoaded();
    pages.sendungen.detail.protocollTabBar.grid.waitGridViewLoaded()
         .checkGridRowsCount(1);
    pages.sendungen.detail.protocollTabBar.detail.checkUrsprungTextContains("Gesuch");
  });
});

