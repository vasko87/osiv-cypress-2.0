import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import {c47266 as testData} from "../../support/helpers/DataManager";

describe(`C47266: Change origin of Protokoll to eingliederung (and than delete eingliederung); 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/47266`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open Eingliederung desktop
      Search for VP
      Open Eingliederung via double click`, () => {
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.vpName);
  });

  it(`Step 2: Switch to the tab Protokoll;`, () => {
    pages.versicherte.detail.tabBar.navigateToProtocollTab()
         .grid.waitGridViewLoaded();
  });

  it(`Step 3: Open Protokol
      Click Ursprung ändern;
      Change Ursprung to Eingliederung and Save;
      Verify: Ursprung is changed to Eingliederung`, () => {
    let i = 1;
    pages.versicherte.detail.tabBar.protocoll.grid.getAllColumnValues("Ursprung").then((val) => val.forEach(() => {
      pages.versicherte.detail.tabBar.protocoll
           .grid.waitGridViewLoaded()
           .dblClickRowNumber(i++);
      pages.versicherte.detail.tabBar.protocoll.detail.waitForLoaded()
           .ribbonMenu.clickUrsprungAndernBtn()
           .waitForLoaded()
           .selectUrsprungDropdown(testData.ursprungDropdown)
           .checkUrsprungDropdown(testData.ursprungDropdown)
           .checkEingliederungDropdownContains(testData.ursprungDropdown);
      pages.modalWindow.clickOkBtn();
      pages.notification.checkSuccessMessageVisible();
      pages.versicherte.detail.tabBar.protocoll.detail.checkUrsprungTxt(testData.ursprungTxt);
      pages.groupedTaskbar.clickContainsVersichertendatenTab()
           .waitForLoaded();
    }));
  });

  it(`SCENARIO 2: Delete Eingliederung
      verify: ursprung for all protokolls changed from eingliederung to Gesuch `, () => {
    pages.versicherte.detail.tabBar.navigateToEingliederungenTab()
         .grid.waitGridViewLoaded()
         .dblClickRowNumber(1);
    pages.eingliederung.detail.waitForLoaded()
         .ribbonMenu.clickLoschenBtn();
    pages.confirmPopup.clickJaBtn();
    pages.notification.checkSuccessMessageVisible();

    pages.versicherte.detail.tabBar.navigateToProtocollTab().grid.waitGridViewLoaded().getAllColumnValues("Ursprung").then((valList) => {
      valList.forEach((v) => {
        console.log(v);
        assert.equal(v, "GES", `Asserting Ursprung for all protokolls changed from eingliederung to Gesuch`);
      });
    });
  });
});

