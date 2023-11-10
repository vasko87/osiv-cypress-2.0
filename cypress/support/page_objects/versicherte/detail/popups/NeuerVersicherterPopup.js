import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import VersichertePageBase from "../../VersichertePageBase";
import ZASDatenAbfragenPopup from "./zasDatenAbfragenPopup/ZASDatenAbfragenPopup";
import pageBase from "../../../../base/PageBase";

class NeuerVersicherterPopup extends VersichertePageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
    this.zasDatenAbfragenPopup = new ZASDatenAbfragenPopup();
    super.elements = {
      ...this.elements,
      versichertenNrTxt: () => this.modalWindow.elements.modalWindow().find("[akid='sStammCreateForm-stamm_nr_stamm_nr'] input"),
      nameTxt: () => this.modalWindow.elements.modalWindow().find("[akid='sStammCreateForm-stamm_nr_nachname'] input"),
      vornameTxt: () => this.modalWindow.elements.modalWindow().find("[akid='sStammCreateForm-vorname'] input"),
      geburtsdatumDate: () => this.modalWindow.elements.modalWindow().find("[akid='sStammCreateForm-geburtsdatum'] input"),
      geschlechtDropdown: () => this.modalWindow.elements.modalWindow().find("[akid='sStammCreateForm-sex_bez']"),
      staatDropdown: () => this.modalWindow.elements.modalWindow().find("[akid='sStammCreateForm-staat_bez']"),
      alternTxt: () => this.modalWindow.elements.modalWindow().find("[akid='sStammCreateForm-alternr'] input")
    };
  }

  checkVersichertenNrEmpty(isEmpty) {
    pageBase.checkElementEmpty(this.elements.versichertenNrTxt(), isEmpty);
    return this;
  }

  checkVersichertenNrTxt(value) {
    this.elements.versichertenNrTxt().should("have.value", value);
    return this;
  }
}

export default NeuerVersicherterPopup;
