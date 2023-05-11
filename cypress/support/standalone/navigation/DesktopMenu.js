import EntscheidGrid from "../../page_objects/entscheid/grid/EntscheidGrid";
import AdressenGrid from "../../page_objects/addresen/grid/AdressenGrid";
import PosteingangGrid from "../../page_objects/posteingang/grid/PosteingangGrid";
import pageBase from "../../base/PageBase";
import GesucheGrid from "../../page_objects/gesuche/detail/GesucheGrid";

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
      eingliederungTab  : () => cy.get("[class*='level-2'][menuname='Eingliederung']"),
      gesucheMainTab    : () => cy.get("[class*='level-1'][menuname='Gesuche']"),
      gesucheTab        : () => cy.get("[class*='level-2'][menuname='Gesuche']")
    };
  }

  navigateToVersicherteTab() {
    this.elements.versicherteMainTab().should("be.visible").click();
    this.elements.versicherteTab().click();
    this.elements.versicherteMainTab().click();
  }

  navigateToAdressenTab() {
    this.elements.adressenTab().should("be.visible").click();
    return new AdressenGrid();
  }

  navigateToEntscheidTab() {
    this.elements.entscheidMainTab().should("be.visible").click();
    this.elements.entscheidTab().click();
    this.elements.entscheidMainTab().click();
    return new EntscheidGrid();
  }

  navigateToEingliederungTab() {
    this.elements.eingliederungTab().should("be.visible").click();
    return new Ein();
  }

  navigateToGesucheTab() {
    this.elements.gesucheMainTab().should("be.visible").click();
    this.elements.gesucheTab().click();
    this.elements.gesucheMainTab().click();
    return new GesucheGrid();
  }

  navigateToPosteingangTab() {
    this.elements.posteingangMainTab().should("be.visible").click();
    this.elements.posteingangTab().click();
    this.elements.posteingangMainTab().click();
    return new PosteingangGrid();
  }

}

export default DesktopMenu;
