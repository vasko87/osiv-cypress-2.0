import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";

class SupertextFreidefinierbareVariablenPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      nurFurDenVorbescheidDate: () => this.elements.modalWindow().find("[akid='EntscheidCreateSupertextForm-1_Datum'] input"),
      einDatumDate: () => this.elements.modalWindow().find("[akid='EntscheidCreateSupertextForm-2_Datum'] input")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    return this;
  }

  setNurFurDenVorbescheidDate(value) {
    this.elements.nurFurDenVorbescheidDate().should("be.visible").type(value);
    return this;
  }

  setEinDatumDate(value) {
    this.elements.einDatumDate().should("be.visible").type(value);
    return this;
  }
}
export default SupertextFreidefinierbareVariablenPopup;
