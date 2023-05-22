import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import pageBase from "../../support/base/PageBase";

const testData = {
  vpName      : "Crood Eep",
  auftragAn   : "BatchSH",
  warningPart1: "Der Auftrag wird an BatchSH BatchSH erteilt.",
  warningPart2: "Wollen Sie fortfahren? (OSCEIN:3)",
  arbeitsliste: "Warten"
};

describe(`C45772: Create Eingliederung from vP Eingliederungen; 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/45772`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open VP`, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.vpName);
  });

  it(`Step 2: Open Eingliederungen tab; Click Neu button`, () => {
    pages.versicherte.detail.tabBar.navigateToEingliederungenTab();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.ribbonMenu.clickNeuBtn();
    pages.eingliederung.eingliederungsauftragErteilenPopup.waitForLoaded();
  });

  it(`Step 3: Fill in mandatory fields; Add Meldung`, () => {
    pages.eingliederung.eingliederungsauftragErteilenPopup
         .selectGesuchDropdownByIndex(1)
         .selectEreignisDropdownByIndex(1)
         .selectAuftragDropdownByIndex(1)
         .selectAuftragAnDropdown(testData.auftragAn)
         .setMeldungTextarea("test");
  });

  it(`Step 4: Click OK button;
  Confirm warning : Der Auftrag wird an Gabriel Bieler erteilt. (OSCEIN:3) - name from (Auftrag an) field is taken`, () => {
    pages.modalWindow.clickOkBtn();
    pages.warningPopup.checkWarningContainsText(testData.warningPart1)
         .checkWarningContainsText(testData.warningPart2);
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  it(`Step 5: Expected: Auftrag is created and details window opens, new ENT with LC empty and in Warten state is created`, () => {
    pages.eingliederung.detail.waitForLoaded();
    pages.groupedTaskbar.clickContainsVersichertendatenTab();
    pages.versicherte.detail.tabBar.navigateToEntscheideTab()
         .grid.dblClickRowWithText(testData.arbeitsliste);
    pages.entscheid.detail.waitForLoaded();
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.arbeitsliste)
      .checkLeistungscodeDropdownEmpty(true);
  });

  it(`Step 6: Delete EIN`, () => {
    pages.groupedTaskbar.clickContainsEingliederungTab();
    pages.eingliederung.detail.ribbonMenu.clickLoschenBtn();
    pages.confirmPopup.clickJaBtn();
    pages.notification.checkSuccessMessageVisible();
  });
});
