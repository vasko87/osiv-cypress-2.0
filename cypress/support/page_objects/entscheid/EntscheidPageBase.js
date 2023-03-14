import pageBase from "../../base/PageBase";

class EntscheidPageBase {
  constructor(baseCSS) {
    this.elements = {
      leistungsgruppeDropdown: () => cy.get(baseCSS).find("[akid$='-leistungsgruppe']"),
      leistungscodeDropdown  : () => cy.get(baseCSS).find("[akid$='-leistungtext']"),
      gesuchDropdown         : () => cy.get(baseCSS).find("[akid$='-gesuchtext']"),
      ereignisDropdown       : () => cy.get(baseCSS).find("[akid$='-ereignistext']"),
      bereichDropdown        : () => cy.get(baseCSS).find("[akid$='-bereich']"),
      bearbeiterDropdown     : () => cy.get(baseCSS).find("[akid$='-bearbeiter']"),
      arbeitslistevalueTxt   : () => cy.get(baseCSS).find("[akid$='-arbeitslistevalue'] input"),

      entscheidDropdown   : () => cy.get(baseCSS).find("[akid$='-entscheidvalue']"),
      supertextDropdown   : () => cy.get(baseCSS).find("[akid$='-supertextbez']"),
      entscheidtypDropdown: () => cy.get(baseCSS).find("[akid$='-entscheidtypbez']"),
      gebrechenDropdown   : () => cy.get(baseCSS).find("[akid$='-gebrechen']"),
      funktausfallDropdown: () => cy.get(baseCSS).find("[akid$='-funktausfall']"),
      beginnDate          : () => cy.get(baseCSS).find("[akid$='-beginn_dat'] input")
    };
  }

  selectLeistungsgruppeDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.leistungsgruppeDropdown(), value);
    return this;
  }

  checkLeistungsgruppeDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.leistungsgruppeDropdown(), value);
    return this;
  }

  selectLeistungscodeDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.leistungscodeDropdown(), value);
    return this;
  }

  checkLeistungscodeDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.leistungscodeDropdown(), value);
    return this;
  }

  checkGesuchDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.gesuchDropdown(), value);
    return this;
  }

  checkEreignisDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.ereignisDropdown(), value);
    return this;
  }

  checkBereichDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.bereichDropdown(), value);
    return this;
  }

  checkBearbeiterDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.bearbeiterDropdown(), value);
    return this;
  }

  checkBearbeiterDropdownReadonlyValue(value) {
    pageBase.checkReadonlyDropdownContainsValue(this.elements.bearbeiterDropdown(), value);
    return this;
  }

  checkArbeitslistevalueTxt(value) {
    this.elements.arbeitslistevalueTxt().should("have.value", value);
    return this;
  }

  selectEntscheidDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.entscheidDropdown(), value);
    return this;
  }

  checkEntscheidDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.entscheidDropdown(), value);
    return this;
  }

  checkEntscheidDropdownReadonly(isReadonly) {
    pageBase.checkElementReadonly(this.elements.entscheidDropdown(), isReadonly);
    return this;
  }

  selectSupertextDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.supertextDropdown(), value);
    return this;
  }

  checkSupertextDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.supertextDropdown(), value);
    return this;
  }

  checkSupertextDropdownReadonly(isReadonly) {
    pageBase.checkElementReadonly(this.elements.supertextDropdown(), isReadonly);
    return this;
  }

  selectEntscheidtypDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.entscheidtypDropdown(), value);
    return this;
  }

  checkEntscheidtypDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.entscheidtypDropdown(), value);
    return this;
  }
  checkEntscheidTypDropdownReadonly(isReadonly) {
    pageBase.checkElementReadonly(this.elements.entscheidtypDropdown(), isReadonly);
    return this;
  }

  selectGebrechenDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.gebrechenDropdown(), value);
    return this;
  }

  checkGebrechenDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.gebrechenDropdown(), value);
    return this;
  }

  selectFunktausfallDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.funktausfallDropdown(), value);
    return this;
  }

  checkFunktausfallDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.funktausfallDropdown(), value);
    return this;
  }

  setBeginnDate(date) {
    this.elements.beginnDate().should("be.enabled").click().type(date);
    return this;
  }

  checkBeginnDate(value) {
    this.elements.beginnDate().should("have.value", value);
    return this;
  }

}

export default EntscheidPageBase;
