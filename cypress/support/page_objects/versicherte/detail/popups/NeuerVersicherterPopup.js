import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import VersichertePageBase from "../../VersichertePageBase";
import ZASDatenAbfragenPopup from "./zasDatenAbfragenPopup/ZASDatenAbfragenPopup";

class NeuerVersicherterPopup extends VersichertePageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
    this.zasDatenAbfragenPopup = new ZASDatenAbfragenPopup();
    super.elements = {
      ...this.elements,
      zasDatenBtn: () => this.modalWindow.elements.modalWindow().find("[akid='sStammCreateForm-openzassearch']")
    };
  }

  clickZasDatenBtn() {
    this.elements.zasDatenBtn().should("be.visible").click();
    return new ZASDatenAbfragenPopup();
  }

}

export default NeuerVersicherterPopup;
