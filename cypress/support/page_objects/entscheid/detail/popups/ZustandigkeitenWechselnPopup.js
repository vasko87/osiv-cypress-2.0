import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";
class ZustandigkeitenWechselnPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      bearbeiterDropdown: () => this.elements.modalWindow().find("[akid='EntscheidZustaendigkeitForm-bearbeiter']"),
      meldungTextarea: () => this.elements.modalWindow().find("[akid='MeldungForm-meldung'] textarea")
    };
  }

  waitForLoaded() {
    this.elements.bearbeiterDropdown().should("be.visible");
    return this;
  }

  selectBearbeiterDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.bearbeiterDropdown(), value);
    return this;
  }

  checkMeldungTextarea(value) {
    this.elements.meldungTextarea().should("be.visible").should("have.value", value);
    return this;
  }

}

export default ZustandigkeitenWechselnPopup;
