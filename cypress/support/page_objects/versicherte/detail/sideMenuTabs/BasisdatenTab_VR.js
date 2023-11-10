import constants from "../../../../helpers/Constants";
import VersichertePageBase from "../../VersichertePageBase";
import pageBase from "../../../../base/PageBase";

class BasisdatenTab_VR extends VersichertePageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='sStammDetailBasisdatenForm']`;
    super(detailFormCSS);
    super.elements = {
      ...this.elements,
      detailForm    : () => cy.get(detailFormCSS)
    };
  }

  scrollToTop() {
    this.elements.detailForm().scrollTo("top");
    cy.wait(constants.MIN_TIMEOUT/5);
    return this;
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.detailForm().should("be.visible");
    return this;
  }
}

export default BasisdatenTab_VR;
