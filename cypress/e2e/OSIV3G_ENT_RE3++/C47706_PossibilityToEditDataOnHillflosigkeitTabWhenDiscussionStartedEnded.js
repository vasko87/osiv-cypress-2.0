import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import {c47706 as testData} from "../../support/helpers/DataManager";

describe(`C47706: Possibility to edit data on Hillflosigkeit tab when discussion started/ended; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/47706`, () => {

  before(`Login as ${Cypress.env("username")}`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open ENT '${testData.entId}', Open ENT
  Open Hillflosigkeit tab`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.entId);
  });

  it(`Step 2: Expected: --> Hilflosigkeit data can be edited 
  and all options in ribbon block Entscheid Hillflosigkeit spezifische Funktionen are enabled`, () => {
    step_navigateToHilflosigkeitTab_checkReadonly(false);
  });

  it(`Step 3: Open Diskutiren tab
  Select some participans (including hulk1) and start discussion > ENT moves to AL = Diskutieren`, () => {
    pages.entscheid.detail.sideMenu.navigateToDiskutierenTab()
      .selectArztDropdown(Cypress.env("username"))
      .selectJuristDropdown(testData.jurist);
    pages.entscheid.detail.ribbonMenu.clickDiskussionStartenBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.entscheid.detail.sideMenu.navigateToBasisdatenTab()
      .checkArbeitslisteTxt(testData.arbeitslisteTxt_Updated);
  });

  it(`Step 4: Open Hillflosigkeit tab --> Hilflosigkeit data can't be edited 
  and all options in ribbon block Entscheid Hillflosigkeit spezifische Funktionen are disabled`, () => {
    step_navigateToHilflosigkeitTab_checkReadonly(true);
  });

  it(`Step 5: Open Diskutiren tab
  Set checkbox 'Diskussion für übrige Teilnehmer abbrechen'
  add meldung text and click Diskussion beenden button > 
  discussion ended, END moves to AL = Bearbeoten and status = Diskutiert`, () => {
    pages.entscheid.detail.sideMenu.navigateToDiskutierenTab()
         .setDiskutierenFuerAlleToggleCheckboxSelected(true)
         .setMeldungTextarea(testData.meldungTextarea);
    pages.entscheid.detail.ribbonMenu.clickDiskussionBeendenBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.entscheid.detail.sideMenu.navigateToBasisdatenTab()
         .checkArbeitslisteTxt(testData.arbeitslisteTxt_Initial);
    pages.entscheid.detail.windowHeader.clickCloseBtn();
    pages.entscheid.grid.checkValueInGridExists(testData.status, true)
      .dblClickRowNumber(1);
  });

  it(`Step 6: Open Hillflosigkeit tab 
  --> Hilflosigkeit data can be edited 
  and all options in ribbon block Entscheid Hillflosigkeit spezifische Funktionen are enabled again`, () => {
    step_navigateToHilflosigkeitTab_checkReadonly(false);
  });

  afterEach(function() {
    if (this.currentTest.state === "failed") {
      const screenshotFileName = `${test.title} (failed).png`;
      cy.screenshot(screenshotFileName);
      // addContext({test}, `assets/${Cypress.spec.name}/${screenshotFileName}`);
      Cypress.runner.stop();
    }
  });
});

function step_navigateToHilflosigkeitTab_checkReadonly(isReadonly) {
  pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab()
       .allgemeineAngabenBlock
       .checkArtderInvaliditatDropdownReadonly(isReadonly)
       .checkVorwAufenthaltDropdownReadonly(isReadonly)
       .checkAusgleichskasseDropdownReadonly(isReadonly)
       .checkBefristungDateReadonly(isReadonly)
       .checkRevisionDateReadonly(isReadonly)
       .checkBemerkungAKTextareaReadonly(isReadonly);
  pages.entscheid.detail
       .ribbonMenu
       .checkGrenzgradAb30TBtnDisabled(isReadonly)
       .checkWartefristBearbeitenBtnDisabled(isReadonly)
       .checkHEGradBearbeitenBtnDisabled(isReadonly);
}

