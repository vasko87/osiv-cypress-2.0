import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import constants from "../../support/helpers/Constants";

const testData = {
  einID           : "3240",
  terminart       : "Abklärung an Ort",
  confirmationText: "(OSCEIN:26)"
};

describe(`C47750: Termin Erledigen (appointment type=Abklärung an Ort); 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/47750`, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Scenario 1: 
  1. Open Eingliederung1
  2. Open Termin tab
  3. Select Abklärung an Ort appointment and click Termin Erledigen button
  4. Confirm warning Sie beenden einen fremden Termin. (Termin:44)
  5. On Termin erledigen popup window add Protokolleintrag and click OK
  --> verify: correct frage is presented (OSCEIN:26);
  6. Click Yes
  7. Click OK on Hinweis: Die zugehörige Eingliederung bleibt aufgrund eines Termins im Warten. (Termin:26)
  -->Verify:
  Termin is not presented in the list of termines on Termine tab
  AL of Eingliederung stays Warten
  Info panel message is changed (info about further appointment is presented)
  fields Erstgespräch (updated with current date) and Total (updated to 1) are updated
  "Kein Erstgespräch" button is disabled`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.einID);

    pages.eingliederung.detail.tabBar.navigateToTermineTab()
         .grid.clickRowWithTextToSelectIt(testData.terminart);
    pages.termine.detail.ribbonMenu.clickTerminErledigenBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.TERMIN_44)
         .clickOkBtn();

    pages.termine.detail.termineErledigenPopup.waitForLoaded()
         .setTerminTextValue("TEST");
    pages.termine.detail.termineErledigenPopup.clickOkBtn();
    pages.confirmPopup.ckeckConfirmationContainsText(testData.confirmationText)
         .clickJaBtn();
    pages.infoPopup.ckeckInformationContainsText(constants.MSG.TERMIN_26)
         .clickOkBtn();

    pages.termine.grid.checkValueInGridExists(testData.terminart, false);
    pages.eingliederung.detail.tabBar.navigateToDetailsTab();
  });
});

