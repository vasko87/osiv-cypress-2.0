import pageBase from "../../../../base/PageBase";
import DetailWindowHeader from "../../../../base/DetailWindowHeader";
import constants from "../../../../helpers/Constants";
import BeschwerdeRibbon from "./BeschwerdeRibbon";
import NotizenPopup from "./popups/NotizenPopup";
import BeschwerdePageBase from "../BeschwerdePageBase";

class BeschwerdeDetail extends BeschwerdePageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='BeschwerdeDetailForm']`;
    super(detailFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.ribbonMenu = new BeschwerdeRibbon();
    this.notizenPopup = new NotizenPopup();
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    cy.get(`${constants.CSS_ACTIVE_FORM} [akid='BeschwerdeDetailForm']`).should("be.visible", 10000);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default BeschwerdeDetail;
