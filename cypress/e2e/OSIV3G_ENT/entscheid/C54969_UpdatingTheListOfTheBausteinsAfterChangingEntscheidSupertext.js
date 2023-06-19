import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {c54969 as testData} from "../../../support/helpers/DataManager";
import constants from "../../../support/helpers/Constants";
import helpers from "../../../support/helpers/HelperObject";
//TODO skipped, Anton clarifying the wrong behaviour
describe.skip(`C54969: Updating the list of the Bausteins after changing Entscheid supertext; 
TestRail:https://osiv.testrail.net/index.php?/cases/view/54969`, {failFast: {enabled: true}}, () => {

  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Steps: Open ENT '${testData.step1.entId}', Navigate to "Freitexte" sidebar`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.step1.entId);
    pages.entscheid.detail.waitForLoaded();
    pages.entscheid.detail.sideMenu.navigateToFreitexteTab()
         .vorbescheidTab.waitForVisible();
    pages.waitForLoadingDisappears();
  });

  it(`Steps 3: Check that list of Bausteins corresponds to the Supertext=5220`, () => {
    pages.entscheid.detail.freitexteTab.verfugungBeiblattAKTab.bausteinGrid().getGridData().then((bausteinGridData5220) => {
      console.log(JSON.stringify(bausteinGridData5220));
      expect(JSON.stringify(testData.step3.gridData)).to.be.eq(JSON.stringify(bausteinGridData5220));
    });
  });

  it(`Steps 4: Go back to the Basisdaten; Set Supertext=Bna_EntMM and save`, () => {
    pages.entscheid.detail.sideMenu.navigateToBasisdatenTab()
         .lookupSupertextDropdown(testData.step4.supertext);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
  });

  it(`Steps 5: Expected -> The warning message is appeared:
      "Diese Änderung hat einen Einfluss auf den Freitext.
      Aus diesem Grund muss die Liste der Bausteine neu generiert werden und alle individuellen Änderungen gehen verloren.
      Auch muss der Freitext entsprechend neu generiert werden.
      Wollen sie fortfahren? (OSCIENT:713)"`, () => {
    pages.warningPopup.clickOkBtn()
         .checkWarningContainsText(constants.MSG.OSCIENT_713)
         .clickOkBtn();
  });

  it(`Steps 6: Navigate to "Freitexte" sidebar ->
      The list of the Bausteins is updated and corresponds to the Supertext=Bna_EntMM`, () => {
    pages.notification.checkSuccessMessageVisible();
    pages.entscheid.detail.sideMenu.navigateToFreitexteTab();
    pages.waitForLoadingDisappears();
    pages.entscheid.detail.freitexteTab.verfugungBeiblattAKTab.bausteinGrid().getGridData().then((bausteinGridDataBna) => {
      console.log(JSON.stringify(bausteinGridDataBna));
      expect(JSON.stringify(testData.step6.gridData)).to.be.eq(JSON.stringify(bausteinGridDataBna));
    });
  });

  it(`Steps 7: Generate the Supertext based on the new Baustein liste to check that the Supertext will be generated 
      in accordance with the new Bausteins -> Supertext is generated for the new Bausteins`, () => {
    pages.entscheid.detail.ribbonMenu.clickFreitextGenerierenBtn();
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pages.entscheid.supertextFreidefinierbareVariablenPopup.setNurFurDenVorbescheidDate(helpers.date.getCurrentDate())
         .setEinDatumDate(helpers.date.getCurrentDate())
         .clickOkBtn();
    // TODO check values (blocked by issues)
  });
});
