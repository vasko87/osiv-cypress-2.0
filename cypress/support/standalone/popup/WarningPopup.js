import pageBase from "../../base/PageBase";

class WarningPopup {
  constructor() {
    this.elements = {
      warningPopup : () => cy.get("div [class='swal-modal warningModal']", {timeout:10000}),
      okBtn        : () => cy.get("[class*='swal-button swal-button'][class*='ok']")
    };
  }

  checkWarningVisible(isVisible) {
    if (isVisible === true) {
      this.elements.warningPopup().should("be.visible");
    } else {
      cy.wait(5000)
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

  ckeckWarningContainsText(value) {
    this.waitForLoaded();
    this.elements.warningPopup().find("[class='swal-content']").should("contain.text", value);
    return this;
  }
}

export default WarningPopup;
