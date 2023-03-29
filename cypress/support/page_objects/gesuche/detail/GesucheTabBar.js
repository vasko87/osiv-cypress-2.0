import SendungenGrid from "../../sendungen/grid/SendungenGrid";
import EntscheidGrid from "../../entscheid/grid/EntscheidGrid";
import constants from "../../../helpers/Constants";

class GesucheTabBar {
  constructor() {
    this.elements = {
      detailsTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Details'],[class$='tab_actv'][akid='SimpleSwatTabbar-Details']"),
      entscheideTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Entscheide'],[class$='tab_actv'][akid='SimpleSwatTabbar-Entscheide']"),
      sendungenTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Sendungen'],[class$='tab_actv'][akid='SimpleSwatTabbar-Sendungen']")
    };
  }

  navigateToDetailsTab() {
    this.elements.detailsTab().should("be.visible").click();
    return this;
  }

  navigateToEntscheideTab() {
    this.elements.entscheideTab().click();
    return new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='GesuchDetailWindow'] [akid='EntscheidGesuchQueryGrid']`);
  }

  navigateToSendungenTab() {
    this.elements.sendungenTab().click();
    return new SendungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='GesuchDetailWindow'] [akid='eSendungQueryVPContextB']`);
  }
}

export default GesucheTabBar;
