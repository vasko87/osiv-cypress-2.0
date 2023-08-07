import TermineTab_Ein from "./tabBarTabs/TermineTab_Ein";
import DetailTab_Ein from "./tabBarTabs/DetailTab_Ein";
import EntscheideTab_Ein from "./tabBarTabs/EntscheideTab_Ein";
import SendungenTab_Ein from "./tabBarTabs/SendungenTab_Ein";
import MetaInfoTab_Ein from "./tabBarTabs/MetaInfoTab_Ein";
import constants from "../../../helpers/Constants";

class EingliederungTabBar {
  constructor() {
    this.elements = {
      detailsTab : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbar-Details']`),
      termineTab : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbar-Termine']`),
      sendungenTab : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbar-Sendungen']`),
      entscheideTab : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbar-Entscheide']`),
      protokollTab : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbar-Protokoll']`),
      metaInfoTab : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatTabbar-Meta-Info']`)
    };
  }

  navigateToDetailsTab(){
    this.elements.detailsTab().should("be.visible").click();
    return new DetailTab_Ein();
  }

  navigateToTermineTab(){
    this.elements.termineTab().should("be.visible").click();
    return new TermineTab_Ein();
  }

  navigateToSendungenTab(){
    this.elements.sendungenTab().should("be.visible").click();
    return new SendungenTab_Ein();
  }

  navigateToEntscheideTab(){
    this.elements.entscheideTab().should("be.visible").click();
    return new EntscheideTab_Ein();
  }

  navigateToProtokollTab(){
    this.elements.protokollTab().should("be.visible").click();
    return this;
  }

  navigateToMetaInfoTab(){
    this.elements.metaInfoTab().should("be.visible").click();
    return new MetaInfoTab_Ein();
  }
}
export default EingliederungTabBar;
