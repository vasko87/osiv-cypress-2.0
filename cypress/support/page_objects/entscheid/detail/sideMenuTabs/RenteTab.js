import pageBase from "../../../../base/PageBase";

class RenteTab {
  constructor() {
    this.elements = {
      lohnInFrTxt : () => cy.get("[akid='EntscheidRenteDetailForm-ve_lohn']")
    };
  }

  setLohnInFr(value) {
    this.elements.lohnInFrTxt().should("be.visible").clear().type(value);
    return this;
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default RenteTab;
