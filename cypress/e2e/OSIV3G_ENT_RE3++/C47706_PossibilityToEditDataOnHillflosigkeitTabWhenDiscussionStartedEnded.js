import pages from "../../support/base/OsivPageObject";
import {c47706 as testData} from "../../support/helpers/DataManager";
import EntscheidFlows from "../../support/flows/EntscheidFlows";

describe(`C47706: Possibility to edit data on Hillflosigkeit tab when discussion started/ended; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/47706`, () => {

  before(`Login as ${Cypress.env("username")}`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Steps: Open ENT '${testData.entId}', Open ENT
  Open Hillflosigkeit tab`, () => {
    pages.loginPage.openUrl();
    EntscheidFlows.step_navigateEnt_searchEnt_openEnt_navigateToHilflosigkeitTab(testData.entId);
  });
})
