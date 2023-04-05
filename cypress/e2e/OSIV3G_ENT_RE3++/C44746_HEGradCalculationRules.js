import pages from "../../support/base/OsivPageObject";
import {c44746 as testData} from "../../support/helpers/DataManager";

describe(`C44746: HE-Grad is calculation rules; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/44746`, () => {

  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  // Leicht -> daily living activities
  [testData.leicht.data1, testData.leicht.data2, testData.leicht.data3].forEach((data) => {
    it(`ENT ${data.entId}: ${data.testCondition}`, () => {
      step_searchEnt_navigateToHilflosigkeitTab(data);
      pages.entscheid
           .detail.hilflosigkeitTab
           .alltaglicheLebensverrichtungBlock
           .fillInFieldsBulk(data.alltaglicheLebensverrichtungBlock);
      step_clickSave_warningOK_checkHEGrad(testData.leicht);
      pages.waitForLoadingDisappears();
    });

    it(`ENT ${data.entId}: Cleaning fields`, () => {
      pages.entscheid.detail.hilflosigkeitTab
           .alltaglicheLebensverrichtungBlock.clearFields(data.alltaglicheLebensverrichtungBlock);
      step_clickSave_checkSuccessMsg();
    });
  });

  // Leicht -> practical life assistance
  [testData.leicht.data4, testData.leicht.data5, testData.leicht.data6].forEach((data) => {
    it(`ENT ${data.entId}: ${data.testCondition}`, () => {
      step_searchEnt_navigateToHilflosigkeitTab(data);
      pages.entscheid.detail.hilflosigkeitTab
           .lebenspraktischeBegleitungBlock
           .fillInFieldsBulk(data.lebenspraktischeBegleitungBlock);
      step_clickSave_warningOK_checkHEGrad(testData.leicht);
      pages.waitForLoadingDisappears();
    });

    it(`ENT ${data.entId}: Cleaning fields`, () => {
      pages.entscheid.detail.hilflosigkeitTab
           .lebenspraktischeBegleitungBlock.clearFields(data.lebenspraktischeBegleitungBlock);
      step_clickSave_checkSuccessMsg();
    });
  });

  // Mittel -> daily living activities
  [testData.mittel.data1, testData.mittel.data2, testData.mittel.data3].forEach((data) => {
    it(`ENT ${data.entId}: ${data.testCondition}`, () => {
      step_searchEnt_navigateToHilflosigkeitTab(data);
      pages.entscheid.detail.hilflosigkeitTab
           .alltaglicheLebensverrichtungBlock
           .fillInFieldsBulk(data.alltaglicheLebensverrichtungBlock);
      step_clickSave_warningOK_checkHEGrad(testData.mittel);
      pages.waitForLoadingDisappears();
    });

    it(`ENT ${data.entId}: Cleaning fields`, () => {
      pages.entscheid.detail.hilflosigkeitTab
           .alltaglicheLebensverrichtungBlock.clearFields(data.alltaglicheLebensverrichtungBlock);
      step_clickSave_checkSuccessMsg();
    });
  });

  // Mittel -> daily living activities + practical life assistance
  [testData.mittel.data4, testData.mittel.data5].forEach((data) => {
    it(`ENT ${data.entId}: ${data.testCondition}`, () => {
      step_searchEnt_navigateToHilflosigkeitTab(data);
      pages.entscheid.detail.hilflosigkeitTab
           .alltaglicheLebensverrichtungBlock.fillInFieldsBulk(data.alltaglicheLebensverrichtungBlock);
      pages.entscheid.detail.hilflosigkeitTab
           .lebenspraktischeBegleitungBlock.fillInFieldsBulk(data.lebenspraktischeBegleitungBlock);
      step_clickSave_warningOK_checkHEGrad(testData.mittel);
      pages.waitForLoadingDisappears();
    });

    it(`ENT ${data.entId}: Cleaning fields`, () => {
      pages.entscheid.detail.hilflosigkeitTab
           .alltaglicheLebensverrichtungBlock.clearFields(data.alltaglicheLebensverrichtungBlock);
      pages.entscheid.detail.hilflosigkeitTab
           .lebenspraktischeBegleitungBlock.clearFields(data.lebenspraktischeBegleitungBlock);
      step_clickSave_checkSuccessMsg();
    });
  });

  it(`ENT ${testData.schwer.entId}: ${testData.schwer.testCondition}`, () => {
    step_searchEnt_navigateToHilflosigkeitTab(testData.schwer);
    pages.entscheid.detail.hilflosigkeitTab
         .alltaglicheLebensverrichtungBlock
         .fillInFieldsBulk(testData.schwer.alltaglicheLebensverrichtungBlock);
    step_clickSave_warningOK_checkHEGrad(testData.schwer);
    pages.waitForLoadingDisappears();
  });

  it(`ENT ${testData.schwer.entId}: Cleaning fields`, () => {
    pages.entscheid.detail.hilflosigkeitTab
         .alltaglicheLebensverrichtungBlock.clearFields(testData.schwer.alltaglicheLebensverrichtungBlock);
    step_clickSave_checkSuccessMsg();
  });
});

function step_searchEnt_navigateToHilflosigkeitTab(data) {
  pages.loginPage.openUrl();
  pages.desktopMenu.navigateToEntscheidTab();
  pages.entscheid.grid.searchAndOpenEntscheidID(data.entId);
  pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab();
  pages.waitForLoadingDisappears();
}

function step_clickSave_warningOK_checkHEGrad(data) {
  pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
  pages.warningPopup.clickOkBtn();
  pages.notification.checkSuccessMessageVisible();
  pages.entscheid.detail.hilflosigkeitTab
       .hEGradBlock.checkHEGradDropdown(data.hEGradDropdown)
  pages.entscheid.detail.hilflosigkeitTab
       .hEGradVerlaufBlock.checkHEGradTxt(data.hEGradTxt);
}

function step_clickSave_checkSuccessMsg() {
  pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
  pages.notification.checkSuccessMessageVisible();
  pages.waitForLoadingDisappears();
}
