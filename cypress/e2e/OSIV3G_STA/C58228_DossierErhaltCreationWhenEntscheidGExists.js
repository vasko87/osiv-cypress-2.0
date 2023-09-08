import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import {c58228 as testData} from "../../support/helpers/DataManager";

describe(`C58228: DossierErhalt creation when Entscheid=G exists; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/58228`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
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
    pages.warningPopup.clickOkBtn()
         .clickOkBtn();
    pages.versicherte.dossierErhaltRegistrierenPopup.waitForLoaded()
         .clickMinMaxBtn()
         .selectDossierEreignisDropdown(testData.dossierEreignis)
         .selectDosseirErhaltVonDropdownByIndex(1);
  });

  it(`Step 2: press OK
      press Ok on warning 210 -> Erhalten von record is created`, () => {
    pages.versicherte.dossierErhaltRegistrierenPopup.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pages.versicherte.detail.dossierChronikTab.dossierHistoryGrid.checkGridRowsCount(1)
      .checkValueInGridExists(testData.dossierEreignis, true);
  });

  it(`Step 3: open Entscheid tab and check that ENT=22470 has been deleted`, () => {
    pages.versicherte.detail.tabBar.navigateToEntscheideTab().grid.checkValueInGridExists(testData.ent, false);
  });
});
