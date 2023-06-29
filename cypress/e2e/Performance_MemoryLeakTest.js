import pages from "../support/base/OsivPageObject";
import flows from "../support/base/OsivFlowsObject";
import constants from "../support/helpers/Constants";
import helpers from "../support/helpers/HelperObject";
import {c50984 as testData} from "../support/helpers/DataManager";
import pageBase from "../support/base/PageBase";
import helperObject from "../support/helpers/HelperObject";

describe(`C50984: E2E (HE Entscheid);
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50984;`, {failFast: {enabled: true}}, () => {
  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => {

    it("Step 1: Open VP; Open Entscheide tab, Click Neu button -> Form for new ENT creation opens", () => {
      helperObject.performance.collectUsedJSHeapSize(i);

      flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.step1.versicherteName);
      pages.versicherte.detail.tabBar.navigateToEntscheideTab();
      pageBase.waitForLoadingDisappears();
      pages.entscheid.detail.ribbonMenu.clickNeuBtn();

      helperObject.performance.collectUsedJSHeapSize(i);
    });

    it(`Step 2: Select Leistunggruppe and Leistungscode = HE; fill in mandatory data and click OK ->
  ENT details page opens in a separate tab: Tabs basisdate, Durfuhrungsstellen and Hilflosigkeit
  are presented on the left side; orange flag is near Details tab, basisdaten abd hilflosigkeit;
  correct info panel messages; data from ent creation form is prefilled, ENT Arbeitliste = Neu`, () => {
      pages.entscheid.neuPopup
           .selectLeistungsgruppeDropdown("Hilflosenentschädigung")
           .selectLeistungscodeDropdown("Hilflosenentschädigung")
           .selectBearbeiterDropdown(testData.step2.verifyEntNew.bearbeiterDropdown)
           .verifyValuesBulk(testData.step2.verifyEntNew);
      flows.modalPopup.clickOkBtn_warningOk_CheckSuccessMsg();
      pages.entscheid.detail.sideMenu
           .checkBasisdatenTabColor(constants.COLOR.orange, true)
           .checkHilflosigkeitTabColor(constants.COLOR.orange, true)
           .checkDurchfuhrungsstellenTabColor(constants.COLOR.orange, false);
      pages.entscheid.detail.tabBar.checkDetailsTabColor(constants.COLOR.orange, true);
      pages.checkMsgOnThePage(constants.MSG.OSCIENT_522, true)
           .checkMsgOnThePage(testData.step3.msg_523_code, true)
           .checkMsgOnThePage(testData.step3.msg_523_text, true);
      pages.entscheid.detail.basisdatenTabBar.verifyValuesBulk(testData.step2.verifyEntDetail);
      helperObject.performance.collectUsedJSHeapSize(i);
    });

    it(`Step 3: Fill in the data on Basisdaten tab -> data is filled in as on screenshot;
  orange flag is removed from tab Basisdaten and orange info panel message is not presented anymore;
  side tab Entscheid sendungen appears on the left menu`, () => {
      pages.entscheid.detail.basisdatenTabBar.fillInFieldsBulk(testData.step3.fillInEntDetail);
      pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
      pages.warningPopup.clickOkBtn();
      pages.entscheid.detail.sideMenu
           .checkEntscheidSendungenTabVisible(true)
           .checkBasisdatenTabColor(constants.COLOR.orange, false);
      pages.checkMsgOnThePage(constants.MSG.OSCIENT_522, true)
           .checkMsgOnThePage(testData.step3.msg_523_code, false)
           .checkMsgOnThePage(testData.step3.msg_523_text, false);
      helperObject.performance.collectUsedJSHeapSize(i);
    });

    it(`Step 4: Click Bearbeitung Einleiten button -> berabeitung einleiten popup dialog is presented`, () => {
      pages.entscheid.detail.ribbonMenu.clickBearbeitungEinleitenBtn()
           .waitForLoaded()
           .checkBearbeiterDropdownContains(testData.step4.bearbeiterDropdown);
      helperObject.performance.collectUsedJSHeapSize(i);
    });

    it(`Step 5: Click OK button -> ENT arbeitliste = Bearbeiten, no info panel messages;
  tabs Freitexte and Diskutieren are presented on the left`, () => {
      flows.modalPopup.clickOkBtn_CheckSuccessMsg();
      pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.step5.arbeitslisteTxt);
      pages.checkMsgOnThePage(constants.MSG.OSCIENT_522, false)
           .checkMsgOnThePage(testData.step3.msg_523_code, false)
           .checkMsgOnThePage(testData.step3.msg_523_text, false);
      pages.entscheid.detail.sideMenu
           .checkFreitexteTabVisible(true)
           .checkDiskutierenTabVisible(true);
      helperObject.performance.collectUsedJSHeapSize(i);
    });

    it(`Step 6: Open Hilflosigkeit tab; Fill in the data as on attachment `, () => {
      pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab()
           .allgemeineAngabenBlock
           .selectArtderInvaliditatDropdown(testData.step6.artderInvaliditatDropdown)
           .selectAusgleichskasseDropdown(testData.step6.ausgleichskasseDropdown)
           .selectVorwAufenthaltDropdown(testData.step6.aufenthaltDropdown);
      pages.entscheid.detail.hilflosigkeitTab
           .alltaglicheLebensverrichtungBlock
           .setAnAuskleidenDate(helpers.date.getCurrentDate())
           .setAufstehenAbsitzenDate(helpers.date.getCurrentDate())
           .setEssenDate(helpers.date.getCurrentDate());
      helperObject.performance.collectUsedJSHeapSize(i);
    });

    it(`Step 7: click Speichern button; confirm warning (OSCIENT:465)`, () => {
      pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
      pages.warningPopup.checkWarningContainsText(testData.step7.warningMsg)
           .clickOkBtn();
      pages.entscheid.detail.sideMenu.checkHilflosigkeitTabColor(constants.COLOR.orange, false);
      pages.entscheid.detail.hilflosigkeitTab
           .allgemeineAngabenBlock.checkAblaufWartefristDate(helpers.date.getSameDayNextYear());
      pages.entscheid.detail.hilflosigkeitTab.wartefristBlock
           .checkWFGradTxt(testData.step7.wFGradTxt)
           .checkGrenzgradTxt(testData.step7.grenzgradTxt)
           .checkTageTxt(helpers.date.getDaysDiffFromTodayTillSameDayNextYear());
      pages.entscheid.detail.hilflosigkeitTab.wartefristVerlaufBlock
           .checkBeginnDate(helpers.date.getCurrentDate())
           .checkEndeDate(helpers.date.getOneDayLessNextYear())
           .checkAnzahlTageTxt(helpers.date.getDaysDiffFromTodayTillSameDayNextYear());
      pages.entscheid.detail.hilflosigkeitTab.hEGradBlock
           .checkHEGradDropdown(testData.step7.hEGradDropdown)
           .checkBeginnDate(helpers.date.getFirstDayOfSameMonthNextYear());
      pages.entscheid.detail.hilflosigkeitTab.hEGradVerlaufBlock
           .checkHEGradTxt(testData.step7.hEGradTxt)
           .checkHEAbTxt(helpers.date.getFirstDayOfSameMonthNextYear())
           .checkHEGradAbTxt(helpers.date.getFirstDayOfSameMonthNextYear());
      helperObject.performance.collectUsedJSHeapSize(i);
    });

    it(`Step 8: Open Freitexte tab; add any test to begrundung and click Speichern -> text is saved`, () => {
      pages.entscheid.detail.sideMenu.navigateToFreitexteTab();
      helperObject.performance.collectUsedJSHeapSize(i);
    });

    it(`Step 9: close ENT`, () => {
      pages.groupedTaskbar.closeContainsEntscheidTab();
      pages.groupedTaskbar.closeContainsVersichertendatenTab();
    });
  });
});
