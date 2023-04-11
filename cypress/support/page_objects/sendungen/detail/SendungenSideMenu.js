import constants from "../../../helpers/Constants";
import FormularVariablenTab from "./sideMenuTabs/FormularVariablenTab";
class SendungenSideMenu {
  constructor() {
    this.elements = {
      basisdatenTab       : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailsTabTabbar-Basisdaten']`),
      freitextFormularTab : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailsTabTabbar-Freitext Formular']`),
      dossierBeilagenTab  : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailsTabTabbar-Dossier-Beilagen']`),
      formularVariablenTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailsTabTabbar-Formular Variablen']`),
      sendungskopieTab    : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailsTabTabbar-Sendungskopie']`)
    };
  }

  navigateToBasisdatenTab() {
    this.elements.basisdatenTab().should("be.visible").click();
    return this;
  }

  navigateToFreitextFormularTab() {
    this.elements.freitextFormularTab().should("be.visible").click();
    return this;
  }

  navigateToDossierBeilagenTab() {
    this.elements.dossierBeilagenTab().should("be.visible").click();
    return this;
  }

  navigateToFormularVariablenTab() {
    this.elements.formularVariablenTab().should("be.visible").click();
    return new FormularVariablenTab();
  }

  navigateToSendungskopieTab() {
    this.elements.sendungskopieTab().should("be.visible").click();
    return this;
  }
}
export default SendungenSideMenu;
