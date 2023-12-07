import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import helperObject from "../../support/helpers/HelperObject";
import pageBase from "../../support/base/PageBase";
import constants from "../../support/helpers/Constants";
import {c45706 as testData} from "../../support/helpers/DataManager";

describe(`C45706: FF status from Offen to Abgeschlossen; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/45706`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open VP ${testData.vpName}`, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.vpName);
  });

  it(`Step 2: Open Fallführung step
  Add Beantwortet am and Antwort (angenommen), click Save -> 
  changes are saved, status = Neu`, () => {
    pages.versicherte.detail.sideMenu.navigateToFallfuhrungTab()
         .waitForLoaded();
    pages.versicherte.detail.fallfuhrungTab.setBeantwortetAmDate(helperObject.date.getCurrentDate())
      .selectAntwortDropdown("Angenommen");
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.fallfuhrungTab.checkArbeitlisteDropdown("Neu")
      .checkBeantwortetAmDate(helperObject.date.getCurrentDate())
      .checkAntwortDropdown("Angenommen");
  });

  it(`Step 3: Add FF intern and beginn date and click Save ->  changes are saved, status = Bearbeiten`, () => {
    pages.versicherte.detail.fallfuhrungTab.selectFallfuehrungDropdown("Intern")
      .setFfBeginnDate(helperObject.date.getCurrentDate());
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.fallfuhrungTab.checkArbeitlisteDropdown("Bearbeiten")
         .checkFallfuehrungDropdown("Intern")
         .checkFfBeginnDate(helperObject.date.getCurrentDate());
  });

  it(`Step 4: Add ende FF Date and click Save; 
  confirm warning: Beginn- und Ende-Datum sind erfasst, Wollen Sie die Fallführung definitiv abschliessen?(OSCSTAMM:129) 
  -> changes are saved, status = Abgeschlossen`, () => {
    pages.versicherte.detail.fallfuhrungTab.setFfEndeDate(helperObject.date.getCurrentDayPlusDays(5));
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.checkWarningContainsTextsArray(constants.MSG.OSCSTAMM_128)
      .clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.fallfuhrungTab.checkArbeitlisteDropdown("Abgeschlossen")
         .checkFfEndeDate(helperObject.date.getCurrentDayPlusDays(5));
  });
});
