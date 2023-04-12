import pageBase from "../../../../../base/PageBase";

class RentePageBase {
  constructor(baseCSS) {
    this.elements = {
      berufTxt: () => cy.get(baseCSS).find("[akid$='ve_taetigkeit']"),
      lohnInFrTxt: () => cy.get(baseCSS).find("[akid$='ve_lohn']"),
      lohnartDropdown: () => cy.get(baseCSS).find("[akid$='-lohnarttext']")
    };
  }

  selectLohnartDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.lohnartDropdown(), value);
    return this;
  }
}

export default RentePageBase;
