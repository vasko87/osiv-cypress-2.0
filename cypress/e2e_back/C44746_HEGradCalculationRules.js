import loginPage from "../support/page_objects/LoginPageOld";
import dateHelper from "../support/helpers/DateHelper";
import desktop from "../support/page_objects/Desktop";
import entGrid from "../support/page_objects/ENTGrid";
import dashboard from "../support/page_objects/Dashboard";
import entscheidDetails from "../support/page_objects/EntscheidDetails";
import entHilflosigkeitTab from "../support/page_objects/EntscheidHilflosigkeitTab";
import pages from "../support/base/OsivPageObject";
import {c44746 as testData} from "../support/helpers/DataManager";

describe(`C44746: HE-Grad is calculation rules`, () => {
  beforeEach("Login", () => {
    cy.loginWithSession(Cypress.env("username1"), Cypress.env("password1"));
    loginPage.openUrl();
  });

  it(`ENT ${testData.data1.entId}: HE-Grad -> Leicht, when assistance is needed in 2 of the 6 daily living activities`, () => {
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(testData.data1.entId);
    pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab();
    pages.entscheid.detail
         .hilflosigkeitTab
         .setAnAuskleidenDate(dateHelper.getCurrentDate())
         .setAufstehenAbsitzenDate(dateHelper.getCurrentDate());
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtn();
    pages.entscheid.detail
         .hilflosigkeitTab.hEGradBlock
         .checkHEGradDropdown(testData.data1.hEGradDropdown)
         .checkHEGradTxt(testData.data1.hEGradTxt);
  });

  it(`ENT ${testData.data2.entId}: HE-Grad -> Leicht, when assistance is needed in 3 of the 6 daily living activities`, () => {
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(testData.data2.entId);
    pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab();
    pages.entscheid.detail
         .hilflosigkeitTab
         .setAnAuskleidenDate(dateHelper.getCurrentDate())
         .setAufstehenAbsitzenDate(dateHelper.getCurrentDate())
         .setEssenDate(dateHelper.getCurrentDate());
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtn();
    pages.entscheid.detail
         .hilflosigkeitTab.hEGradBlock
         .checkHEGradDropdown(testData.data3.hEGradDropdown)
         .checkHEGradTxt(testData.data3.hEGradDropdown);
  });

  it(`ENT ${testData.data3.entId}: HE-Grad -> Leicht, when personal supervision is needed`, () => {
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(testData.data3.entId);
    pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab();
    pages.entscheid.detail
         .hilflosigkeitTab
         .setPersUebvondatDate(dateHelper.getCurrentDate());
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtn();
    pages.entscheid.detail
         .hilflosigkeitTab.hEGradBlock
         .checkHEGradDropdown(testData.data3.hEGradDropdown)
         .checkHEGradTxt(testData.data3.hEGradDropdown);
  });

  it(`ENT ${testData.data4.entId}: HE-Grad -> Leicht, when 'Wohnen' area of practical life assistance is fulfilled`, () => {
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(testData.data4.entId);
    pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab();
    pages.entscheid.detail
         .hilflosigkeitTab
         .setWhnvondatDate(dateHelper.getCurrentDate());
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtn();
    pages.entscheid.detail
         .hilflosigkeitTab.hEGradBlock
         .checkHEGradDropdown(testData.data3.hEGradDropdown)
         .checkHEGradTxt(testData.data3.hEGradDropdown);
  });

  it(`ENT ${testData.data5.entId}: HE-Grad -> Leicht when at least 2 areas of practical life assistance is fulfilled`, () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID("23214").click();
    entGrid.entSelectedRow("23214").dblclick();
    cy.wait(4000);
    dashboard.HomeBtn().click();
    cy.wait(3000);
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait(7000);
    entHilflosigkeitTab.SelectWohnenDate(today);
    entHilflosigkeitTab.SelectBegleitungDate(today);
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue("Leicht");
    cy.wait(1000);

  });

  it("HE-Grad shows Leicht when 3 areas of practical life assistance is fulfilled", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID("23215").click();
    entGrid.entSelectedRow("23215").dblclick();
    cy.wait(4000);
    dashboard.HomeBtn().click();
    cy.wait(3000);
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait(7000);
    entHilflosigkeitTab.SelectWohnenDate(today);
    entHilflosigkeitTab.SelectBegleitungDate(today);
    entHilflosigkeitTab.SelectIsolationDate(today);
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue("Leicht");
    cy.wait(1000);

  });

  it("HE-Grad shows Mittel when assistance is needed in 4 of the 6 daily living activities", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID("23231").click();
    entGrid.entSelectedRow("23231").dblclick();
    cy.wait(4000);
    dashboard.HomeBtn().click();
    cy.wait(3000);
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait(7000);
    entHilflosigkeitTab.SelectAnAuskleidenDate(today);
    entHilflosigkeitTab.SelectEssenDate(today);
    entHilflosigkeitTab.SelectKörperpflegeDate(today);
    entHilflosigkeitTab.SelectFortbewegungDate(today);
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue("Mittel");
    cy.wait(1000);

  });

  it("HE-Grad shows Mittel when assistance is needed in 5 of the 6 daily living activities", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID("23232").click();
    entGrid.entSelectedRow("23232").dblclick();
    cy.wait(4000);
    dashboard.HomeBtn().click();
    cy.wait(3000);
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait(5000);
    entHilflosigkeitTab.SelectAnAuskleidenDate(today);
    entHilflosigkeitTab.SelectAufstehenAbsitzenDate(today);
    entHilflosigkeitTab.SelectEssenDate(today);
    entHilflosigkeitTab.SelectKörperpflegeDate(today);
    entHilflosigkeitTab.SelectFortbewegungDate(today);
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue("Mittel");
    cy.wait(1000);

  });

  it("HE-Grad shows Mittel when assistance is needed in 2 of the 6 daily living activities and  personal supervision is needed", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID("23233").click();
    entGrid.entSelectedRow("23233").dblclick();
    cy.wait(4000);
    dashboard.HomeBtn().click();
    cy.wait(3000);
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait(5000);
    entHilflosigkeitTab.SelectVerrichtenderNDDate(today);
    entHilflosigkeitTab.SelectFortbewegungDate(today);
    entHilflosigkeitTab.SelectPersÜberwachung(today);
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue("Mittel");
    cy.wait(1000);

  });

  it("HE-Grad shows Mittel when assistance is required in at least 2 of the 6 daily living activities and  in addition, at least one of the 3 areas of practical life support is fulfilled ( Essen +  Körperpflege+Wohnen )", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID("23234").click();
    entGrid.entSelectedRow("23234").dblclick();
    cy.wait(4000);
    dashboard.HomeBtn().click();
    cy.wait(3000);
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait(5000);
    entHilflosigkeitTab.SelectVerrichtenderNDDate(today);
    entHilflosigkeitTab.SelectFortbewegungDate(today);
    entHilflosigkeitTab.SelectPersÜberwachung(today);
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue("Mittel");
    cy.wait(1000);

  });

  it("HE-Grad shows Schwer when assistance is required in all 6 daily living activities and in addition  medical-care assistance or personal supervision is required", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID("23235").click();
    entGrid.entSelectedRow("23235").dblclick();
    cy.wait(4000);
    dashboard.HomeBtn().click();
    cy.wait(3000);
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait(5000);
    entHilflosigkeitTab.SelectAnAuskleidenDate(today);
    entHilflosigkeitTab.SelectAufstehenAbsitzenDate(today);
    entHilflosigkeitTab.SelectEssenDate(today);
    entHilflosigkeitTab.SelectKörperpflegeDate(today);
    entHilflosigkeitTab.SelectVerrichtenderNDDate(today);
    entHilflosigkeitTab.SelectFortbewegungDate(today);
    entHilflosigkeitTab.SelectMedPflegeDate(today);
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue("Schwer");
    cy.wait(1000);
  });
});
