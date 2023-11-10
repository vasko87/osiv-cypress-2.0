import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import helperObject from "../../support/helpers/HelperObject";
import pageBase from "../../support/base/PageBase";
import constants from "../../support/helpers/Constants";

const testData = {
  vpName: "FF Offen",
  step2: {
    beantwortetAm: helperObject.date.getCurrentDate(),
    antwort: "Angenommen",
    arbeitliste: "Neu"
  },
  step3: {
    fallfuehrung: "Intern",
    ffBeginn: helperObject.date.getCurrentDate(),
    arbeitliste: "Bearbeiten"
  },
  step4: {
    ffEnde: helperObject.date.getCurrentDayPlusDays(5),
    warning: constants.MSG.OSCSTAMM_128,
    arbeitliste: "Abgeschlossen"
  }
};

// TODO waiting for 2 more datasets
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
    pages.versicherte.detail.fallfuhrungTab.setBeantwortetAmDate(testData.step2.beantwortetAm)
      .selectAntwortDropdown(testData.step2.antwort);
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.fallfuhrungTab.checkArbeitlisteDropdown(testData.step2.arbeitliste)
      .checkBeantwortetAmDate(testData.step2.beantwortetAm)
      .checkAntwortDropdown(testData.step2.antwort);
  });

  it(`Step 3: Add FF intern and beginn date and click Save ->  changes are saved, status = Bearbeiten`, () => {
    pages.versicherte.detail.fallfuhrungTab.selectFallfuehrungDropdown(testData.step3.fallfuehrung)
      .setFfBeginnDate(testData.step3.ffBeginn);
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.fallfuhrungTab.checkArbeitlisteDropdown(testData.step3.arbeitliste)
         .checkFallfuehrungDropdown(testData.step3.fallfuehrung)
         .checkFfBeginnDate(testData.step3.ffBeginn);
  });

  it(`Step 4: Add ende FF Date and click Save; 
  confirm warning: Beginn- und Ende-Datum sind erfasst, Wollen Sie die Fallführung definitiv abschliessen?(OSCSTAMM:129) 
  -> changes are saved, status = Abgeschlossen`, () => {
    pages.versicherte.detail.fallfuhrungTab.setFfEndeDate(testData.step4.ffEnde);
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.checkWarningContainsTextsArray(testData.step4.warning)
      .clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.fallfuhrungTab.checkArbeitlisteDropdown(testData.step4.arbeitliste)
         .checkFfEndeDate(testData.step4.ffEnde);
  });
});
