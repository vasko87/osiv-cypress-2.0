import pages from "../../../support/base/OsivPageObject";
import pageBase from "../../../support/base/PageBase";
import helperObject from "../../../support/helpers/HelperObject";
import constants from "../../../support/helpers/Constants";

const testData = {
  name: "Meneghin",
  vorname: "Lukas",
  geburtsdatum: "25.09.1971",
  geschlecht: "Männlich",
  alter: helperObject.date.getYearsAndMonthsFromDate("25.09.1971"),
  staat: "Schweiz",
  vpNr: "9745.7458.65",
  newName: "Meneghin Hollenstein",
  step10: {
    verbindrungsType: "Wohnsitz",
    adresse: "Neue Adresse anlegen"
  },
  step11: {
    adresstyp: "011 Versicherter (Umfeld)",
    sprache: "Deutsch",
    anredeart: "Herr",
    plz: "1000",
    ort: "Lausanne"
  }
};

describe(`C61621: Saving data after the ZAS comparison; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/61621`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
    helperObject.rest.VP.deleteVP(testData.vpNr);
  });

  it(`Step 1: Сreate new VP:
  Click on '+' and fill following fields in pop-up:
  Name = Meneghin, Vorname= Lukas, Geburtsdatum = 25.9.1971, Geschlecht = Mannlich`, () => {
    pages.nav.leftMenu.navigateToVersicherteTab();
    pages.versicherte.detail.waitForLoaded();
    pages.versicherte.clickAddNewBtn()
         .modalWindow.waitForLoaded();
    pages.versicherte.neuerVersicherterPopup.setNameTxt(testData.name)
         .setVornameTxt(testData.vorname)
         .setGeburtsdatumDate(testData.geburtsdatum)
         .selectGeschlechtDropdown(testData.geschlecht);
  });

  it(`Step 2: 1) Click on 'Zas-Daten abfragen' button and click 'OK' in pop-up;
  2) Click on 'OK' in 'Warnhinweis (OSCZAS:3)' and  'Warnhinweis (OSCZAS:7)' -> 
  'Neuer Versicherter' pop-up is filled as on screenshot`, () => {
    pages.versicherte.neuerVersicherterPopup.clickZasDatenBtn()
         .waitForLoaded()
         .clickOkBtn();
    pages.warningPopup.checkWarningContainsText("(OSCZAS:3)").clickOkBtn();
    pages.warningPopup.checkWarningContainsText("(OSCZAS:7)").clickOkBtn();
    pages.versicherte.neuerVersicherterPopup.checkNameTxt(testData.name)
         .checkVornameTxt(testData.vorname)
         .checkGeburtsdatumDate(testData.geburtsdatum)
         .checkGeschlechtDropdown(testData.geschlecht)
         .checkAlternTxt(testData.alter)
         .checkStaatDropdown(testData.staat)
         .checkVersichertenNrTxt(testData.vpNr);
  });

  it(`Step 3: Click 'OK' on 'Neuer Versicherter' pop-up ->
  The window with the newly created VP appears.`, () => {
    pages.versicherte.neuerVersicherterPopup.modalWindow.clickOkBtn();
    pages.versicherte.detail.basisdatenTab.waitForLoaded()
         .checkNameTxt(testData.name)
         .checkVornameTxt(testData.vorname)
         .checkGeburtsdatumDate(testData.geburtsdatum)
         .checkGeschlechtDropdown(testData.geschlecht)
         .checkAlternTxt(testData.alter)
         .checkStaatDropdown(testData.staat);
  });

  it(`Step 4: 1) Check ‘ZAS relevante Daten anpassen’
  2) Сhange Name to Meneghin Hollenstein
  3) Save (click on 'Speichern' button) -> Change is saved.`, () => {
    pages.versicherte.detail.basisdatenTab.scrollToTop()
         .setZasCheckboxChecked(true)
         .setNameTxt(testData.newName);
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pageBase.waitForLoadingDisappears();
    pages.notification.waitForSuccessMessageDisappears();
    pages.versicherte.detail.basisdatenTab.checkNameTxt(testData.newName);
  });

  it(`Step 5: 1) Check ‘ZAS relevante Daten anpassen’
  2) Click on button 'ZAS_DATEN ABFRAGEN' for starting ZAS Abgleich -> 'ZAS Daten abfragen' pop-up is opened`, () => {
    pages.versicherte.detail.basisdatenTab.scrollToTop()
         .setZasCheckboxChecked(true)
         .clickZasDatenBtn()
         .waitForLoaded();
  });

  it(`Step 6: 1) Select checkbox Nachname in 'Daten übernehmen' section
  2) Click OK on 'ZAS Daten abfragen' pop-up -> 'Warnhinweis (OSCZAS:3)' appears`, () => {
    pages.versicherte.zASDatenAbfragenPopup.setNachnameCheckbox(true)
         .clickOkBtn();
    pages.warningPopup.checkWarningContainsText("(OSCZAS:3)");
  });

  it(`Step 7: 1) Click 'OK on 'Warnhinweis (OSCZAS:3)' and on 'Warnhinweis (OSCZAS:7)' -> VP window appears`, () => {
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText("(OSCZAS:7)")
         .clickOkBtn();
  });

  it(`Step 8: Click on 'Speichern' and Click 'OK' on 'Hinweis (OSCZAS:26)' ->
  VP window is reloaded
  Name = Meneghin is visible in Basisdaten`, () => {
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.infoPopup.ckeckInformationContainsText("(OSCZAS:26)")
         .clickOkBtn();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.waitForLoaded();
    pages.notification.waitForSuccessMessageDisappears();
    pages.versicherte.detail.basisdatenTab.checkNameTxt(testData.name);
  });

  it(`Step 9: 1) Check ‘ZAS relevante Daten anpassen’
  2) Сhange Name to 'Meneghin Hollenstein'
  3) Save (click on 'Speichern') -> Change is saved.`, () => {
    pages.versicherte.detail.basisdatenTab.scrollToTop();
    pages.versicherte.detail.basisdatenTab.setZasCheckboxChecked(true)
         .setNameTxt(testData.newName);
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pageBase.waitForLoadingDisappears();
    pages.notification.waitForSuccessMessageDisappears();
    pages.versicherte.detail.basisdatenTab.checkNameTxt(testData.newName);
  });

  it(`Step 10: Create Wohnadresse:
  1) navigate to 'Adressverbindungen' side-bar menu
  2) click on 'Neu"
  3) select Verbindungstyp = Wohnsitz
  4) in Adresse dynSelect click on 'Neue Adresse anlegen' ->
  Pop-up 'Neue Adresse erstellen' is opened`, () => {
    pages.versicherte.detail.sideMenu.navigateToAdressverbindungenTab()
         .waitForLoaded();
    pages.versicherte.detail.ribbonMenu.clickNeuBtn();
    pages.versicherte.neueAdressverbindungPopup
         .waitForLoaded()
         .selectVerbindrungsTypeDropdown(testData.step10.verbindrungsType)
         .selectAdresseDropdown(testData.step10.adresse);
    pages.adressen.neueAdressePopup.waitForLoaded();
  });

  it(`Step 11: 1) Fill fields in pop-up 'Neue Adresse erstellen' as is on screenshot
  2) Click on 'Generieren' button -> Pop-up 'Neue Adresse erstellen' has green Cell Header`, () => {
    pages.adressen.neueAdressePopup
         .checkNameTxt(testData.newName)
         .checkVornameTxt(testData.vorname)
         .selectAdressTypeDropdown(testData.step11.adresstyp)
         .selectSpracheDropdown(testData.step11.sprache)
         .selectAnredeartDropdown(testData.step11.anredeart)
         .selectPlzDropdown(testData.step11.plz, testData.step11.ort)
         .checkOrtTxt(testData.step11.ort)
         .clickGenerierenBtn();
    pages.adressen.neueAdressePopup.modalWindow.checkHeaderColor(constants.COLOR.green, true);
  });

  it(`Step 12: Click 'OK' on Pop-up 'Neue Adresse erstellen'
  Click 'OK' on 'Warnhinweis (OSCISTD:49)' -> 'Neue Adressverbindung erstellen' is presented with green Cell Header`, () => {
    pages.adressen.neueAdressePopup.modalWindow.clickOkBtn();
    pages.warningPopup.checkWarningContainsText("(OSCISTD:49)")
         .clickOkBtn();
    pages.notification.checkSuccessMessageVisibleAndWaitForDisappeared();
    pages.versicherte.neueAdressverbindungPopup.checkHeaderColor(constants.COLOR.green, true);
  });

  it(`Step 13: Click 'OK' on pop-up 'Neue Adressverbindung erstellen' -> Page with address is opened`, () => {
    pages.versicherte.neueAdressverbindungPopup.clickOkBtn();
    pages.adressen.detail.waitForLoaded();
  });

  it(`Step 14: Go back to Basisdaten -> Sidebar 'Basisdaten' is opened`, () => {
    pages.groupedTaskbar.clickContainsTextTab(`${testData.newName} ${testData.vorname}`);
    pages.versicherte.detail.sideMenu.navigateToBasisdatenTab()
         .waitForLoaded();
  });

  it(`Step 15: 1) Check ‘ZAS relevante Daten anpassen’,
  2) Click on button 'ZAS_DATEN ABFRAGEN' for starting ZAS Abgleich  -> 'ZAS Daten abfragen' pop-up is opened`, () => {
    pages.versicherte.detail.basisdatenTab.scrollToTop();
    pages.versicherte.detail.basisdatenTab.setZasCheckboxChecked(true)
         .clickZasDatenBtn()
         .waitForLoaded();
  });

  it(`Step 16: 1) Select checkbox Nachname in 'Daten übernehmen' section
  2) Click OK on 'ZAS Daten abfragen' pop-up; select Nachname übernehmen and OK ->
  'Warnhinweis (OSCZAS:3)' appears`, () => {
    pages.versicherte.zASDatenAbfragenPopup.setNachnameCheckbox(true)
         .clickOkBtn();
    pages.warningPopup.checkWarningContainsText("(OSCZAS:3)");
  });

  it(`Step 17: 1) Click 'OK on 'Warnhinweis (OSCZAS:3)' and on 'Warnhinweis (OSCZAS:7)' ->
  VP window appears
  Correct name  Meneghin is visible in Basisdaten`, () => {
    pages.warningPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText("(OSCZAS:7)")
         .clickOkBtn();
    pages.versicherte.detail.basisdatenTab.waitForLoaded()
         .checkNameTxt(testData.name);
  });

  it(`Step 18: Click on 'Speichern' and Click 'OK' on 'Hinweis (OSCZAS:26)' and 'Hinweis (OSCZAS:35)' ->
  Correct name 'Meneghin' is visible in Basisdaten`, () => {
    pages.versicherte.detail.ribbonMenu.clickSpeichernBtn();
    pages.infoPopup.ckeckInformationContainsText("(OSCZAS:26)")
         .clickOkBtn();
    pages.infoPopup.ckeckInformationContainsText("(OSCSTAMM:35)")
         .clickOkBtn();
    pageBase.waitForLoadingDisappears();
    pages.versicherte.detail.waitForLoaded();
    pages.notification.waitForSuccessMessageDisappears();
    pages.versicherte.detail.basisdatenTab.checkNameTxt(testData.name);
  });
});
