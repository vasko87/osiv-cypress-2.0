import pages from "../support/base/OsivPageObject";
import {c39770 as testData} from "../support/helpers/DataManager";
import Utility from "../support/Utility";

describe(`C39770: Entscheid Copy; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/39770`, () => {

  before(`Login as ${Cypress.env("username")}; VP = ${testData.versicherteName}, 
  EntschediID = ${testData.entId} (contains Versicherungen and Df-stelle)`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
    pages.desktopMenu.navigateToVersicherteTab();
    pages.versicherte.grid.searchAndOpenVersicherteName(testData.versicherteName);
    pages.versicherte.detail.waitForLoaded();
    pages.versicherte.detail.tabBar.navigateToEntscheideTab();
  });

  it("Step 1-2: Open an entscheid from preconditions; Click Button Kopieren -> " +
    "Entscheid dialog with the remark (Kopiert) is opened; " +
    "Arbeitsliste = NEW; " +
    "Bearbeiter = current user; " +
    "fields  LG (dynselect), LC (dynselect), Gesuch (dynselect), Ereignis (dynselect),  " +
    "Bereich (dynselect) and Notizen (text) are copied from the initial entscheid", () => {
    pages.versicherte.detail.entscheidGrid.dblClickRowWithText(testData.entId);
    pages.entscheid.detail.sideMenu.navigateToDurchfuhrungsstellenTab().waitForLoaded();
    pages.entscheid.detail.durchfuhrungsstellenTab.durchfuehrungGrid.getGridData().then((durchfuehrungGridData) => {
      pages.entscheid.detail.sideMenu.navigateToVersicherungTab().waitForLoaded();
      pages.entscheid.detail.versicherungenTab.versicherungGrid.getGridData().then((versicherungGridData) => {
        pages.entscheid.detail.sideMenu.navigateToBasisdatenTab();
        Utility.gatherElements({
          lg      : pages.entscheid.detail.getLeistungsgruppeDropdownSelectedValue(),
          lc      : pages.entscheid.detail.getLeistungscodeDropdownSelectedValue(),
          gesuch  : pages.entscheid.detail.getGesuchDropdownSelectedValue(),
          ereignis: pages.entscheid.detail.getEreignisDropdownSelectedValue(),
          bereich : pages.entscheid.detail.getBereichDropdownSelectedValue(),
          notizen : pages.entscheid.detail.getNotizenTextarea()
        }).then((elements) => {
          pages.entscheid.detail.ribbonMenu.clickKopierenBtn();
          pages.entscheid.neuPopup.waitForLoaded()
               .checkArbeitslisteTxt(testData.arbeitslisteTxt)
               .checkBearbeiterDropdownContains(Cypress.env("username"))
               .checkLeistungsgruppeDropdown(elements.lg.text())
               .checkLeistungscodeDropdown(elements.lc.text())
               .checkGesuchDropdown(elements.gesuch.text())
               .checkEreignisDropdown(elements.ereignis.text())
               .checkBereichDropdown(elements.bereich.text())
               .checkNotizenTextarea(elements.notizen.val())
               .clearNotizenTextarea()
               .setNotizenTextarea("Copied");
          pages.modalWindow.clickOkBtn();
          pages.warningPopup.clickOkBtn();
          pages.notification.checkSuccessMessageVisible();
          pages.waitForLoadingDisappears();
          pages.entscheid.detail.waitForLoaded()
               .checkArbeitslisteTxt(testData.arbeitslisteTxt)
               .checkBearbeiterDropdownReadonlyValue(Cypress.env("username"))
               .checkLeistungsgruppeDropdown(elements.lg.text())
               .checkLeistungscodeDropdown(elements.lc.text())
               .checkGesuchDropdown(elements.gesuch.text())
               .checkEreignisDropdown(elements.ereignis.text())
               .checkBereichDropdown(elements.bereich.text())
               .checkNotizenTextarea("Copied");
        });
        pages.entscheid.detail.sideMenu.navigateToVersicherungTab().waitForLoaded();
        pages.entscheid.detail.versicherungenTab.versicherungGrid.getGridData().then((copiedVersicherungGridData) => {
          expect(JSON.stringify(copiedVersicherungGridData)).to.be.eq(JSON.stringify(versicherungGridData));
        });
      });
      pages.entscheid.detail.sideMenu.navigateToDurchfuhrungsstellenTab().waitForLoaded();
      pages.entscheid.detail.durchfuhrungsstellenTab.durchfuehrungGrid.getGridData().then((durchfuehrungCopiedGridData) => {
        expect(JSON.stringify(durchfuehrungCopiedGridData)).to.be.eq(JSON.stringify(durchfuehrungGridData));
      });
    });
  });
});
