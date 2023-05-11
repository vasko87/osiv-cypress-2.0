import EingliederungDetail from "./EingliederungDetail";
import TermineTab_Ein from "./tabBarTabs/TermineTab_Ein";
import DetailTab_Ein from "./tabBarTabs/DetailTab_Ein";

class EingliederungTabBar {
  constructor() {
    this.elements = {
      detailsTab : () => cy.get("[akid='SimpleSwatTabbar-Details']"),
      termineTab : () => cy.get("[akid='SimpleSwatTabbar-Termine']"),
      sendungenTab : () => cy.get("[akid='SimpleSwatTabbar-Sendungen']"),
      entscheideTab : () => cy.get("[akid='SimpleSwatTabbar-Entscheide']"),
      protokollTab : () => cy.get("[akid='SimpleSwatTabbar-Protokoll']"),
      metaInfoTab : () => cy.get("[akid='SimpleSwatTabbar-Meta-Info']")
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
    return this;
  }

  navigateToEntscheideTab(){
    this.elements.entscheideTab().should("be.visible").click();
    return this;
  }

  navigateToProtokollTab(){
    this.elements.protokollTab().should("be.visible").click();
    return new SendungenTab_Ent();
  }

  navigateToMetaInfoTab(){
    this.elements.metaInfoTab().should("be.visible").click();
    return new MetaInfoTab_Ent();
  }
}
export default EingliederungTabBar;
