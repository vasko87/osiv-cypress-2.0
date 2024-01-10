import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {c47702 as testData} from "../../../support/helpers/DataManager";
import helpers from "../../../support/helpers/HelperObject";
import constants from "../../../support/helpers/Constants";

describe(`C47702: (ENT ${testData.data1.entId}) Closing ENT after Verfugung sendung is closed; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/47702`, () => {

  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  [testData.data1, testData.data2].forEach((data) => {
    it(`Steps: Open ENT '${data.entId}', goto tab ENT-SEN
    Open SEN VRG (the only one SEN in state=EINGEGANGEN)
    click ribbon "Abschliessen", set Verfugungsdatum and click OK =>
    Verify:
    - AL = ${data.arbeitsliste}`, () => {
      pages.loginPage.openUrl();
      flows.entscheid.step_navigateEnt_searchEnt_openEnt(data.entId);
      pages.entscheid.detail.tabBar.navigateToSendungenTab();
      pages.entscheid.detail.sendungenTabBar.grid.waitGridViewLoaded()
           .dblClickRowValue(data.status);
      pages.entscheid.detail.sendungenTabBar.detail.waitForLoaded();
      cy.wait(constants.SHORT_TIMEOUT);
      pages.entscheid.detail.sendungenTabBar.detail.ribbonMenu.clickAbschliessenBtn();
      pages.entscheid.detail.sendungenTabBar.detail
           .sendungenAbschliessenPopup.waitForLoaded()
           .setVmdatumDate(helpers.date.getCurrentDate());
      flows.modalPopup.clickOkBtn_warningOk_warningOk_CheckSuccessMsg();
      pages.groupedTaskbar.clickContainsEntscheidTab();
      pages.entscheid.detail.tabBar.navigateToDetailsTab();
      pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(data.arbeitsliste);
    });
  });
});
