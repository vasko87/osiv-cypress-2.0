import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import constants from "../../../support/helpers/Constants";

const testData = {
  vp : "5968.5742.51",
  ent: "22781"
};

describe(`C58229: DossierErhalt creation when Entscheid=G has SEN; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/58229`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: open vP=${testData.vp}
      open Dossier-Chronik sidebar tab -> vP is opened;
      click on 'Erhalt registrieren' ribbon button -> 'Dossier-Erhalt registrieren' window is opened;
      click OK on warnings -> Warnings are closed;
      select 'Dossier ereignis'=Erhalten von, any IVStellen ->
      Values are selected`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(testData.vp);
    pages.versicherte.detail.ribbonMenu.clickErhaltRegistrierenBtn();
    pages.warningPopup.clickOkBtn();
    pages.versicherte.dossierErhaltRegistrierenPopup.waitForLoaded()
         .clickMinMaxBtn()
         .selectDossierEreignisDropdown("Erhalten von")
         .selectDosseirErhaltVonDropdownByIndex(1);
  });

  it(`Step 2: click OK -> Warning OSCSTAMM:210 appeared;
      click OK on warning OSCSTAMM:210 ->
      User sees an error message 'Ein Entscheid mit Entscheid-Sendungen kann nicht mehr gelöscht werden.
      Hierzu gelten auch ersetzte, korrigierte und annullierte Entscheid-Sendungen. (OSCIENT:21)'`, () => {
    pages.versicherte.dossierErhaltRegistrierenPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.OSCSTAMM_210)
         .clickOkBtn();
    pages.errorPopup.ckeckErrorContainsText(constants.MSG.OSCIENT_21);
  });
});
