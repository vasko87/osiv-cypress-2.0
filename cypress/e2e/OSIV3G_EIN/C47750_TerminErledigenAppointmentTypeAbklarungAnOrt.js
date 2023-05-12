import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import constants from "../../support/helpers/Constants";
import helperObject from "../../support/helpers/HelperObject";
import {c47750 as testData} from "../../support/helpers/DataManager";

describe.skip(`C47750: Termin Erledigen (appointment type=Abklärung an Ort); 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/47750`, () => {

  beforeEach(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Scenario 1: 
  1. Open Eingliederung ${testData.data1.einID}
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
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.data1.einID);

    pages.eingliederung.detail.tabBar.navigateToTermineTab()
         .grid.clickRowWithTextToSelectIt(testData.data1.terminart);
    pages.termine.detail.ribbonMenu.clickTerminErledigenBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.TERMIN_44)
         .clickOkBtn();

    pages.termine.detail.termineErledigenPopup.waitForLoaded()
         .setTerminTextValue("TEST");
    pages.termine.detail.termineErledigenPopup.clickOkBtn();
    pages.confirmPopup.ckeckConfirmationContainsText(testData.data1.confirmationText)
         .clickJaBtn();
    pages.infoPopup.ckeckInformationContainsText(constants.MSG.TERMIN_26)
         .clickOkBtn();

    pages.eingliederung.detail.termineTabBar.grid.checkValueInGridExists(testData.data1.terminart, false);
    pages.eingliederung.detail.tabBar.navigateToDetailsTab()
         .checkArbeitslisteTxt(testData.data1.al)
         .checkErstgesprachTxt(helperObject.date.getCurrentDate())
         .checkTotalTxt(testData.data1.total);
    pages.checkMsgOnThePage(testData.data1.info, true);
    pages.eingliederung.detail.ribbonMenu.checkKeinErstgesprachBtnDisabled(true);
  });

  it(`Scenario 2: 
  1. Open Eingliederung ID = ${testData.data2.einID}
  2. Open Termin tab
  3. click Termin Erledigen button
  4. Confirm warning Sie beenden einen fremden Termin. (Termin:44)
  5. On Termin erledigen popup window add Protokolleintrag and click OK
  6. on Frage select Nein (OSCEIN:26)
  7. Click OK on Hinweis Die zugehörige Eingliederung wird aus dem Warten befreit. (Termin:27)
  -->Verify:
  Termin is not presented in the list of termins on Termine tab
  AL of Eingliederung becomes Bearbeiten
  fields Erstgespräch  and Total are not updated
  "Kein Erstgespräch" button is disabled`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.data2.einID);

    pages.eingliederung.detail.tabBar.navigateToTermineTab();
    pages.termine.detail.ribbonMenu.clickTerminErledigenBtn();
    pages.warningPopup.checkWarningContainsText(constants.MSG.TERMIN_44)
         .clickOkBtn();

    pages.termine.detail.termineErledigenPopup.waitForLoaded()
         .setTerminTextValue("TEST");
    pages.termine.detail.termineErledigenPopup.clickOkBtn();
    pages.confirmPopup.ckeckConfirmationContainsText(testData.data2.confirmationText)
         .clickNeinBtn();
    pages.infoPopup.ckeckInformationContainsText(constants.MSG.TERMIN_27)
         .clickOkBtn();

    pages.eingliederung.detail.termineTabBar.grid.checkGridRowCount(0);
    pages.eingliederung.detail.tabBar.navigateToDetailsTab()
         .checkArbeitslisteTxt(testData.data2.al)
         .checkErstgesprachTxtEmpty(true)
         .checkTotalTxt(testData.data2.total);
    pages.eingliederung.detail.ribbonMenu.checkKeinErstgesprachBtnDisabled(true);
  });
});

