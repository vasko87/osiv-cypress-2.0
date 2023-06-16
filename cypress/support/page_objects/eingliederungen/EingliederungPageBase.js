import pageBase from "../../base/PageBase";

class EingliederungPageBase {
  constructor(baseCSS) {
    this.elements = {
      gesuchDropdown: () => cy.get(baseCSS).find("[akid$='-gesuchdynselect']"),
      erstgesprachTxt: () => cy.get(baseCSS).find("[akid$='-erstgespraech_dat'] input"),
      ereignisTxt: () => cy.get(baseCSS).find("[akid$='-ereignistext']"),
      ereignisDropdown: () => cy.get(baseCSS).find("[akid$='-ereignisdynselect']"),
      auftragVonDropdown  : () => cy.get(baseCSS).find("[akid$='-sachbearbeiter']"),
      auftragDropdown  : () => cy.get(baseCSS).find("[akid$='-auftragsart']"),
      auftragAnDropdown        : () => cy.get(baseCSS).find("[akid$='-berufberaterdynselect']"),
      meldungTextarea     : () => cy.get(baseCSS).find("[akid$='-MeldungText']"),
      arbeitslisteTxt     : () => cy.get(baseCSS).find("[akid$='-arbeitslistebez'] input"),
      totalTxt     : () => cy.get(baseCSS).find("[akid$='-total_gespraeche'] input"),
      delegationAnTxt     : () => cy.get(baseCSS).find("[akid$='-delegationanbez'] input"),
      ansprechpartnerTxt     : () => cy.get(baseCSS).find("[akid$='-ansprech_delegation'] input"),
      tetlefonnumberTxt     : () => cy.get(baseCSS).find("[akid$='-telefon'] input"),
      notizenTextarea     : () => cy.get(baseCSS).find("[akid$='-bem'] textarea")
    };
  }

  selectGesuchDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.gesuchDropdown(), value);
    return this;
  }

  selectGesuchDropdownByIndex(index) {
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

  selectAuftragVonDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.auftragVonDropdown(), value);
    return this;
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

  checkErstgesprachTxt(value) {
    this.elements.erstgesprachTxt().should("have.value", value);
    return this;
  }

  checkErstgesprachTxtEmpty() {
    this.elements.erstgesprachTxt().should("be.empty");
    return this;
  }

  checkDelegationAnTxt(value) {
    this.elements.delegationAnTxt().should("have.value", value);
    return this;
  }

  checkAnsprechpartnerTxt(value) {
    this.elements.ansprechpartnerTxt().should("have.value", value);
    return this;
  }

  checkTetlefonnumberTxt(value) {
    this.elements.tetlefonnumberTxt().should("have.value", value);
    return this;
  }

  checkNotizenTexareaContains(value) {
    this.elements.notizenTextarea().should("contain.value", value);
    return this;
  }

}

export default EingliederungPageBase;
