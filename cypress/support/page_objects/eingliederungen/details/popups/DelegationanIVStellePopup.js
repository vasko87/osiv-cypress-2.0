import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";

class DelegationanIVStellePopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      delegationToForm: () => this.elements.modalWindow().find("[akid='EingliederungDelegationToForm']"),
      delegationAnDropdown: () => this.elements.modalWindow().find("[akid='EingliederungDelegationToForm-delegationanbez']"),
      formularDropdown: () => this.elements.modalWindow().find("[akid='EingliederungDelegationToForm-formularnamebez']"),
      spracheDropdown: () => this.elements.modalWindow().find("[akid='EingliederungDelegationToForm-sprachebez']"),
      zuhandenTxt: () => this.elements.modalWindow().find("[akid='EingliederungDelegationToForm-ansprech_delegation'] input"),
      telefonmnummerTxt: () => this.elements.modalWindow().find("[akid='EingliederungDelegationToForm-telefon'] input")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.elements.delegationToForm().should("be.visible");
    return this;
  }

  checkDelegationAnDropdownIsMandatory(isMandatory) {
    pageBase.checkElementMandatory(this.elements.delegationAnDropdown(), isMandatory);
    return this
  }

  selectDelegationAnDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.delegationAnDropdown(), value);
    return this;
  }

  selectDelegationAnDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.delegationAnDropdown(), index);
    return this;
  }

  checkFormularDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.formularDropdown(), value);
    return this;
  }

  checkFormularDropdownIsMandatory(isMandatory) {
    pageBase.checkElementMandatory(this.elements.formularDropdown(), isMandatory);
    return this;
  }

  checkSpracheDropdownIsMandatory(isMandatory) {
    pageBase.checkElementMandatory(this.elements.spracheDropdown(), isMandatory);
    return this;
  }

  selectSpracheDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.spracheDropdown(), value);
    return this;
  }

  setZuhandenTxt(value) {
    this.elements.zuhandenTxt().should("be.visible").type(value);
    return this;
  }

  checkZuhandenTxt(value) {
    this.elements.zuhandenTxt().should("have.value", value);
    return this;
  }

  setTelefonmnummerTxt(value) {
    this.elements.telefonmnummerTxt().should("be.visible").type(value);
    return this;
  }

  checkTelefonmnummerTxt(value) {
    this.elements.telefonmnummerTxt().should("have.value", value);
    return this;
  }
}

export default DelegationanIVStellePopup;
