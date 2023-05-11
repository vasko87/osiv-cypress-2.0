import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {c44194 as testData} from "../../../support/helpers/DataManager";

describe(`C44194: Correct Supertext and Entscheidtyp; 
TestRail:https://osiv.testrail.net/index.php?/cases/view/44194`, () => {
  [testData.data1, testData.data2].forEach((data) => {

    before("Login", () => {
      cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    });

    it(`Steps: Open ENT '${data.entId}', Click Korrekturenfunction button
        select "Supertext, Entscheidtyp ändern" option from dynselect 
        >>> warning message '${data.warningMsg}' is presented
        confirm warning>>> info message '${data.infoMsg}' is presented
        click ok;
       
        Expected:
        - 'Supertext' and 'Entscheidtyp' are enabled;
        - 'Supertext, Entscheidtyp ändern' button is disabled;
        - Sendungs (VM, VB or MB) in status Neu are deleted;
        - Sendung (MIB) in status Korrigiert is not deleted`, () => {
      pages.loginPage.openUrl();
      flows.entscheid.step_navigateEnt_searchEnt_openEnt(data.entId);
      pages.entscheid.detail.basisdatenTabBar
           .checkSupertextDropdownReadonly(true)
           .checkEntscheidTypDropdownReadonly(true);
      pages.entscheid.detail.ribbonMenu.clickKorrekturfunktionenBtn()
           .checkSupertextEntscheidtypandernMenuItemDisable(false);
      pages.entscheid.detail.ribbonMenu.korrekturfunktionenSubMenu.supertextEntscheidtypandern().click();
      pages.warningPopup.checkWarningContainsText(data.warningMsg)
           .clickOkBtn();
      pages.infoPopup.ckeckInformationContainsText(data.infoMsg)
           .clickOkBtn();
      pages.notification.checkSuccessMessageVisible();

      pages.entscheid.detail.basisdatenTabBar.checkSupertextDropdownReadonly(false);
      pages.entscheid.detail.basisdatenTabBar.checkEntscheidTypDropdownReadonly(false);
      pages.entscheid.detail.ribbonMenu.clickKorrekturfunktionenBtn()
           .checkSupertextEntscheidtypandernMenuItemDisable(true);

      pages.entscheid.detail.tabBar.navigateToSendungenTab();
      pages.entscheid.detail.sendungenTabBar.grid
           .checkAllValuesInGridExist(data.sendungen.formularNotVisible, false)
           .checkAllValuesInGridExist(data.sendungen.formularVisible, true);
    });
  });
});
