import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import constants from "../../support/helpers/Constants";
import {c50462 as testData} from "../../support/helpers/DataManager";

describe(`C50462: "Abschluss Eingliederung" _no linked objects (Prufen = Nein); 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/50462`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open Eingliederung ${testData.einID}`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.einID);
  });

  it(`Step 2: Click Abschluss Eingliederung button`, () => {
    pages.eingliederung.detail.waitForLoaded()
         .ribbonMenu.clickAbschlussEingliederungBtn()
         .waitForLoaded();
  });

  it(`Step 3: On Abschluss window fill in mandatory data;
      Click Speichern -> warning is presented: Das angegebene Resultat und die Anstellungen werden gespeichert. (OSCEIN:77);
      confirm warning`, () => {
    pages.eingliederung.abschlussEingliederungPopup.selectResultatDropdown(testData.resultat)
         .selectArtDropdown(testData.art)
         .selectArtMassnahmeDropdown(testData.artMassnahme)
         .selectPensumDropdown(testData.pensum)
         .selectRentenfrageDropdown(testData.rentenfrage)
         .clickSpeichernBtn();
    pages.warningPopup
         .checkWarningContainsText(constants.MSG.OSCIENT_77_PART1)
         .checkWarningContainsText(constants.MSG.OSCIENT_77_PART2)
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.notification.waitForSuccessMessageDisappears();
  });

  it(`Step 4: Verify: Data is saved (except Prufen) and popup is not closed
      --> additionaly check: if you close popup and reopen it again>> no data is lost`, () => {
    pages.eingliederung.abschlussEingliederungPopup.checkResultatDropdown(testData.resultat)
         .checkArtDropdown(testData.art)
         .checkArtMassnahmeDropdown(testData.artMassnahme)
         .checkPensumDropdown(testData.pensum)
         .checkRentenfrageDropdown(testData.rentenfrage)
         .checkBearbeiterFolgeEntscheidDropdown(testData.benutzer);

    pages.modalWindow.clickAbbrechenBtn();
    pages.eingliederung.detail.waitForLoaded();
    pages.eingliederung.detail.ribbonMenu.clickAbschlussEingliederungBtn()
         .waitForLoaded()
         .checkResultatDropdown(testData.resultat)
         .checkArtDropdown(testData.art)
         .checkPensumDropdown(testData.pensum)
         .checkBearbeiterFolgeEntscheidDropdown(testData.benutzer);
  });

  it(`Step 5: Add meldung in Folge ENT section
      Select Rentenfrage as Nein and click OK`, () => {
    pages.eingliederung.abschlussEingliederungPopup.setMeldungFolgeEntscheidTextarea(testData.meldungTextarea)
         .selectRentenfrageDropdown(testData.rentenfrage);
    pages.modalWindow.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  it(`Step 6: Verify Eing is Closed (has AL = Abgeschlossen)`, () => {
    pages.eingliederung.detail.detailTabBar.checkArbeitslisteTxt(testData.al);
  });

  it(`Step 7: Open Folge ENT by clicking Folgeentscheid öffnen button;
      -->Verify: Meldung is saved for the Entscheid
      -->Verify: AL of folge ENT = Bearbeiten`, () => {
    pages.eingliederung.detail.ribbonMenu.clickFolgeentscheidOffnenBtn().waitForLoaded()
         .basisdatenTabBar
         .checkArbeitslisteTxt(testData.arbeitslisteTxt)
         .clickMeldungtextBtn().waitForLoaded()
         .checkMeldungTextarea(testData.meldungTextarea);
    pages.modalWindow.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
  });

  it(`Step 8:  -->Abschluss Eingliederung button
      --> Resultat anzeigen button is enabled`, () => {
    pages.groupedTaskbar.clickContainsEingliederungTab();
    pages.eingliederung.detail.ribbonMenu.checkAbschlussEingliederungBtnDisabled(true)
         .checkResultatAnzeigenBtnDisabled(false);
  });

  it(`Step 9:  Click Resultat anzeigen button
    --> no Rente secion is available`, () => {
    pages.eingliederung.detail.ribbonMenu.clickResultatAnzeigenBtn()
         .checkRentenfrageFieldsSectionVisible(false);
  });
});
