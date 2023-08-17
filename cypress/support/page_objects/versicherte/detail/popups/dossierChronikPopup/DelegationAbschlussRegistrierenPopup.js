import ModalWindowBase from "../../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../../base/PageBase";
import IvStellenWahlenPopup from "../ivStellenWahlenPopup/IvStellenWahlenPopup";

class DelegationAbschlussRegistrierenPopup extends ModalWindowBase {
  constructor() {
    super();
    this.ivStellenWahlenPopup = new IvStellenWahlenPopup();
    super.elements = {
      ...this.elements,
      dossierEreignisTxt : () => this.elements.modalWindow().find("[akid='DelegationAbschlussForm-stammereignis'] input"),
      ivStelleDropdown: () => this.elements.modalWindow().find("[akid='DelegationAbschlussForm-iv_stelle_bez']"),
      abschlussAmDate          : () => this.elements.modalWindow().find("[akid='DelegationAbschlussForm-ereignis_dat'] input")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.elements.dossierEreignisTxt().should("be.visible");
    return this;
  }

  checkDossierEreignisTxtValue(value) {
    this.elements.dossierEreignisTxt().should("be.visible").should("have.value", value);
    return this;
  }

  checkDossierEreignisTxtReadonly(isReadonly) {
    pageBase.checkElementReadonly(this.elements.dossierEreignisTxt(), isReadonly);
    return this;
  }

  selectIvStelleDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.ivStelleDropdown(), index);
    return this;
  }
  checkIvStelleDropdownReadonly(isReadonly) {
    pageBase.checkDropdownReadonly(this.elements.ivStelleDropdown(), isReadonly);
    return this;
  }

  checkIvStelleDropdownMandatory(isMandatory) {
    pageBase.checkElementMandatory(this.elements.ivStelleDropdown(), isMandatory);
    return this;
  }

  setAbschlussAmDate(value) {
    this.elements.abschlussAmDate().should("be.visible").clear().type(value);
    return this;
  }

  checkAbschlussAmDateEmpty(isEmpty) {
    pageBase.checkElementEmpty(this.elements.abschlussAmDate(), isEmpty);
    return this;
  }

  checkAbschlussAmDateMandatory(isMandatory) {
    pageBase.checkElementMandatory(this.elements.abschlussAmDate().parent(), isMandatory);
    return this;
  }
}

export default DelegationAbschlussRegistrierenPopup;
