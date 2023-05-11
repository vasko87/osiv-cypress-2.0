import TermineDetail from "./TermineDetail";

class TermineTabBar {
  constructor() {
    this.elements = {
      detailsTab : () => cy.get("[akid='SimpleSwatTabbar-Details']"),
      metaInfoTab : () => cy.get("[akid='SimpleSwatTabbar-Meta-Info']")
    };
  }

  navigateToDetailsTab(){
    this.elements.detailsTab().should("be.visible").click();
    return new TermineDetail();
  }

  navigateToMetaInfoTab(){
    this.elements.metaInfoTab().should("be.visible").click();
    return this;
  }
}
export default TermineTabBar;
