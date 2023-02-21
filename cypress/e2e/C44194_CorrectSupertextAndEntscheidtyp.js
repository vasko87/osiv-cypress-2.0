import pages from "../support/base/OsivPageObject";
import {c44194 as testData} from "../support/helpers/DataManager";

describe(`C44194: (ENT ${testData.data1.entId}) Correct Supertext and Entscheidtyp`, () => {
  testBody(testData.data1);
});

describe(`C44194: (ENT ${testData.data2.entId}) Correct Supertext and Entscheidtyp`, () => {
  testBody(testData.data2);
});

function testBody(data) {
  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Steps: Open ENT, Click Korrekturenfunction button\n
        select "Supertext, Entscheidtyp ändern" option from dynselect >>>warning message is presented\n
        : For ENT1 - warning (OSCIENT:440)\n
        : For ENT2 - warning  (OSCIENT:441)\n
        confirm warning>>> info message  (OSCIENT:446) is presented\n
        click ok;\n
       \n
        Expected:\n
        - 'Supertext' and 'Entscheidtyp' are enabled;\n
        - 'Supertext, Entscheidtyp ändern' button is disabled;\n
        - Sendungs (VM, VB or MB) in status Neu are deleted;\n
        - Sendung (MIB) in status Korrigiert is not deleted`, () => {
    pages.loginPage.openUrl();
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(data.entId);
    pages.entscheid.detail
        .checkSupertextDropdownReadOnly(true)
        .checkEntscheidTypDropdownReadOnly(true);
    pages.entscheid.detail.ribbonMenu.clickKorrekturfunktionenBtn()
        .clickSubMenuMenuItem(pages.entscheid.detail.ribbonMenu.korrekturfunktionenSubMenu.supertextEntscheidtypandern);
    pages.warningPopup.ckeckWarningContainsText(data.warningMsg)
        .clickOkBtn();
    pages.infoPopup.ckeckInformationContainsText(data.infoMsg)
        .clickOkBtn();
    pages.notification.checkSuccessMessageVisible();

    pages.entscheid.detail.checkSupertextDropdownReadOnly(false);
    pages.entscheid.detail.checkEntscheidTypDropdownReadOnly(false);
    pages.entscheid.detail.ribbonMenu.clickKorrekturfunktionenBtn()
        .checkSupertextEntscheidtypandernMenuItemEnable(false);

    pages.entscheid.detail.tabBar.navigateToSendungenTab();
    pages.entscheid.detail.sendungenGrid
        .checkAllValuesInGridExist(data.sendungen.formilarNotVisible, false)
        .checkAllValuesInGridExist(data.sendungen.formilarVisible, true);
  });
}
