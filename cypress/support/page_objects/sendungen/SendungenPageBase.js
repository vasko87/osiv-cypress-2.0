import pageBase from "../../base/PageBase";

class SendungenPageBase {

  constructor(baseCSS) {
    this.elements = {
      arbeitslisteTxt : () => cy.get(baseCSS).find("[akid$='-arbeitsliste_bez'] input"),
      formularDropdown : () => cy.get(baseCSS).find("[akid$='-formular_name_bez']"),
      vmdatumDate : () => cy.get(baseCSS).find("[akid$='-entscheid_vmdatum'] input")
    };
  }

  checkArbeitslisteTxt(value) {
    this.elements.arbeitslisteTxt().should("have.value", value);
    return this;
  }

  checkFormularDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.formularDropdown(), value);
    return this;
  }

  setVmdatumDate(date) {
    this.elements.vmdatumDate().type(date);
    return this;
  }
}

export default SendungenPageBase;
