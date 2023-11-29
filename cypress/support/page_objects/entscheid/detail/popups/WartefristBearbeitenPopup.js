import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";
import {type} from "mocha/lib/utils";
class WartefristBearbeitenPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      beginnDate: () => this.elements.modalWindow().find("[akid='WartefristForm-beginn_dat'] input"),
      endDate: () => this.elements.modalWindow().find("[akid='WartefristForm-end_dat'] input"),
      heGradTxt: () => this.elements.modalWindow().find("[akid='WartefristForm-au_grad'] input"),
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.elements.beginnDate().should("be.visible");
    return this;
  }

  setBeginnDate(value) {
    this.elements.bearbeiterDropdown().type(value);
    return this;
  }

  setEndDate(value) {
    this.elements.endDate().type(value);
    return this;
  }

  setHeGradTxt(value) {
    this.elements.heGradTxt().clear().type(value);
    return this;
  }

}

export default WartefristBearbeitenPopup;
