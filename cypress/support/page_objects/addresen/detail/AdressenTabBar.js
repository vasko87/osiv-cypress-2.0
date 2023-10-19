import AdressenDetail from "./AdressenDetail";

class AdressenTabBar {
  constructor() {
    this.elements = {
      detailsTab : () => cy.get("[akid='SimpleSwatTabbar-Adressdetails']"),
      stammTab : () => cy.get("[akid='SimpleSwatTabbar-Stamm']"),
      metaInfoTab : () => cy.get("[akid='SimpleSwatTabbar-Meta-Info']")
    };
  }

  navigateToDetailsTab(){
    this.elements.detailsTab().should("be.visible").click();
    return new AdressenDetail();
  }

  navigateToStammTab(){
    this.elements.stammTab().should("be.visible").click();
    return this;
  }

  navigateToMetaInfoTab(){
    this.elements.metaInfoTab().should("be.visible").click();
    return this;
  }
}
export default AdressenTabBar;
