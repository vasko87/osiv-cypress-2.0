class InformationPopup {
  constructor() {
    this.elements = {
      informationPopup : () => cy.get("div [class='swal-modal informationModal']", {timeout:10000}),
      okBtn        : () => cy.get("[class='swal-button swal-button--okreply default']")
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
