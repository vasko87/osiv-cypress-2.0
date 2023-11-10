import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";

class NeueAdressverbindungPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      verbindrungsTypeDropdown: () => this.elements.modalWindow().find("[akid='sAdressverbindungForm-adressverbtyp_adressverbtyp']"),
      adresseDropdown: () => this.elements.modalWindow().find("[akid='sAdressverbindungForm-brs_kurzadresse']")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    return this;
  }

  selectVerbindrungsTypeDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.verbindrungsTypeDropdown(), value);
    return this;
  }

  selectAdresseDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.adresseDropdown(), value);
    return this;
  }
}

export default NeueAdressverbindungPopup;
