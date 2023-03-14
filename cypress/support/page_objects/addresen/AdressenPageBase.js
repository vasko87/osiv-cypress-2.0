import pageBase from "./../../base/PageBase";

class AdressenPageBase {

  constructor(baseCSS) {
    this.elements = {
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
    pageBase.selectInDropdownContains(this.elements.adressTypeDropdown(), value);
    return this;
  }

  selectSpracheDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.spracheDropdown(), value);
    return this;
  }

  selectAnredeartDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.anredeartDropdown(), value);
    return this;
  }

  selectTitelDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.titelDropdown(), value);
    return this;
  }

  selectPlzDropdownDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.plzDropdown(), value);
    return this;
  }

  checkAnschriftTxtEmpty(isEmpty) {
    pageBase.checkElementEmpty(this.elements.anschriftTxt(), isEmpty);
    return this;
  }

  checkFloskelTxtEmpty(isEmpty) {
    pageBase.checkElementEmpty(this.elements.floskelTxt(), isEmpty);
    return this;
  }

  checkKurzadresseTxtEmpty(isEmpty) {
    pageBase.checkElementEmpty(this.elements.kurzadresseTxt(), isEmpty);
    return this;
  }
}

export default AdressenPageBase;
