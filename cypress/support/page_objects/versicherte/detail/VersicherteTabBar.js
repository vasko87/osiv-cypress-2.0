import SendungenGrid from "../../sendungen/grid/SendungenGrid";
import constants from "../../../helpers/Constants";
import EntscheidGrid from "../../entscheid/grid/EntscheidGrid";
import EntscheidTab_Versicherte from "./tabBarTabs/EntscheidTab_Versicherte";
import SendungenTab_Versicherte from "./tabBarTabs/SendungenTab_Versicherte";
import EingliederungenTab_Versicherte from "./tabBarTabs/EingliederungenTab_Versicherte";

class VersicherteTabBar {
  constructor() {
    this.elements = {
      detailsTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Details der Versicherten Person'],[class$='tab_actv'][akid='SimpleSwatTabbar-Details der Versicherten Person']"),
      entscheideTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Entscheide'],[class$='tab_actv'][akid='SimpleSwatTabbar-Entscheide']"),
      eingliederungenTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Eingliederungen'],[class$='tab_actv'][akid='SimpleSwatTabbar-Eingliederungen']"),
      sendungenTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Sendungen'],[class$='tab_actv'][akid='SimpleSwatTabbar-Sendungen']")
    };
  }

  navigateToDetailsTab() {
    this.elements.detailsTab().should("be.visible").click();
    return this;
  }

  navigateToEntscheideTab() {
    this.elements.entscheideTab().click();
    return new EntscheidTab_Versicherte();
  }

  navigateToEingliederungenTab() {
    this.elements.eingliederungenTab().click();
    return new EingliederungenTab_Versicherte();
  }

  navigateToSendungenTab() {
    this.elements.sendungenTab().click();
    return new SendungenTab_Versicherte();
  }
}

export default VersicherteTabBar;
