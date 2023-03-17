import pages from "../support/base/OsivPageObject";
import {c39770 as testData} from "../support/helpers/DataManager";

describe(`C39770: HE-Grad is calculation rules; 
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
    const lg = pages.entscheid.detail.getLeistungsgruppeDropdownSelectedValue();
    const lc = pages.entscheid.detail.getLeistungscodeDropdownSelectedValue();
    const gesuch = pages.entscheid.detail.getGesuchDropdownSelectedValue();
    const ereignis = pages.entscheid.detail.getEreignisDropdownSelectedValue();
    const bereich = pages.entscheid.detail.getBereichDropdownSelectedValue();
    const notizen = pages.entscheid.detail.getNotizenTextarea();

    pages.entscheid.detail.ribbonMenu.clickKopierenBtn();
    pages.entscheid.neuPopup.waitForLoaded()
         .checkArbeitslisteTxt(testData.arbeitslisteTxt)
         .checkBearbeiterDropdownContains(Cypress.env("username"))
         .checkLeistungsgruppeDropdown(lg)
         .checkLeistungscodeDropdown(lc)
         .checkGesuchDropdown(gesuch)
         .checkEreignisDropdown(ereignis)
         .checkBereichDropdown(bereich)
         .checkNotizenTextarea(notizen)
         .setNotizenTextarea("Copied");
    pages.modalWindow.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
    pages.entscheid.detail.waitForLoaded()
         .checkArbeitslisteTxt(testData.arbeitslisteTxt)
         .checkBearbeiterDropdownContains(Cypress.env("username"))
         .checkLeistungsgruppeDropdown(lg)
         .checkLeistungscodeDropdown(lc)
         .checkGesuchDropdown(gesuch)
         .checkEreignisDropdown(ereignis)
         .checkBereichDropdown(bereich)
         .checkNotizenTextarea(notizen)
         .checkNotizenTextarea("Copied");

    pages.entscheid.detail.sideMenu.navigateToDurchfuhrungsstellenTab();

  });
});
