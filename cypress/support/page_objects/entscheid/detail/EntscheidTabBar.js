class EntscheidTabBar {
  constructor() {
    this.elements = {
      detailsTab : () => cy.get("[akid='EntscheidDetailWindowTabbar-Details']"),
      sendungenTab : () => cy.get("[akid='EntscheidDetailWindowTabbar-Sendungen']")
    };
  }

  navigateToDetailsTab(){
    this.elements.detailsTab().should("be.visible").click();
    return this;
  }
  navigateToSendungenTab(){
    this.elements.sendungenTab().should("be.visible").click();
    return this;
  }
}
export default EntscheidTabBar;
