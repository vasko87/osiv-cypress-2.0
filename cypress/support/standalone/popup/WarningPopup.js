import constants from "../../helpers/Constants";
import pageBase from "../../base/PageBase";

class WarningPopup {
  constructor() {
    this.okBtnCss = "[class*='swal-button swal-button'][class*='ok'],[class='swal-button swal-button--confirm']";
    this.elements = {
      warningPopup : () => cy.get("div [class='swal-modal warningModal']", {timeout:constants.DEFAULT_TIMEOUT}),
      okBtn        : () => cy.get(this.okBtnCss),
      abbrechenBtn        : () => cy.get("[class='swal-button swal-button--cancelreply'],[class='swal-button swal-button--replycancel']")
    };
  }

  checkWarningVisible(isVisible) {
    if (isVisible === true) {
      this.elements.warningPopup().should("be.visible");
    } else {
      cy.wait(5000);
      this.elements.warningPopup().should("not.be.visible");
    }
    return this;
  }
  waitForLoaded() {
    this.elements.warningPopup().should("be.visible");
    return this;
  }

  clickOkBtn() {
    this.waitForLoaded();
    this.elements.okBtn().click();
    return this;
  }

  clickAbbrechenBtn() {
    this.waitForLoaded();
    this.elements.abbrechenBtn().click();
    return this;
  }

  clickOkBtnIfVisible() {
    cy.wait(constants.MIN_TIMEOUT);
    if (pageBase.isElementVisible(this.okBtnCss)) {
      this.elements.okBtn().click();
    }
    return this;
  }

  checkWarningContainsText(value) {
    this.waitForLoaded();
    this.elements.warningPopup().find("[class='swal-content']").should("contain.text", value);
    return this;
  }

  checkWarningContainsTextsArray(valueArr) {
    this.waitForLoaded();
    valueArr.forEach((val) => {
      this.elements.warningPopup().find("[class='swal-content']").should("contain.text", val);
    });
    return this;
  }
}

export default WarningPopup;
