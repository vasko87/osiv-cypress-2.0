import constants from "../../helpers/Constants";

class ErrorPopup {
  constructor() {
    this.elements = {
      errorPopup : () => cy.get("div [class='swal-modal errorModal']", {timeout:constants.DEFAULT_TIMEOUT}),
      okBtn        : () => this.elements.errorPopup().find("[class='swal-button swal-button--confirm']"),
    };
  }

  waitForLoaded() {
    this.elements.errorPopup().should("be.visible");
    return this;
  }

  clickOkBtn() {
    this.waitForLoaded();
    this.elements.okBtn().click();
    return this;
  }

  ckeckErrorContainsText(value) {
    this.waitForLoaded();
    this.elements.errorPopup().find("[class='swal-content']").should("contain.text", value);
    return this;
  }
}

export default ErrorPopup;
