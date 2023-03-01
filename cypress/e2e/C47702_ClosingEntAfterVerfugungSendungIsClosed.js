import pages from "../support/base/OsivPageObject";
import {c47702 as testData} from "../support/helpers/DataManager";
import helpers from "../support/helpers/HelperObject";

describe(`C47702: (ENT ${testData.data1.entId}) Closing ENT after Verfugung sendung is closed`, () => {
  testBody(testData.data1);
});

describe(`C47702: (ENT ${testData.data2.entId}) Closing ENT after Verfugung sendung is closed`, () => {
  testBody(testData.data2);
});

function testBody(data) {
  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Steps: Open ENT '${data.entId}', goto tab ENT-SEN
    Open SEN VRG (the only one SEN in state=EINGEGANGEN)
    click ribbon "Abschliessen", set Verfugungsdatum and click OK =>
    Verify:
    - AL = ${data.arbeitsliste}`, () => {
    pages.loginPage.openUrl();
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(data.entId);
    pages.entscheid.detail.tabBar.navigateToSendungenTab();
    pages.entscheid.detail.sendungenGrid.dblClickRowValue(data.formular);
    pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
    pages.sendungen.detail
         .sendungenAbschliessenPopup.setVmdatumDate(helpers.date.getCurrentDate());
    pages.modalWindow.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.nav.groupedTaskbar.navigateToTabByTitle("Entscheid");
    pages.entscheid.detail.tabBar.navigateToDetailsTab();
    pages.entscheid.detail.checkArbeitslistevalueTxt(data.arbeitsliste);
  });
}
