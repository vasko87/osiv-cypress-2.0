import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import constants from "../../../support/helpers/Constants";
import helperObject from "../../../support/helpers/HelperObject";

const testData = {
  einID            : "3221",
  formular         : "470 - Delegationsauftrag an IVSt",
  delegationAn     : "IV-Stelle ZH",
  zuhandenTxt      : "test",
  telefonmnummerTxt: "0112233",
  arbeitslisteTxt  : "Warten"
};

describe(`C47785: Delegation process; 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/47785`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open Eingliederung ${testData.einID}`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.einID);
  });

  it(`Step 2: Click button "Delegation an" -> verify Delegation an IV-STelle popup dialog is presented
      --> Verify GUI (as on attachment)
      --> verify mandatory fields are Delegation an, Sprache and Formular
      --> verify formular 470 is selected by default (as it is the only one with systemfunction = BB Delagation an)`, () => {
    pages.eingliederung.detail.waitForLoaded()
         .ribbonMenu.clickDelegationAnBtn()
         .waitForLoaded()
         .checkDelegationAnDropdownIsMandatory(true)
         .checkFormularDropdownIsMandatory(true)
         .checkSpracheDropdownIsMandatory(true)
         .checkFormularDropdown(testData.formular);
  });

  it(`Step 3: fill in mandatory fields; 
      add Zuhanden and Telefonmnummer and click OK; 
      Confirm info message: Die Sendung für die Delegation muss noch versendet werden (OSCEIN:35)`, () => {
    pages.eingliederung.delegationanIVStellePopup.selectDelegationAnDropdown(testData.delegationAn)
         .setZuhandenTxt(testData.zuhandenTxt)
         .setTelefonmnummerTxt(testData.telefonmnummerTxt)
         .clickOkBtn();
    pages.infoPopup.ckeckInformationContainsText(constants.MSG.OSCIENT_35)
         .clickOkBtn();
  });

  it(`Step 4: Expected:
      -->new sendung is created with Formular 470 and opened right after confirming the info message
      -->EING AL = Warten
      -->Filed Delegation an is filled in with the selected IV
      -->new entry is presented in Eing Notizen field: (example: Delegation an IV-Stelle : 302 IV-Stelle BE lwo 05.08.2022 8:43)
      -->button Delegation an is changed to Delegation
      -->value from Zuhanden field is saved to Ansprechpartner field on Eing details page
      -->value from Telefonnummer is saved to Telefonnummer field on Eing details page
      --> Delegation aufheben button is enabled`, () => {
    pages.sendungen.detail.waitForLoaded();
    pages.sendungen.detail.checkFormularDropdown(testData.formular);
    pages.groupedTaskbar.clickContainsEingliederungTab();
    pages.eingliederung.detail.detailTabBar.checkArbeitslisteTxt(testData.arbeitslisteTxt)
         .checkDelegationAnTxt(testData.delegationAn)
         .checkNotizenTexareaContains(`${testData.delegationAn}  ${Cypress.env("username")}  ${helperObject.date.getCurrentDate()}`);
    pages.eingliederung.detail.detailTabBar.checkAnsprechpartnerTxt(testData.zuhandenTxt)
         .checkTetlefonnumberTxt(testData.telefonmnummerTxt);
    pages.eingliederung.detail.ribbonMenu.checkDelegationAnBtnExists(false)
         .checkDelegationBtnExists(true)
         .checkDelegationAufhebenBtnDisabled(false)
         .clickDelegationAufhebenBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });
});
