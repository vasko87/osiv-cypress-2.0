import constants from "../../../helpers/Constants";
import DossierChronikTab from "./sideMenuTabs/DossierChronikTab";
import BasisdatenTab_VR from "./sideMenuTabs/BasisdatenTab_VR";
import pageBase from "../../../base/PageBase";
import AdressverbindungenTab from "./sideMenuTabs/AdressverbindungenTab";
import VersicherungenTab_VR from "./sideMenuTabs/VersicherungenTab_VR";
import DurchfuhrungsstellenTab_VR from "./sideMenuTabs/DurchfuhrungsstellenTab_VR";
import FallfuhrungTab from "./sideMenuTabs/FallfuhrungTab";

class VersicherteSideMenu {
  constructor() {
    this.elements = {
      basisdatenTab    : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbarBasis-Basisdaten']`),
      dossierChronikTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbarBasis-Dossier-Chronik']`),
      adressverbindungenTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbarBasis-Adressverbindungen']`),
      versicherungenTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbarBasis-Versicherungen']`),
      durchfuhrungsstellenTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbarBasis-Durchführungsstellen']`),
      fallfuhrungTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbarBasis-Fallführung']`)
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

  navigateToVersicherungenTab() {
    this.elements.versicherungenTab().should("be.visible").click();
    return new VersicherungenTab_VR();
  }

  navigateToDurchfuhrungsstellenTab() {
    this.elements.durchfuhrungsstellenTab().should("be.visible").click();
    return new DurchfuhrungsstellenTab_VR();
  }

  navigateToFallfuhrungTab() {
    this.elements.fallfuhrungTab().should("be.visible").click();
    return new FallfuhrungTab();
  }
}

export default VersicherteSideMenu;
