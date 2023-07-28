import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";

const testData = {
  entId: "23000",
  errMsg: "Definieren Sie zuerst die Art der Invalidität."
};

describe(`C50508: Prohibition of opening "Neue gemischte Methode" modal for Entscheid with empty "Art der Invalidität" 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/50508`, {failFast: {enabled: true}}, () => {

  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1-4: 
  1. Open Entscheid = ${testData.entId}
  2. Navigate to "Rente" sidebar
  3. Click on button "Enable All Ribbon Items" from ribbon hamburger menu -> 
  4. Click on button "Neue gemischte Methode" ->
  Expected result: Message "Definieren Sie zuerst die Art der Invalidität." is appeared`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
    pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded();
    pages.entscheid.detail.ribbonMenu.clickNeueGemischteMethodeBtn();
    pages.entscheid.detail.windowHeader.clickConfigureBtn_clickEnableAllRibbonItemsBtn();
    pages.entscheid.detail.ribbonMenu.clickNeueGemischteMethodeBtn();
    pages.errorPopup.ckeckErrorContainsText(testData.errMsg).clickOkBtn();
  });
});
