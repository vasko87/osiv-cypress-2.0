import ModalWindow from "../../../standalone/popup/ModalWindow";

class BearbeitungEinleitenPopup extends ModalWindow {
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
    super.checkDropdownContainsValue(this.elements.bearbeiterDropdown(), value);
    return this;
  }
}
export default BearbeitungEinleitenPopup;
