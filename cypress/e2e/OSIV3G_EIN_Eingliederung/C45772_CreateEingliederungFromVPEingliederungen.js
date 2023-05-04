import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";

const testData = {
  vpName: "Crood Eep"
}

describe(`C45772: Create Eingliederung from vP Eingliederungen; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/45772`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open VP`, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.vpName);
  });

  it(`Step 2: Open Eingliederungen tab
  Click Neu button`, () => {
    pages.versicherte.detail.tabBar.navigateToEntscheideTab();
  });
});
