import constants from "../../../helpers/Constants";
import DossierChronikTab from "./sideMenuTabs/DossierChronikTab";
import BasisdatenTab_VR from "./sideMenuTabs/BasisdatenTab_VR";
import pageBase from "../../../base/PageBase";
import AdressverbindungenTab from "./sideMenuTabs/AdressverbindungenTab";

class VersicherteSideMenu {
  constructor() {
    this.elements = {
      basisdatenTab    : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbarBasis-Basisdaten']`),
      dossierChronikTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbarBasis-Dossier-Chronik']`),
      adressverbindungenTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbarBasis-Adressverbindungen']`)
    };
  }

  navigateToBasisdatenTab() {
    this.elements.basisdatenTab().should("be.visible").click();
    return new BasisdatenTab_VR();
  }

  navigateToDossierChronikTab() {
    this.elements.dossierChronikTab().should("be.visible").click();
    return new DossierChronikTab();
  }

  navigateToAdressverbindungenTab() {
    this.elements.adressverbindungenTab().should("be.visible").click();
    return new AdressverbindungenTab();
  }
}

export default VersicherteSideMenu;
