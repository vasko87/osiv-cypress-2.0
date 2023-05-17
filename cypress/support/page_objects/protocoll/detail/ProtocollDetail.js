import pageBase from "../../../base/PageBase";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
import constants from "../../../helpers/Constants";
import ProtocollPageBase from "../ProtocollPageBase";
import ProtocollRibbon from "./ProtocollRibbon";

class ProtocollDetail extends ProtocollPageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='ProtokollTXTForm'],[akid='ProtokollForm']`;
    super(detailFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.ribbonMenu = new ProtocollRibbon();
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

export default ProtocollDetail;
