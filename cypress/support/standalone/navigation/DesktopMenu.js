import EntscheidGrid from "../../page_objects/entscheid/grid/EntscheidGrid";
import AdressenGrid from "../../page_objects/addresen/grid/AdressenGrid";

class DesktopMenu {
  constructor() {
    this.elements = {
      versicherteMainTab : () => cy.get("[class*='level-1'][menuname='Versicherte']"),
      versicherteTab     : () => cy.get("[class*='level-2'][menuname='Versicherte']"),
      adressenTab        : () => cy.get("[menuname='Adressen']"),
      entscheidMainTab   : () => cy.get("[class*='level-1'][menuname='Entscheid']"),
      entscheidTab       : () => cy.get("[class*='level-2'][menuname='Entscheid']")
    };
  }


  /**
   *
   */
  navigateToVersicherteTab() {
    this.elements.versicherteMainTab().should("be.visible").click();
    this.elements.versicherteTab().click();
  }

  navigateToAdressenTab() {
    this.elements.adressenTab().should("be.visible").click();
    return new AdressenGrid();
  }

  navigateToEntscheidTab() {
    this.elements.entscheidMainTab().should("be.visible").click();
    this.elements.entscheidTab().click();
    return new EntscheidGrid();
  }
}

export default DesktopMenu;
