import VersicherteGrid from "../../page_objects/versicherte/grid/VersicherteGrid";
import pageBase from "../../base/PageBase";

class DesktopMenu {
  constructor() {
    this.elements = {
      versicherteMainTab: () => cy.get("[class*='level-1'][menuname='Versicherte']"),
      versicherteTab    : () => cy.get("[class*='level-2'][menuname='Versicherte']"),
      adressenTab       : () => cy.get("[menuname='Adressen']"),
      posteingangMainTab: () => cy.get("[class*='level-1'][menuname='Posteingang']"),
      posteingangTab    : () => cy.get("[class*='level-2'][menuname='Posteingang']"),
      entscheidMainTab  : () => cy.get("[class*='level-1'][menuname='Entscheid']"),
      entscheidTab      : () => cy.get("[class*='level-2'][menuname='Entscheid']"),
      eingliederungTab  : () => cy.get("[menuname='Eingliederung']"),
      gesucheMainTab    : () => cy.get("[class*='level-1'][menuname='Gesuche']"),
      gesucheTab        : () => cy.get("[class*='level-2'][menuname='Gesuche']")
    };
  }

  navigateToVersicherteTab() {
    cy.log("Navigate To 'Versicherte' tab");
    this.elements.versicherteMainTab().should("be.visible").click();
    this.elements.versicherteTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.versicherteMainTab().click();
    return new VersicherteGrid();
  }

  navigateToAdressenTab() {
    cy.log("Navigate To 'Adressen' tab");
    this.elements.adressenTab().should("be.visible").click();
    return this;
  }

  navigateToEntscheidTab() {
    cy.log("Navigate To 'Entscheid' tab");
    this.elements.entscheidMainTab().should("be.visible").click();
    this.elements.entscheidTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.entscheidMainTab().click();
    return this;
  }

  navigateToEingliederungTab() {
    cy.log("Navigate To 'Eingliederung' tab");
    this.elements.eingliederungTab().should("be.visible").click();
    return this;
  }

  navigateToGesucheTab() {
    cy.log("Navigate To 'Gesuche' tab");
    this.elements.gesucheMainTab().should("be.visible").click();
    this.elements.gesucheTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.gesucheMainTab().click();
    return this;
  }

  navigateToPosteingangTab() {
    cy.log("Navigate To 'Posteingang' tab");
    this.elements.posteingangMainTab().should("be.visible").click();
    this.elements.posteingangTab().click();
    pageBase.waitForLoadingDisappears();
    this.elements.posteingangMainTab().click();
    return this;
  }

}

export default DesktopMenu;
