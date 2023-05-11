import pageBase from "../../../base/PageBase";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
import constants from "../../../helpers/Constants";
import TermineRibbon from "./TermineRibbon";
import TermineTabBar from "./TermineTabBar";
import TerminErledigenDialog from "./popups/TerminErledigenDialog";

class TermineDetail {
  constructor() {
    this.windowHeader = new DetailWindowHeader();
    this.ribbonMenu = new TermineRibbon();
    this.tabBar = new TermineTabBar();
    this.termineErledigenPopup = new TerminErledigenDialog();
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    cy.get(`${constants.CSS_ACTIVE_FORM} [akid='TerminDetailForm']`).should("be.visible", 10000);
    return this;
  }
}

export default TermineDetail;
