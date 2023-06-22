import constants from "../../../helpers/Constants";
import EntscheidTab_Versicherte from "./tabBarTabs/EntscheidTab_Versicherte";
import SendungenTab_Versicherte from "./tabBarTabs/SendungenTab_Versicherte";
import EingliederungenTab_Versicherte from "./tabBarTabs/EingliederungenTab_Versicherte";
import ProtocollPageObject from "../../protocoll/ProtocollPageObject";

class VersicherteTabBar {
  constructor() {
    this.elements = {
      detailsTab        : () => cy.get(`${constants.CSS_ACTIVE_FORM} [class$='tab'][akid='SimpleSwatTabbar-Details der Versicherten Person'],[class$='tab_actv'][akid='SimpleSwatTabbar-Details der Versicherten Person']`),
      entscheideTab     : () => cy.get(`${constants.CSS_ACTIVE_FORM} [class$='tab'][akid='SimpleSwatTabbar-Entscheide'],[class$='tab_actv'][akid='SimpleSwatTabbar-Entscheide']`),
      eingliederungenTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [class$='tab'][akid='SimpleSwatTabbar-Eingliederungen'],[class$='tab_actv'][akid='SimpleSwatTabbar-Eingliederungen']`),
      sendungenTab      : () => cy.get(`${constants.CSS_ACTIVE_FORM} [class$='tab'][akid='SimpleSwatTabbar-Sendungen'],[class$='tab_actv'][akid='SimpleSwatTabbar-Sendungen']`),
      protocollTab      : () => cy.get(`${constants.CSS_ACTIVE_FORM} [class$='tab'][akid='SimpleSwatTabbar-Protokoll'],[class$='tab_actv'][akid='SimpleSwatTabbar-Protokoll']`)
    };
  }

  navigateToDetailsTab() {
    this.elements.detailsTab().should("be.visible").click();
    return this;
  }

  navigateToEntscheideTab() {
    cy.log(`[Versicherte View]: navigate to 'Entscheide tab'`);
    this.elements.entscheideTab().click();
    return new EntscheidTab_Versicherte();
  }

  navigateToEingliederungenTab() {
    cy.log(`[Versicherte View]: navigate to 'Eingliederungen tab'`);
    this.elements.eingliederungenTab().click();
    return new EingliederungenTab_Versicherte();
  }

  navigateToSendungenTab() {
    cy.log(`[Versicherte View]: navigate to 'Sendungen tab'`);
    this.elements.sendungenTab().click();
    return new SendungenTab_Versicherte();
  }

  navigateToProtocollTab() {
    cy.log(`[Versicherte View]: navigate to 'Protocoll tab'`);
    this.elements.protocollTab().click();
    return new ProtocollPageObject();
  }
}

export default VersicherteTabBar;
