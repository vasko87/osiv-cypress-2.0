import pageBase from "../../base/PageBase";

class ProtocollPageBase {
  constructor(baseCSS) {
    this.elements = {
      typDropdown: () => cy.get(baseCSS).find("[akid$='-protokolltypbez']"),
      ursprungDropdown  : () => cy.get(baseCSS).find("[akid$='-ursprungbez']"),
      ursprungTxt  : () => cy.get(baseCSS).find("[akid$='-ursprung'] input"),
      ursprungTextTxt  : () => cy.get(baseCSS).find("[akid$='-ursprungtext'] input"),
      eingliederungDropdown  : () => cy.get(baseCSS).find("[akid$='-eingliederungbez']"),
      entscheidDropdown  : () => cy.get(baseCSS).find("[akid$='-entscheidbez']"),
      ereignisDropdown  : () => cy.get(baseCSS).find("[akid$='-ereignisbez']"),
      gesuchDropdown  : () => cy.get(baseCSS).find("[akid$='-gesuchbez']"),
      sendungDropdown  : () => cy.get(baseCSS).find("[akid$='-sendungbez']"),
      versicherTxt  : () => cy.get(baseCSS).find("[akid$='-versichertenname'] input")
    };
  }
  selectTypDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.typDropdown(), value);
    return this;
  }

  checkTypDropdown(value) {
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

  checkEntscheidDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.entscheidDropdown(), value);
    return this;
  }

  checkEingliederungDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.eingliederungDropdown(), value);
    return this;
  }

  checkEreignisDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.ereignisDropdown(), value);
    return this;
  }

  checkGesuchDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.gesuchDropdown(), value);
    return this;
  }

  checkSendungDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.sendungDropdown(), value);
    return this;
  }

  checkVersicherTxt(value) {
    this.elements.versicherTxt().should("be.visible").should("have.value", value);
    return this;
  }

  checkUrsprungTxt(value) {
    this.elements.ursprungTxt().should("be.visible").should("have.value", value);
    return this;
  }

  checkUrsprungTextTxt(value) {
    this.elements.ursprungTextTxt().should("be.visible").should("have.value", value);
    return this;
  }
}

export default ProtocollPageBase;
