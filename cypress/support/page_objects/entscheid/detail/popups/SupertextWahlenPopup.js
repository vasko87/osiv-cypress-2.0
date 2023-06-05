import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";
import GridBase from "../../../../base/GridBase";

class SupertextWahlenPopup extends ModalWindowBase {
  constructor() {
    super();
    this.supertextQueryGrid = new GridBase("[akid='SupertextQueryGrid']");
    super.elements = {
      ...this.elements,
      supertextNrTxt: () => this.elements.modalWindow().find("[akid='SupertextQueryGrid-Supertext_Nr'] input"),
      spracheIDDropdown: () => this.elements.modalWindow().find("[akid='SupertextQueryGrid-Sprache_ID']"),
      entscheidDropdown: () => this.elements.modalWindow().find("[akid='SupertextQueryGrid-Entscheid']"),
      leistungsCodeAnzeigenDropdown: () => this.elements.modalWindow().find("[akid='SupertextQueryGrid-LeistungsCodeAnzeigen']")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.elements.supertextNrTxt().should("be.visible");
    return this;
  }

  setSupertextNrTxt(value) {
    this.elements.supertextNrTxt().should("be.visible").click().clear().type(`${value}{enter}`);
    return this;
  }

  clearSpracheIDDropdown() {
    pageBase.clearDropdown(this.elements.spracheIDDropdown());
    return this;
  }

  clearEntscheidDropdown() {
    pageBase.clearDropdown(this.elements.entscheidDropdown());
    return this;
  }

  clearLeistungsCodeAnzeigenDropdown() {
    pageBase.clearDropdown(this.elements.leistungsCodeAnzeigenDropdown());
    return this;
  }

}

export default SupertextWahlenPopup;
