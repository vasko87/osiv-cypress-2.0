import pageBase from "../base/PageBase";
import constants from "../helpers/Constants";

class VirtualViewer {
  constructor() {
    this.elements = {
      virtualViewerFrame: () => cy.get("iframe[name='VVDemo']", {timeout: constants.LONG_TIMEOUT}),
      spinnerDoc : () => cy.get("[class='dhx-cell_layout'] [class='dhx-cell_progress_svg']")
    };
  }

  waitVirtualViewerLoaded() {
    this.elements.virtualViewerFrame().should("be.visible");
    cy.wait(constants.SHORT_TIMEOUT);
    return this;
  }

  checkDocumentDataVisible(isVisible) {
    if (isVisible) {
      this.virtualViewerFrame().its("[id='vvImageCanvas']").should("be.visible", {timeout: constants.LONG_TIMEOUT});
    } else {
      this.virtualViewerFrame().its("[id='vvImageCanvas']").should("not.be.visible", {timeout: constants.LONG_TIMEOUT});
    }
    return this;
  }


  /**
   * Waiting for Virtual Viewer spinner disappears
   * @returns {Notifications}
   */
  waitForSpinnerAppearAndDisappeared() {
    // cy.wait(10000);
    // this.elements.spinnerDoc().should("be.visible");
    // this.elements.spinnerDoc().should("not.be.visible");
    return this;
  }

}
export default VirtualViewer;
