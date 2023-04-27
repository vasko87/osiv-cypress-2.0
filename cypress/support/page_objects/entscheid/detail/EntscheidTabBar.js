import pageBase from "../../../base/PageBase";
import MetaInfoTab_Ent from "./tabBarTabs/MetaInfoTab_Ent";
import EntscheidDetail from "./EntscheidDetail";
import SendungenTab_Ent from "./tabBarTabs/SendungenTab_Ent";

class EntscheidTabBar {
  constructor() {
    this.elements = {
      detailsTab : () => cy.get("[akid='EntscheidDetailWindowTabbar-Details']"),
      sendungenTab : () => cy.get("[akid='EntscheidDetailWindowTabbar-Sendungen']"),
      metaInfoTab : () => cy.get("[akid='EntscheidDetailWindowTabbar-Meta-Info']")
    };
  }

  navigateToDetailsTab(){
    this.elements.detailsTab().should("be.visible").click();
    return new EntscheidDetail();
  }

  navigateToSendungenTab(){
    this.elements.sendungenTab().should("be.visible").click();
    return new SendungenTab_Ent();
  }

  navigateToMetaInfoTab(){
    this.elements.metaInfoTab().should("be.visible").click();
    return new MetaInfoTab_Ent();
  }

  checkDetailsTabColor(color, shouldHave) {
    pageBase.checkElementBorderLeftColor(this.elements.detailsTab(), color, shouldHave);
    return this;
  }
}
export default EntscheidTabBar;
