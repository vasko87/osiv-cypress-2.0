import PageBase from "./../../base/PageBase";

class AdressenPageBase extends PageBase {

  constructor(baseCSS) {
    super();
    super.elements = {
      adressTypeDropdown : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-adresstyp']"),
      spracheDropdown    : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-sprache_bez']"),
      anredeartDropdown  : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-anredeartbez']"),
      titelDropdown      : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-titel_adresstitel']"),
      nameTxt            : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-nachname'] input"),
      vornameTxt         : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-vorname'] input"),
      plzDropdown        : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-postleitzahl']"),
      anschriftTxt       : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-anschrift']"),
      floskelTxt         : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-floskel']"),
      kurzadresseTxt     : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-kurzadresse']"),
      generierenBtn      : () => cy.get(baseCSS).find("[akid='sAdresseDetailOverviewForm-but_kurzadresse_anpassen']")
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
