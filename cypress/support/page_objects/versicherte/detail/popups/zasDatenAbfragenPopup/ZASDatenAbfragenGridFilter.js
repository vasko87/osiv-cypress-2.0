import pageBase from "../../../../../base/PageBase";

class ZASDatenAbfragenGridFilter {
  constructor() {
    this.elements = {
      nachnameTxt : () => cy.get("[akid='ZasQueryGrid-Nachname'] input"),
      vornameTxt : () => cy.get("[akid='ZasQueryGrid-Vorname'] input"),
      geburtsDatTxt : () => cy.get("[akid='ZasQueryGrid-GeburtsDat'] input"),
      geschlechtDropdown : () => cy.get("[akid='ZasQueryGrid-Sex']")
    };
  }

  checkNachnameTxt(value) {
    this.elements.nachnameTxt().should("be.visible").should("have.value", value);
    return this;
  }

  checkVornameTxt(value) {
    this.elements.vornameTxt().should("be.visible").should("have.value", value);
    return this;
  }

  checkGeburtsDatTxt(value) {
    this.elements.geburtsDatTxt().should("be.visible").should("have.value", value);
    return this;
  }

  checkGeschlechtDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.geschlechtDropdown(), value);
    return this;
  }

}

export default ZASDatenAbfragenGridFilter;
