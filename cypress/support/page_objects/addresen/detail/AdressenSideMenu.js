import constants from "../../../helpers/Constants";
import AnsprechpartnerTab from "./sideMenuTabs/AnsprechpartnerTab";
import AuszahlungTab from "./sideMenuTabs/AuszahlungTab";

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
    return new AnsprechpartnerTab();
  }

  navigateToAuszahlungTab() {
    this.elements.auszahlungTab().should("be.visible").click();
    return new AuszahlungTab();
  }

  navigateToMahnenTab() {
    this.elements.mahnenTab().should("be.visible").click();
    return this;
  }
}

export default AdressenSideMenu;
