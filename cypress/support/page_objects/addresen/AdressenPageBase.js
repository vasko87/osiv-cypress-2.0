import PageBase from "./../../base/PageBase";

class AdressenPageBase extends PageBase {

  constructor(baseCSS) {
    super();
    super.elements = {
      adressTypeDropdown : () => cy.get(baseCSS).find("[akid$='-adresstyp']"),
      spracheDropdown    : () => cy.get(baseCSS).find("[akid$='-sprache_bez']"),
      anredeartDropdown  : () => cy.get(baseCSS).find("[akid$='-anredeartbez']"),
      titelDropdown      : () => cy.get(baseCSS).find("[akid$='-titel_adresstitel']"),
      nameTxt            : () => cy.get(baseCSS).find("[akid$='-nachname'] input"),
      vornameTxt         : () => cy.get(baseCSS).find("[akid$='-vorname'] input"),
      plzDropdown        : () => cy.get(baseCSS).find("[akid$='-postleitzahl']"),
      anschriftTxt       : () => cy.get(baseCSS).find("[akid$='-anschrift']"),
      floskelTxt         : () => cy.get(baseCSS).find("[akid$='-floskel']"),
      kurzadresseTxt     : () => cy.get(baseCSS).find("[akid$='-kurzadresse']"),
      generierenBtn      : () => cy.get(baseCSS).find("[akid$='-but_kurzadresse_anpassen']")
    };
  }

  selectAdressTypeDropdown(value) {
    super.selectInDropdownContains(this.elements.adressTypeDropdown(), value);
    return this;
  }

  selectSpracheDropdown(value) {
    super.selectInDropdownContains(this.elements.spracheDropdown(), value);
    return this;
  }

  selectAnredeartDropdown(value) {
    super.selectInDropdownContains(this.elements.anredeartDropdown(), value);
    return this;
  }

  selectTitelDropdown(value) {
    super.selectInDropdownContains(this.elements.titelDropdown(), value);
    return this;
  }

  selectPlzDropdownDropdown(value) {
    super.selectInDropdownContains(this.elements.plzDropdown(), value);
    return this;
  }

  checkAnschriftTxtEmpty(isEmpty) {
    super.checkElementEmpty(this.elements.anschriftTxt(), isEmpty);
    return this;
  }

  checkFloskelTxtEmpty(isEmpty) {
    super.checkElementEmpty(this.elements.floskelTxt(), isEmpty);
    return this;
  }

  checkKurzadresseTxtEmpty(isEmpty) {
    super.checkElementEmpty(this.elements.kurzadresseTxt(), isEmpty);
    return this;
  }
}

export default AdressenPageBase;
