import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";
import {c50507 as testData} from "../../../../support/helpers/DataManager";

describe(`C50507: Presence and visibility conditions of "Neue gemischte Methode" button in Rente sidebar 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/50507`, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  [testData.data1, testData.data2].forEach((data) => {
    it(`Step 1: Check that "Neue gemischte Methode" button presents and disabled for 
    ENT=${data.entId} ${data.testCondition} (to check it -> open ENT, navigate to "Rente" sidebar) ->
    Expected result: Ribbon block "IV-Grad Berechnung" which contains 
    "Neue gemischte Methode" button is visible. Button "Neue gemischte Methode" presents and disabled`, () => {
      pages.loginPage.openUrl();
      flows.entscheid.step_navigateEnt_searchEnt_openEnt(data.entId);
      pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded();
      pages.entscheid.detail.ribbonMenu.verifyIVGradBerechnungBlockVisible(true)
           .checkNeueGemischteMethodeBtnDisabled(true);
    });
  });

  it(`Steps 2-4: Open Entscheid = ${testData.data3.entId}
  Navigate to "Rente" sidebar
  Set field "Lohn in Fr." (Entscheid.VE_Lohn) greater then zero and save ->
  Expected result: Ribbon block "IV-Grad Berechnung" which contains "Neue gemischte Methode" button is visible. 
  Button "Neue gemischte Methode" presents and enabled`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.data3.entId);
    pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded()
         .setLohnInFr(testData.data3.lohnInFr);
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.entscheid.detail.ribbonMenu.verifyIVGradBerechnungBlockVisible(true)
         .checkNeueGemischteMethodeBtnDisabled(false);
  });
});
