import PageBase from "../../../base/PageBase";

class EntscheidTabBar extends PageBase{
  constructor() {
    super();
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

  checkDetailsTabColor(color, shouldHave) {
    super.checkElementColor(this.elements.detailsTab(), color, shouldHave);
    return this;
  }
}
export default EntscheidTabBar;
