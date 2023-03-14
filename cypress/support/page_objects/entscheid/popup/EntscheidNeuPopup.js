import ModalWindowBase from "../../../standalone/popup/ModalWindowBase";
import EntscheidPageBase from "../EntscheidPageBase";

class EntscheidNeuPopup extends EntscheidPageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }

  verifyValuesBulk(data) {
    if(data.leistungsgruppeDropdown) {
      this.checkLeistungsgruppeDropdown(data.leistungsgruppeDropdown());
    }
    if(data.leistungscodeDropdown) {
      this.checkLeistungscodeDropdown(data.leistungscodeDropdown);
    }
    if(data.gesuchDropdown) {
      this.checkGesuchDropdown(data.gesuchDropdown);
    }
    if(data.ereignisDropdown) {
      this.checkEreignisDropdown(data.ereignisDropdown);
    }
    if(data.bereichDropdown) {
      this.checkBereichDropdown(data.bereichDropdown);
    }
    if(data.bearbeiterDropdown === "username") {
      this.checkBearbeiterDropdownContains(Cypress.env("username"));
    } else if (data.bearbeiterDropdown) {
      this.checkBearbeiterDropdownReadonlyValue(data.bearbeiterDropdown);
    }
    if(data.arbeitslistevalueTxt) {
      this.checkArbeitslistevalueTxt(data.arbeitslistevalueTxt);
    }
  }
}

export default EntscheidNeuPopup;
