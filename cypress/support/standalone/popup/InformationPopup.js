import constants from "../../helpers/Constants";

class InformationPopup {
  constructor() {
    this.elements = {
      informationPopup : () => cy.get("div [class='swal-modal informationModal']", {timeout:constants.DEFAULT_TIMEOUT}),
      okBtn        : () => cy.get("[class='swal-button swal-button--okreply default'],[class='swal-button swal-button--confirm']")
    };
  }

  waitForLoaded() {
    this.elements.informationPopup().should("be.visible");
    return this;
  }

  clickOkBtn() {
    this.waitForLoaded();
    this.elements.okBtn().click();
    return this;
  }

  ckeckInformationContainsText(value) {
    this.waitForLoaded();
    this.elements.informationPopup().find("[class='swal-content']").should("contain.text", value);
    return this;
  }
}

export default InformationPopup;
