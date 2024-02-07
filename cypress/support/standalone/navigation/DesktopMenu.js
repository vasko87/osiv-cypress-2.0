import VersicherteGrid from "../../page_objects/versicherte/grid/VersicherteGrid";
import pageBase from "../../base/PageBase";

class DesktopMenu {
  constructor() {
    this.elements = {
      versicherteMainTab: () => cy.get("[class*='level-1'][menuname='Versicherte']"),
      versicherteTab    : () => cy.get("[class*='level-2'][menuname='Versicherte']"),
      sendungenMainTab  : () => cy.get("[class*='level-1'][menuname='Sendungen']"),
      sendungenTab      : () => cy.get("[class*='level-2'][menuname='Sendungen']"),
      adressenTab       : () => cy.get("[menuname='Adressen']"),
      posteingangMainTab: () => cy.get("[class*='level-1'][menuname='Posteingang']"),
      posteingangTab    : () => cy.get("[class*='level-2'][menuname='Posteingang']"),
      entscheidMainTab  : () => cy.get("[class*='level-1'][menuname*='Entscheid']"),
      entscheidTab      : () => cy.xpath("//*[contains(@class,'level-2') " +
        "and contains(@menuname,'Entscheid') and not(contains(@menuname,'Auflage'))]"),
      beschwerdeTab     : () =>
        cy.xpath("//*[contains(@class,'level-2') and contains(@menuname,'Beschwerde')]"),
      eingliederungTab  : () => cy.get("[menuname*='Eingliederung']"),
      gesucheMainTab    : () => cy.get("[class*='level-1'][menuname='Gesuche']"),
      gesucheTab        : () => cy.get("[class*='level-2'][menuname='Gesuche']")
    };
  }

  navigateToVersicherteTab() {
    this.elements.versicherteMainTab().scrollIntoView().should("be.visible").click();
    this.elements.versicherteTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.versicherteMainTab().click();
    return new VersicherteGrid();
  }

  navigateToSendungenTab() {
    this.elements.sendungenMainTab().scrollIntoView().should("be.visible").click();
    this.elements.sendungenTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.sendungenMainTab().click();
    return this;
  }

  navigateToAdressenTab() {
    this.elements.adressenTab().scrollIntoView().should("be.visible").click();
    return this;
  }

  navigateToEntscheidTab() {
    this.elements.entscheidMainTab().scrollIntoView().should("be.visible").click();
    this.elements.entscheidTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.entscheidMainTab().click();
    return this;
  }

  navigateToEntscheidBeschwerdeTab() {
    this.elements.entscheidMainTab().scrollIntoView().should("be.visible").click();
    this.elements.beschwerdeTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.entscheidMainTab().click();
    return this;
  }

  navigateToEingliederungTab() {
    this.elements.eingliederungTab().scrollIntoView().should("be.visible").click();
    return this;
  }

  navigateToGesucheTab() {
    this.elements.gesucheMainTab().scrollIntoView().should("be.visible").click();
    this.elements.gesucheTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.gesucheMainTab().click();
    return this;
  }

  navigateToPosteingangTab() {
    this.elements.posteingangMainTab().scrollIntoView().should("be.visible").click();
    this.elements.posteingangTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.posteingangMainTab().click();
    return this;
  }

}

export default DesktopMenu;
