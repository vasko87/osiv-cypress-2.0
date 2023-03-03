import PageBase from "../../base/PageBase";

class EntscheidPageBase extends PageBase {
  constructor(baseCSS) {
    super();
    this.elements = {
      supertextbezDropdown    : () => cy.get(baseCSS).find("[akid$='-supertextbez']"),
      entscheidtypbezDropdown : () => cy.get(baseCSS).find("[akid$='-entscheidtypbez']"),
      arbeitslistevalueTxt    : () => cy.get(baseCSS).find("[akid$='-arbeitslistevalue'] input"),
      leistungsgruppeDropdown    : () => cy.get(baseCSS).find("[akid$='-leistungsgruppe']")
    };
  }

  checkSupertextDropdownReadOnly(isReadonly) {
    super.checkElementReadOnly(this.elements.supertextbezDropdown(), isReadonly);
    return this;
  }

  checkEntscheidTypDropdownReadOnly(isReadonly) {
    super.checkElementReadOnly(this.elements.entscheidtypbezDropdown(), isReadonly);
  }

  checkArbeitslistevalueTxt(value) {
    this.elements.arbeitslistevalueTxt().should("have.value", value);
  }

}

export default EntscheidPageBase;
