import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import {c58228 as testData} from "../../support/helpers/DataManager";
import helpers from "../../support/helpers/HelperObject";

describe(`C58228: DossierErhalt creation when Entscheid=G exists; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/58228;
  DEFECT (step 2): https://jiraosiv3g.atlassian.net/browse/PROD-2443`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));

    helpers.jira.isJiraDone("PROD-2443").then((isDone) => {
      console.log(isDone);
      if (isDone === false) {
        Cypress.env("isJira", true);
        console.log(Cypress.env("isJira"));
      }
    });
  });

  it(`Step 1: open vP
      open Dossier-Chronik sidebar tab
      click on 'Erhalt registrieren' ribbon button
      click OK on warnings
      select 'Dossier ereignis'=Erhalten von, any IVStellen ->
      vP is opened
      tab is opened
      'Dossier-Erhalt registrieren' window is opened
      warnings are closed
      values are selected`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.vp);
    pages.versicherte.detail.ribbonMenu.clickErhaltRegistrierenBtn();
    pages.versicherte.dossierErhaltRegistrierenPopup.waitForLoaded()
         .clickMinMaxBtn()
         .selectDossierEreignisDropdown(testData.dossierEreignis)
         .selectDosseirErhaltVonDropdownByIndex(1);
  });

  it(`Step 2: press OK
      press Ok on warning 210 -> Erhalten von record is created`, () => {
    //TODO jira
    cy.skipOn(Cypress.env("isJira") === true);
    pages.versicherte.dossierErhaltRegistrierenPopup.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkGridRowsCount(1)
         .checkValueInGridExists(testData.dossierEreignis, true);
  });

  it(`Step 3: open Entscheid tab and check that ENT=22470 has been deleted`, () => {
    //TODO jira
    cy.skipOn(Cypress.env("isJira") === true);
    pages.versicherte.detail.tabBar.navigateToEntscheideTab().grid.checkValueInGridExists(testData.ent, false);
  });

  afterEach(function() {
    console.log(this.currentTest.state);
    if (this.currentTest.state === "pending") {
      Cypress.log(this.currentTest.err);
      Cypress.runner.stop();
    }
  });
});
