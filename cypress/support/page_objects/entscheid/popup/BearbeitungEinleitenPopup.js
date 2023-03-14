import ModalWindowBase from "../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../base/PageBase";

class BearbeitungEinleitenPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      bearbeitungEinleitenForm: () => this.elements.modalWindow().find("[akid='EntscheidBearbeitungEinleitenForm']"),
      zustandigerTxt: () => this.elements.modalWindow().find("[akid='EntscheidBearbeitungEinleitenForm-zustbenutzername']"),
      bearbeiterDropdown: () => this.elements.modalWindow().find("[akid='EntscheidBearbeitungEinleitenForm-bearbeiter']")
    };
  }

  waitForLoaded() {
    this.elements.bearbeitungEinleitenForm().should("be.visible");
    return this;
  }

  checkBearbeiterDropdown(value) {
    pageBase.checkDropdownContainsValue(this.elements.bearbeiterDropdown(), value);
    return this;
  }
}
export default BearbeitungEinleitenPopup;
