import SendungenCommonElements from "../../SendungenPageBase";
import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";

class DossierAusgebenPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      ausgabeDropdown: () => this.elements.modalWindow().find("[akid='sDossierAusgebenForm-ausgabe']")
    };
  }

  selectAusgabeDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.ausgabeDropdown(), value);
    return this;
  }

  checkAusgabeDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.ausgabeDropdown(), value);
    return this;
  }

  waitForLoaded() {
    super.waitForLoaded();
    return this;
  }
}

export default DossierAusgebenPopup;
