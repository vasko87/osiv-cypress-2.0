import SendungenRibbon from "./SendungenRibbon";
import SendungenAbschliessenPopup from "./popups/SendungenAbschliessenPopup";
import SendungenSideMenu from "./SendungenSideMenu";
import constants from "../../../helpers/Constants";
import SendungenPageBase from "../SendungenPageBase";
import pageBase from "../../../base/PageBase";
import DetailWindowHeader from "../../../base/DetailWindowHeader";

class SendungenDetail extends SendungenPageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='SendungHauptdatenForm']`;
    super(detailFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.ribbonMenu = new SendungenRibbon();
    this.sideMenu = new SendungenSideMenu();
    this.sendungenAbschliessenPopup = new SendungenAbschliessenPopup();
    this.elements = {
      ...this.elements,
      detailForm: () => cy.get(detailFormCSS)
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.detailForm().should("be.visible", constants.DEFAULT_TIMEOUT);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default SendungenDetail;
