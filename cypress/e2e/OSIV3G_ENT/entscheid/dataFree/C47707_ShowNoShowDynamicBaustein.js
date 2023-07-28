import {c47707 as testData} from "../../../../support/helpers/DataManager";
import pages from "../../../../support/base/OsivPageObject";
import flows from "../../../../support/base/OsivFlowsObject";

describe(`C47707: (ENT: ${testData.data1.entId}) Entscheid Freitext - Show (no show) Dynamic Baustein; 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/47707`, () => {

  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  [testData.data1, testData.data2].forEach((data) => {
    it(`as hulk1 load insured person '${data.versichertenName}'
      go to her ENT list
      open ENT '${data.entId}' (has REISEKOSTEN on DFStelle)
      goto Freitext tab and verify the Baustein List contains Baustein 1013+ ->${data.bausteinValueVisibility}`, () => {
      pages.loginPage.openUrl();
      flows.versicherte.step_navigateVP_searchByVPName_openVP(data.versichertenName);
      pages.versicherte.detail.tabBar.navigateToEntscheideTab();
      pages.versicherte.detail.entscheidTabBar.grid.dblClickRowWithText(data.entId);
      pages.entscheid.detail.sideMenu.navigateToFreitexteTab();
      pages.waitForLoadingDisappears();
      pages.entscheid.detail.freitexteTab.verfugungBeiblattAKTab
           .checkBausteinGridBezeichnungColumnHasValue(data.bausteinValue, data.bausteinValueVisibility);
    });
  });
});
