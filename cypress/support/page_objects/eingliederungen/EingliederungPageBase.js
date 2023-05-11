import pageBase from "../../base/PageBase";

class EingliederungPageBase {
  constructor(baseCSS) {
    this.elements = {
      gesuchDropdown: () => cy.get(baseCSS).find("[akid$='-gesuchdynselect']"),
      ereignisDropdown: () => cy.get(baseCSS).find("[akid$='-ereignisdynselect']"),
      auftragDropdown  : () => cy.get(baseCSS).find("[akid$='-auftragsart']"),
      auftragAnDropdown        : () => cy.get(baseCSS).find("[akid$='-berufberaterdynselect']"),
      meldungTextarea     : () => cy.get(baseCSS).find("[akid$='-MeldungText']"),
      arbeitslisteTxt     : () => cy.get(baseCSS).find("[akid$='-arbeitslistebez']"),
      totalTxt     : () => cy.get(baseCSS).find("[akid$='-total_gespraeche']")
    };
  }

  selectGesuchDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.gesuchDropdown(), value);
    return this;
  }

  selectGesuchDropdownByIndex(index) {
    this.elements.gesuchDropdown().should("be.visible");
    pageBase.selectDropdownValueByIndex(this.elements.gesuchDropdown(), index);
    return this;
  }

  checkGesuchDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.gesuchDropdown(), value);
    return this;
  }

  getGesuchDropdownSelectedValue() {
    return pageBase.getDropdownSelectedValue(this.elements.gesuchDropdown());
  }

  selectEreignisDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.ereignisDropdown(), value);
    return this;
  }

  selectEreignisDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.ereignisDropdown(), index);
    return this;
  }

  checkEreignisDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.ereignisDropdown(), value);
    return this;
  }

  checkEreignisDropdownContains(value, shouldContain) {
    pageBase.checkDropdownSelectedValueContains(this.elements.ereignisDropdown(), value, shouldContain);
    return this;
  }

  getEreignisDropdownSelectedValue() {
    return pageBase.getDropdownSelectedValue(this.elements.ereignisDropdown());
  }

  selectAuftragDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.auftragDropdown(), value);
    return this;
  }

  selectAuftragDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.auftragDropdown(), index);
    return this;
  }

  checkAuftragDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.auftragDropdown(), value);
    return this;
  }

  getAuftragDropdownSelectedValue() {
    return pageBase.getDropdownSelectedValue(this.elements.auftragDropdown());
  }

  selectAuftragAnDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.auftragAnDropdown(), value);
    return this;
  }

  selectAuftragAnDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.auftragAnDropdown(), index);
    return this;
  }

  checkAuftragAnDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.auftragAnDropdown(), value);
    return this;
  }

  getAuftragAnDropdownSelectedValue() {
    return pageBase.getDropdownSelectedValue(this.elements.auftragAnDropdown());
  }

  setMeldungTextarea(value) {
    this.elements.meldungTextarea().type(value);
    return this;
  }

  clearMeldungTextarea() {
    this.elements.meldungTextarea().clear();
    return this;
  }

  checkMeldungTextarea(value) {
    this.elements.meldungTextarea().should("have.value", value);
    return this;
  }

  getMeldungTextarea() {
    return this.elements.meldungTextarea();
  }

  checkArbeitslisteTxt(value) {
    this.elements.arbeitslisteTxt().should("have.value", value);
    return this;
  }

  checkTotalTxt(value) {
    this.elements.totalTxt().should("have.value", value);
    return this;
  }

  checkTotalTxtEmpty(isEmpty) {
    pageBase.checkElementEmpty(this.elements.totalTxt(), isEmpty);
    return this;
  }

}

export default EingliederungPageBase;
