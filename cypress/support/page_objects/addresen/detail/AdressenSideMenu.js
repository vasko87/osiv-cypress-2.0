import constants from "../../../helpers/Constants";

class AdressenSideMenu {
  constructor() {
    this.elements = {
      basisdatenTab          : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='AdresseDetailsTabTabbar-Basisdaten']`),
      ansprechpartnerTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='AdresseDetailsTabTabbar-Ansprechpartner']`),
      auszahlungTab        : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='AdresseDetailsTabTabbar-Auszahlung']`),
      mahnenTab       : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='AdresseDetailsTabTabbar-Mahnen']`)
    };
  }

  navigateToBasisdatenTab() {
    this.elements.basisdatenTab().should("be.visible").click();
    return this;
  }

  navigateToAnsprechpartnerTab() {
    this.elements.ansprechpartnerTab().should("be.visible").click();
    return this;
  }

  navigateToAuszahlungTab() {
    this.elements.auszahlungTab().should("be.visible").click();
    return this;
  }

  navigateToMahnenTab() {
    this.elements.mahnenTab().should("be.visible").click();
    return this;
  }
}

export default AdressenSideMenu;
