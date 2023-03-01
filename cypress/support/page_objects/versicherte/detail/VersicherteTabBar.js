class VersicherteTabBar {
  constructor() {
    this.elements = {
      detailsTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Details der Versicherten Person'],[class$='tab_actv'][akid='SimpleSwatTabbar-Details der Versicherten Person']"),
      entscheideTab: () => cy.get("[class$='tab'][akid='SimpleSwatTabbar-Entscheide'],[class$='tab_actv'][akid='SimpleSwatTabbar-Entscheide']")
    };
  }

  navigateToDetailsTab() {
    this.elements.detailsTab().should("be.visible").click();
    return this;
  }

  navigateToEntscheideTab() {
    this.elements.entscheideTab().click();
    return this;
  }
}

export default VersicherteTabBar;
