import pages from "../support/base/OsivPageObject";
import {c44194 as testData} from "../support/helpers/DataManager";

describe(`C44194: (ENT ${testData.data1.entId}) Correct Supertext and Entscheidtyp; 
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
      pages.desktopMenu.navigateToEntscheidTab();
      pages.entscheid.grid.searchAndOpenEntscheidID(data.entId);
      pages.entscheid.detail
           .checkSupertextDropdownReadonly(true)
           .checkEntscheidTypDropdownReadonly(true);
      pages.entscheid.detail.ribbonMenu.clickKorrekturfunktionenBtn()
           .clickSubMenuMenuItem(pages.entscheid.detail.ribbonMenu.korrekturfunktionenSubMenu.supertextEntscheidtypandern);
      pages.warningPopup.checkWarningContainsText(data.warningMsg)
           .clickOkBtn();
      pages.infoPopup.ckeckInformationContainsText(data.infoMsg)
           .clickOkBtn();
      pages.notification.checkSuccessMessageVisible();

      pages.entscheid.detail.checkSupertextDropdownReadonly(false);
      pages.entscheid.detail.checkEntscheidTypDropdownReadonly(false);
      pages.entscheid.detail.ribbonMenu.clickKorrekturfunktionenBtn()
           .checkSupertextEntscheidtypandernMenuItemEnable(false);

      pages.entscheid.detail.tabBar.navigateToSendungenTab();
      pages.entscheid.detail.sendungenGrid
           .checkAllValuesInGridExist(data.sendungen.formularNotVisible, false)
           .checkAllValuesInGridExist(data.sendungen.formularVisible, true);
    });
  });
});
