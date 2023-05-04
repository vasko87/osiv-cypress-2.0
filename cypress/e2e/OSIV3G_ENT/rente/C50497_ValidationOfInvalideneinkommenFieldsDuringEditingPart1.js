import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {c50497 as testData} from "../../../support/helpers/DataManager";

describe(`C50497: Validation of Invalideneinkommen fields during editing (Part 1)" 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50497;`, {failFast: {enabled: false}}, () => {
  before(`Login`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open Entscheid = ${testData.entId}
  Step 2: Navigate to "Rente" sidebar
  Step 3: Double click on "Frühinvalidität" record in right grid`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
    pages.entscheid.detail.sideMenu.navigateToRenteTab().waitForLoaded();
    pages.entscheid.detail.renteTab.grid.dblClickRowValue(testData.methode);
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.waitForLoaded();
  });

  it(`Step 4: Set value "0" to “Stunden pro Tag“ field and change focus. 
  Repeat the same with value "24" or more → should get set to 8`, () => {
    testData.stundenProTag.forEach((stundenProTag) => {
      pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
           .setStundenProTagTxt(stundenProTag)
           .checkStundenProTagTxt(testData.stundenProTagExpected);
    });
  });

  it(`Step 5: Set value "0" to “Tage die Woche“ field and change focus. 
  Repeat the same with value "8" or more → Value is changed to 5`, () => {
    testData.tageDieWoche.forEach((tageDieWoche) => {
      pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
           .setTageDieWocheTxt(tageDieWoche)
           .checkTageDieWocheTxt(testData.tageDieWocheExpected);
    });
  });

  it(`Step 6: Set Lohnart = “Stundenlohn” and any of “Anzahl Monats-Löhne” field to 0 and save → 
  “Anzahl Monats-Löhne” is automatically set to 12`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .selectLohnartDropdown(testData.lohnart)
         .setAnzahlMonathLohneTxt(testData.anzahlMonatsLohne)
         .checkAnzahlMonathLohneTxt(testData.anzahlMonatsLohneExpected);
  });

  it(`Step 7: Set "in Fr. pro Jahr" > 0 and set "im Jahr"("Jahr des Vek") to "0000" and save →  
  Error message "Das Jahr des Invalideneinkommens muss definiert sein." is thrown`, () => {
    pages.entscheid.detail.renteTab.fruhinvaliditatPopup.invalideneinkommenBlock
         .setInFrProJahrTxt(testData.inFrProJahr)
         .setJahrDesIEkTxt(testData.jahrDesIEk);
    pages.entscheid.detail.renteTab.gemischtePopup.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pages.errorPopup.ckeckErrorContainsText(testData.errMsg)
         .clickOkBtn();
  });
});
