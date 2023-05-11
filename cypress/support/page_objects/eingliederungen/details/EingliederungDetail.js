import pageBase from "../../../base/PageBase";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
import constants from "../../../helpers/Constants";
import EingliederungTabBar from "./EingliederungTabBar";
import EingliederungRibbon from "./EingliederungRibbon";
import TermineTab_Ein from "./tabBarTabs/TermineTab_Ein";

class EingliederungDetail {
  constructor() {
    this.windowHeader = new DetailWindowHeader();
    this.ribbonMenu = new EingliederungRibbon();
    this.tabBar = new EingliederungTabBar();
    this.termineTab = new TermineTab_Ein();
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EingliederungDetailForm']`).should("be.visible", 10000);
    return this;
  }
}

export default EingliederungDetail;
