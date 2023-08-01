import constants from "../../../helpers/Constants";
import DetailTab_Sen from "./tabBarTabs/DetailTab_Sen";
import ProtocollTab_Sen from "./tabBarTabs/ProtocollTab_Sen";

class SendungenTabBar {
  constructor() {
    this.elements = {
      detailsTab  : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailsTabbar-Details']`),
      protokollTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailsTabbar-Protokoll']`),
      termineTab   : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailsTabbar-Termin']`),
      metaInfoTab : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailsTabbar-Meta-Info']`)
    };
  }

  navigateToDetailsTab() {
    this.elements.detailsTab().should("be.visible").click();
    return new DetailTab_Sen();
  }

  navigateToTermineTab() {
    this.elements.termineTab().should("be.visible").click();
    return this;
  }

  navigateToProtokollTab() {
    this.elements.protokollTab().should("be.visible").click();
    return new ProtocollTab_Sen();
  }

  navigateToMetaInfoTab() {
    this.elements.metaInfoTab().should("be.visible").click();
    return this;
  }
}

export default SendungenTabBar;
