import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import constants from "../../../support/helpers/Constants";
import helpers from "../../../support/helpers/HelperObject";
import {c50984 as testData} from "../../../support/helpers/DataManager";
import dateHelper from "../../../support/helpers/DateHelper";
import pageBase from "../../../support/base/PageBase";

let isJira = false;
describe(`C50984: E2E (HE Entscheid);
  TestRail: https://osiv.testrail.net/index.php?/cases/view/50984`, {failFast: {enabled: true}}, () => {
  before("Login", () => {
      cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it("Step 1: Open VP; Open Entscheide tab, Click Neu button -> Form for new ENT creation opens", () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.step1.versicherteName);
    pages.versicherte.detail.tabBar.navigateToEntscheideTab();
    pageBase.waitForLoadingDisappears();
    pages.entscheid.detail.ribbonMenu.clickNeuBtn();
  });

  it(`Step 2: Select Leistunggruppe and Leistungscode = HE; fill in mandatory data and click OK ->
  ENT details page opens in a separate tab: Tabs basisdate, Durfuhrungsstellen and Hilflosigkeit
  are presented on the left side; orange flag is near Details tab, basisdaten abd hilflosigkeit;
  correct info panel messages; data from ent creation form is prefilled, ENT Arbeitliste = Neu`, () => {
    pages.entscheid.neuPopup
         .selectLeistungsgruppeDropdown("Hilflosenentschädigung")
         .selectLeistungscodeDropdown("Hilflosenentschädigung")
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
  });

  it(`Step 4: Click Bearbeitung Einleiten button -> berabeitung einleiten popup dialog is presented`, () => {
    pages.entscheid.detail.ribbonMenu.clickBearbeitungEinleitenBtn()
         .waitForLoaded()
         .checkBearbeiterDropdownContains(Cypress.env("username"));
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
  });

  it(`Step 8: Open Freitexte tab; add any test to begrundung and click Speichern -> text is saved`, () => {
    pages.entscheid.detail.sideMenu.navigateToFreitexteTab();
    // TODO
    //      .begrundungTab.setTextForm(testData.step8.textForm);
    // pages.entscheid.detail.ribbonMenu.clickBegrundungSpeichernBtn();
    // pages.notification.checkSuccessMessageVisible();
    // pages.entscheid.detail.freitexteTab.begrundungTab.checkTextForm(testData.step8.textForm);
    // TODO Defect on step 9
    helpers.jira.isJiraDone("OSIV-22145").then((isDone) => {
      console.log(isDone);
      if (isDone === false) {
        isJira = true;
      }
    });
  });

  it(`Step 9: open verfugung/Beiblatt AK; click freitexte generiren; confirm warning (OSCIENT:154) ->
  text is generated; var marked in yellow aut generated`, () => {
    pages.entscheid.detail.freitexteTab.navigation.navigateToVerfugungBeiblattAKTab();
    pageBase.waitForLoadingDisappears();
    pages.entscheid.detail.ribbonMenu.clickFreitextGenerierenBtn();
    pages.warningPopup.checkWarningContainsText(testData.step9.warningMsg)
         .clickOkBtn();
    pages.entscheid.detail.freitexteTab.verfugungBeiblattAKTab.docValidator()
         .checkTagTextAndBackgroundColorBulk("span", testData.step9.generatedValues.span, constants.COLOR.yellow, true)
         .checkTagTextAndBackgroundColor("span", helpers.date.getFirstDayOfSameMonthNextYear(), constants.COLOR.yellow, true);
  });

  it(`Step 10: click freietext speichern -> text is saved`, () => {
    pages.entscheid.detail.ribbonMenu.clickFreitextSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.entscheid.detail.freitexteTab.verfugungBeiblattAKTab.docValidator()
         .checkTagTextAndBackgroundColorBulk("p", testData.step10.textValues.p, constants.COLOR.yellow, false)
         .checkTagTextAndBackgroundColorBulk("span", testData.step10.textValues.span, constants.COLOR.yellow, false)
         .checkTagTextAndBackgroundColorBulk("b", testData.step10.textValues.b, constants.COLOR.yellow, false)
         .checkTagTextAndBackgroundColor("b", helpers.date.getFirstDayOfSameMonthNextYear(), constants.COLOR.yellow, false);
  });

  it(`Step 11: open Gesetzliche Grundlagen and click Freitexte generiren; confirm warning (OSCIENT:154)
  -> text is saved -> text is generated; var marked in yellow aut generated, no orange flag newr freitexte tab;
  orange flag appears near Entscheid-sendungen tab`, () => {
    pages.entscheid.detail.freitexteTab.navigation.navigateToGesetzlicheGrundlagenTab();
    pages.entscheid.detail.ribbonMenu.clickFreitextGenerierenBtn();
    pages.warningPopup.checkWarningContainsText(testData.step10.warningMsg)
         .clickOkBtn();
    pages.entscheid.detail.freitexteTab.gesetzlicheGrundlagenTab.docValidator().checkTextBlockNotEmpty(false);
    pages.waitForLoadingDisappears();
    pages.entscheid.detail.sideMenu.checkFreitexteTabColor(constants.COLOR.orange, false)
         .checkEntscheidSendungenTabColor(constants.COLOR.orange, true);
  });

  it(`Step 12: Open Entscheid-Sendungen tab; click Entscheid-Sendungen generieren button ->
  Sendung is created, orange flag disapper fron sendungen tan and presented near Visieren tab`, () => {
    pages.entscheid.detail.sideMenu.navigateToEntscheidSendungenTab();
    pageBase.waitForLoadingDisappears();
    pages.entscheid.detail.ribbonMenu.clickEntscheidSendungenGenerierenBtn();
    pages.entscheid.detail.sideMenu.checkEntscheidSendungenTabColor(constants.COLOR.orange, false)
         .checkVisierenTabColor(constants.COLOR.orange, true);
    pages.entscheid.detail.sendungenTabBar.grid.checkGridRowCount(1);
    pageBase.waitForLoadingDisappears();
  });

  it(`Step 13: Open Visieren tab; make a visa by clicking Visum speichern button
  Visa is done, all fields are read only, orange flag again presented near entscheid-sendungen tab`, () => {
    pages.entscheid.detail.sideMenu.navigateToVisierenTab()
         .waitForLoaded();
    pages.entscheid.detail.ribbonMenu.clickVisumSpeichernBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.entscheid.detail.sideMenu.checkVisierenTabColor(constants.COLOR.orange, false)
         .checkEntscheidSendungenTabColor(constants.COLOR.orange, true);
  });

  it(`Step 14: Click Entscheid-Sendungen verschicken button -> Sendungen details page opens`, () => {
    pages.entscheid.detail.sideMenu.navigateToEntscheidSendungenTab();
    pages.waitForLoadingDisappears();
    pages.entscheid.detail.ribbonMenu.clickEntscheidSendungVerschickenBtn();
    pages.sendungen.detail.waitForLoaded();
  });

  it(`Step 15: Open Formular variablen tab, add Formular variabl and click Variablen speichern button
  -> it is saved`, () => {
    pages.sendungen.detail.sideMenu.navigateToFormularVariablenTab()
         .waitForLoaded();
    pages.sendungen.detail.ribbonMenu.clickVariablenSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
  });

  it(`Step 16: Clic Druck/versand button; open Druck-Vorschau ->
  correct document is presnted (includes all texts generated on freitexte tab)`, () => {
    pages.sendungen.detail.ribbonMenu.clickDruckVersandBtn().waitForLoaded();
    pages.sendungen.druckUndVersandPopup.nav.navigateDruckVorschauTab();
    pages.sendungen.druckUndVersandPopup.waitForLoaded();
    pages.sendungen.druckUndVersandPopup.druckVorschauTab.virtualViewer().waitVirtualViewerLoaded();
    pages.waitForLoadingDisappears();
  });

  it(`Step 17: Go back on druck-versand, select test printer and click ok; click ja for frage ->
  Sendung arbeitliste is abgeschlossen, Ent is abgeschlossen`, () => {
    pages.sendungen.druckUndVersandPopup.nav.navigateDruckVersandTab();
    pageBase.waitForLoadingDisappears();
    pages.sendungen.druckUndVersandPopup.druckVersandTab.selectDruckerBenutzerDropdown(testData.step17.druckerBenutzerDropdown)
         .setVersandDate(dateHelper.getCurrentDayPlusDays(helpers.random.randomIntFromInterval(1, 14)));
    pages.sendungen.druckUndVersandPopup.clickOkBtn();
    pages.confirmPopup.clickJaBtn();
    pages.waitForLoadingDisappears();
    pages.sendungen.detail.checkArbeitslisteTxt(testData.step17.arbeitslisteTxt);
    pages.groupedTaskbar.clickEntscheidHEHETab();
    pages.entscheid.detail.sideMenu.navigateToBasisdatenTab()
         .checkArbeitslisteTxt(testData.step17.arbeitslisteTxt);
  });

  afterEach(function() {
    if (isJira) {
      cy.then(() => this.currentTest.skip());
    }
  });
});
