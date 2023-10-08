import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";
import dateHelper from "../../../../support/helpers/DateHelper";
import pageBase from "../../../../support/base/PageBase";

const testData = {
  besId: "518",
  notizen1: `Test1 ${dateHelper.getTimestamp()}`,
  notizen2: `Test2 ${dateHelper.getTimestamp()}`,
  step4_besIdList: ["1132", "1165", "1170", "1168"]
};

describe(`C55957: Edit Notizen when the Beschwerde is 'Abgeschlossen' 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/55957`, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: open BES=${testData.besId}
      press 'Korrekturfunktionen'->'Notizen Editieren'
      observe the opened window -> 
      Notizen window is opened
      User sees 2 buttons: 'Ok' and 'Abbrechen'
      User sees Notizen field where he can enter any information`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateENT_BEStab_searchBES_open(testData.besId);
    pages.entscheid.beschwerde.detail.ribbonMenu.clickKorrekturfunktionenBtn()
         .korrekturfunktionenSubMenu.clickNotizenEditieren()
         .waitForLoaded()
         .checkNotizenTxtVisible(true)
         .checkOkBtnVisible(true)
         .checkAbbrechenBtnVisible(true);
  });

  it(`Step 2: Press 'Abbrechen' button -> Window is closed without any error and User is on Details step
      Press 'Korrekturfunktionen'->'Notizen Editieren' and enter any text to the Notizen field => New text is added
      Press 'Abbrechen' button -> User sees a warning
      Press 'Ja' in warning -> 
      Warning and Notizen window is closed and entered text is not saved in the Notizen field`, () => {
    pages.entscheid.beschwerde.detail.notizenPopup.clickAbbrechenBtn();
    pages.entscheid.beschwerde.detail.ribbonMenu.clickKorrekturfunktionenBtn()
         .korrekturfunktionenSubMenu.clickNotizenEditieren()
         .waitForLoaded()
         .setNotizenTxt(testData.notizen1)
         .clickAbbrechenBtn();
    pages.warningPopup.clickOkBtn();
    pageBase.waitForLoadingDisappears();
    pages.entscheid.beschwerde.detail.checkNotizenTextareaNoValue(testData.notizen1);
  });

  it(`Step 3: Press 'Korrekturfunktionen'->'Notizen Editieren' and enter any text to the Notizen field
      Press OK button -> Notizen window is closed without any warnings
      Entered text is saved in the Notizen field`, () => {
    pages.entscheid.beschwerde.detail.ribbonMenu.clickKorrekturfunktionenBtn()
         .korrekturfunktionenSubMenu.clickNotizenEditieren()
         .waitForLoaded()
         .setNotizenTxt(testData.notizen2)
         .clickOkBtn();
    pageBase.waitForLoadingDisappears();
    pages.entscheid.beschwerde.detail.checkNotizenTextareaNoValue(testData.notizen2);
  });

  it(`Step 4: Check that the following BES 'Notizen Editieren' button is disabled
      BES=1132 (Bearbeiten)
      BES=1165 (Neu)
      BES=1170 (Offene)
      BES=1168 (Warten)`, () => {
    testData.step4_besIdList.forEach((besId) => {
      pages.nav.clickHomeBtn();
      pages.entscheid.beschwerde.grid.waitGridViewLoaded();
      pages.entscheid.beschwerde.grid.searchAndOpenBeschwerdeID(besId);
      pages.entscheid.beschwerde.detail.waitForLoaded();
      pages.entscheid.beschwerde.detail.ribbonMenu.clickKorrekturfunktionenBtn()
           .korrekturfunktionenSubMenu.checkNotizenEditierenDisabled(true);
    });
  });
});
