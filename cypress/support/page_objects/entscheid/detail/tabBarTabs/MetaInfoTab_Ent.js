import constants from "../../../../helpers/Constants";
import pageBase from "../../../../base/PageBase";

class MetaInfoTab_Ent {
  constructor() {
    this.elements = {
      imPapierkorbCheckbox: () => cy.get("[akid='EntscheidMetaInfoForm-geloescht']"),
      loeschtgrundTxt     : () => cy.get("[akid='EntscheidMetaInfoForm-geloeschtgrundbez'] input"),
      geandertAmDate      : () => cy.get("[akid='EntscheidMetaInfoForm-mut_dat'] input"),
      umTime              : () => cy.get("[akid='EntscheidMetaInfoForm-mutzeit'] input"),
      entscheidIdTxt      : () => cy.get("[akid='EntscheidMetaInfoForm-entscheid_id'] input")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
  }

  checkImPapierkorbCheckboxChecked(isChecked) {
    pageBase.checkCheckboxChecked(this.elements.imPapierkorbCheckbox(), isChecked);
    return this;
  }

  checkLoeschtgrundTxt(value) {
    this.elements.loeschtgrundTxt().should("have.value", value);
    return this;
  }

  checkGeandertAmDate(value) {
    this.elements.geandertAmDate().should("have.value", value);
    return this;
  }

  checkUmTimeContains(value) {
    this.elements.umTime().should("contain.value", value);
    return this;
  }

  getEntscheidIdTxt() {
    this.elements.entscheidIdTxt();
    return this;
  }
}

export default MetaInfoTab_Ent;
