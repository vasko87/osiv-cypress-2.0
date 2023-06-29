import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import VersichertePageBase from "../../VersichertePageBase";
import ZASDatenAbfragenPopup from "./zasDatenAbfragenPopup/ZASDatenAbfragenPopup";
import pageBase from "../../../../base/PageBase";

class AbgabeRegistrierenPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      dosseirAbgabeAnDropdown: () => this.elements.modalWindow().find("[akid='DossierAbgabeRegistrierenForm-ivstellebez']"),
      dosseirAbgabeAmDate: () => this.elements.modalWindow().find("[akid='DossierAbgabeRegistrierenForm-ereignis_dat']")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.elements.dosseirAbgabeAnDropdown().should("be.visible");
    return this;
  }
  selectDosseirAbgabeAnDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.dosseirAbgabeAnDropdown(), value);
    return this;
  }

}

export default AbgabeRegistrierenPopup;
