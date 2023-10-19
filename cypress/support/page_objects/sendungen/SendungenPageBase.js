import pageBase from "../../base/PageBase";

class SendungenPageBase {

  constructor(baseCSS) {
    this.elements = {
      ursprungTxt : () => cy.get(baseCSS).find("[akid$='-ursprung_text'] input"),
      arbeitslisteTxt : () => cy.get(baseCSS).find("[akid$='-arbeitsliste_bez'] input"),
      formularDropdown : () => cy.get(baseCSS).find("[akid$='-formular_name_bez']"),
      empfaengerDropdown : () => cy.get(baseCSS).find("c"),
      vmdatumDate : () => cy.get(baseCSS).find("[akid$='-entscheid_vmdatum'] input")
    };
  }

  checkUrsprungTxt(value) {
    this.elements.ursprungTxt().should("have.value", value);
    return this;
  }

  checkUrsprungTxtContains(value) {
    this.elements.ursprungTxt().should("contain.value", value);
    return this;
  }

  checkArbeitslisteTxt(value) {
    this.elements.arbeitslisteTxt().should("have.value", value);
    return this;
  }

  checkFormularDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.formularDropdown(), value);
    return this;
  }

  checkEmpfaengerDropdown(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.empfaengerDropdown(), value, true);
    return this;
  }

  setVmdatumDate(date) {
    this.elements.vmdatumDate().type(date);
    return this;
  }
}

export default SendungenPageBase;
