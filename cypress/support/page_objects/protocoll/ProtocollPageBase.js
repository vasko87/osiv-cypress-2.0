import pageBase from "../../base/PageBase";

class ProtocollPageBase {
  constructor(baseCSS) {
    this.elements = {
      typDropdown: () => cy.get(baseCSS).find("[akid$='-protokolltyptext']"),
      ursprungDropdown  : () => cy.get(baseCSS).find("[akid$='-ursprungbez']"),
      ursprungTxt  : () => cy.get(baseCSS).find("[akid$='-ursprung'] input"),
      entscheidDropdown  : () => cy.get(baseCSS).find("[akid$='-entscheidbez']")
    };
  }
  selectTypDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.typDropdown(), value);
    return this;
  }

  checkTypDropdownn(value) {
    pageBase.checkDropdownSelectedValue(this.elements.typDropdown(), value);
    return this;
  }

  selectUrsprungDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.ursprungDropdown(), value);
    return this;
  }

  checkUrsprungDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.ursprungDropdown(), value);
    return this;
  }

  selectUntscheidDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.entscheidDropdown(), value);
    return this;
  }

  checkEntscheidDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.entscheidDropdown(), value);
    return this;
  }

  checkUrsprungTxt(value) {
    this.elements.ursprungTxt().should("be.visible").should("have.value", value);
    return this;
  }
}

export default ProtocollPageBase;
