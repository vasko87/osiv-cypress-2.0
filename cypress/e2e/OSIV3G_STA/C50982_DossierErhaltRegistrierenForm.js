import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import {c50982 as testData} from "../../support/helpers/DataManager";

describe(`C50982: Dossier-Erhalt registrieren (Form); 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/50982`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: open vP = 1626.2032.35
      go to the ‘Dossier-Chronik’ sidebar tab -> 'Dossier-Erhalt registrieren' window is opened
      press on 'Erhalt registrieren' ribbon button ->
      Dossier-Ereignis - type dynselect
      Dossier-Erhalt von - type dynselect,
      Erhalten am - type date
      An info icon near the 'Dossier-Ereignis' dynselect:`, () => {
    flows.versicherte.step_navigateVP_searchByVPNr_openVP(testData.vp);
    pages.versicherte.detail.sideMenu.navigateToDossierChronikTab()
         .waitForLoaded();
    pages.versicherte.detail.ribbonMenu.clickErhaltRegistrierenBtn()
         .waitForLoaded()
         .clickMinMaxBtn()
         .checkDosseirErhaltVonDropdownVisible(true)
         .checkDossierEreignisDropdownVisible(true)
         .checkErhaltenAmDateVisible(true)
         .checkDossierEreignisDropdownValidationErrorVisible(testData.validationError, true);
  });

  it(`Step 2: Observe 'Dossier-Ereignis' dynselect -> User sees the following values:`, () => {
    pages.versicherte.dossierErhaltRegistrierenPopup.checkDossierEreignisDropdownValueList(testData.dosseirEreignisDropdownValueList);
  });

  it(`Step 3: Observe 'Dossier-Erhalt von' dynselect -> Code of IV Stele + IV Stelle & abbreviation of city`, () => {
    pages.versicherte.dossierErhaltRegistrierenPopup
         .checkDosseirErhaltVonDropdownCodesValues(testData.dosseirErhaltVonDropdownCodeList, testData.dosseirErhaltVonDropdownValueList)
         .clickDosseirErhaltVonDropdownArrow();
  });

  it(`Step 4: Press on choosewindow of 'Dossier-Erhalt von' ->
  'IV-Stellen' window is opened 
  and User can select any IV-Stelle and pressing 'Bestatigen' IVStellen will be selected in the 'Dossier-Erhalt von' dynselect`, () => {
    pages.versicherte.dossierErhaltRegistrierenPopup
         .lookupDosseirErhaltVonDropdown(testData.dosseirErhaltVonDropdownCodeList[1])
         .checkDosseirErhaltVonDropdownContains(testData.dosseirErhaltVonDropdownCodeList[1])
         .checkDosseirErhaltVonDropdownContains(testData.dosseirErhaltVonDropdownValueList[1]);
  });
});
