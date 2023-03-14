
class SendungenPageBase {

  constructor(baseCSS) {
    this.elements = {
      arbeitslisteTxt : () => cy.get(baseCSS).find("[akid$='-arbeitsliste_bez']"),
      vmdatumDate : () => cy.get(baseCSS).find("[akid$='-entscheid_vmdatum'] input")
    };
  }

  checkArbeitslisteTxt(value) {
    this.elements.arbeitslisteTxt().should("have.value", value);
    return this;
  }
  setVmdatumDate(date) {
    this.elements.vmdatumDate().type(date);
    return this;
  }
}

export default SendungenPageBase;
