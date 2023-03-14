import constants from "../../helpers/Constants";

class ConfirmPopup {
  constructor() {
    this.elements = {
      confirmPopup : () => cy.get("div [class='swal-modal confirmModal']", {timeout:constants.DEFAULT_TIMEOUT}),
      jaBtn        : () => this.elements.confirmPopup().find("[class='swal-button swal-button--yesreply default']"),
      neinBtn        : () => this.elements.confirmPopup().find("[class='swal-button swal-button--noreply']")
    };
  }

  waitForLoaded() {
    this.elements.confirmPopup().should("be.visible");
    return this;
  }

  clickJaBtn() {
    this.waitForLoaded();
    this.elements.jaBtn().click();
    return this;
  }

  clickNeinBtn() {
    this.waitForLoaded();
    this.elements.neinBtn().click();
    return this;
  }

  ckeckInformationContainsText(value) {
    this.waitForLoaded();
    this.elements.informationPopup().find("[class='swal-content']").should("contain.text", value);
    return this;
  }
}

export default ConfirmPopup;
