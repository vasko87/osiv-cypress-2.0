import pageBase from "../../base/PageBase";

class VersichertePageBase {
  constructor(baseCSS) {
    this.elements = {
      nameTxt: () => cy.get(baseCSS).find("[akid*='-stamm_nr_nachname'] input"),
      vornameTxt: () => cy.get(baseCSS).find("[akid*='-vorname'] input"),
      geburtsdatumDate: () => cy.get(baseCSS).find("[akid*='-geburtsdatum'] input"),
      geschlechtDropdown: () => cy.get(baseCSS).find("[akid*='-sex_bez']"),
      statusTxt: () => cy.get(baseCSS).find("[akid*='-brs_status'] input")
    };
  }

  setNameTxt(date) {
    this.elements.nameTxt().should("be.visible").type(date);
    return this;
  }

  setVornameTxt(date) {
    this.elements.vornameTxt().should("be.visible").type(date);
    return this;
  }

  setGeburtsdatumDate(date) {
    this.elements.geburtsdatumDate().should("be.enabled").click().type(date);
    return this;
  }

  selectGeschlechtDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.geschlechtDropdown(), value);
    return this;
  }

  checkStatusTxt(value) {
    this.elements.statusTxt().should("be.visible").should("have.value", value);
    return this;
  }
}

export default VersichertePageBase;
