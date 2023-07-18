import pageBase from "../../base/PageBase";
import ModalWindowBase from "../../standalone/popup/ModalWindowBase";
import SupertextWahlenPopup from "./detail/popups/SupertextWahlenPopup";
import supertextWahlenPopup from "./detail/popups/SupertextWahlenPopup";

class EntscheidPageBase {
  constructor(baseCSS) {
    this.supertextWahlenPopup = new SupertextWahlenPopup();
    this.elements = {
      leistungsgruppeDropdown: () => cy.get(baseCSS).find("[akid$='-leistungsgruppe']"),
      leistungscodeDropdown  : () => cy.get(baseCSS).find("[akid$='-leistungtext']"),
      gesuchDropdown         : () => cy.get(baseCSS).find("[akid$='-gesuchtext']"),
      ereignisDropdown       : () => cy.get(baseCSS).find("[akid$='-ereignistext']"),
      bereichDropdown        : () => cy.get(baseCSS).find("[akid$='-bereich']"),
      bearbeiterDropdown     : () => cy.get(baseCSS).find("[akid$='-bearbeiter']"),
      arbeitslisteTxt        : () => cy.get(baseCSS).find("[akid$='-arbeitslistevalue'] input"),

      entscheidDropdown         : () => cy.get(baseCSS).find("[akid$='-entscheidvalue']"),
      ablehnungMassnahmeDropdown: () => cy.get(baseCSS).find("[akid$='-ablehnungmassnahmebez']"),
      supertextDropdown         : () => cy.get(baseCSS).find("[akid$='-supertextbez']"),
      entscheidtypDropdown      : () => cy.get(baseCSS).find("[akid$='-entscheidtypbez']"),
      gebrechenDropdown         : () => cy.get(baseCSS).find("[akid$='-gebrechen']"),
      funktausfallDropdown      : () => cy.get(baseCSS).find("[akid$='-funktausfall']"),
      beginnDate                : () => cy.get(baseCSS).find("[akid$='-beginn_dat'] input"),

      notizenTextarea: () => cy.get(baseCSS).find("[akid$='-bem'] textarea")
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
  clearLeistungsgruppeDropdown() {
    pageBase.clearDropdown(this.elements.leistungsgruppeDropdown());
    pageBase.waitForLoadingDisappears();
    return this;
  }

  getLeistungsgruppeDropdownSelectedValue() {
    return pageBase.getDropdownSelectedValue(this.elements.leistungsgruppeDropdown());
  }

  selectLeistungscodeDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.leistungscodeDropdown(), value);
    return this;
  }

  selectLeistungscodeDropdownByTyping(value) {
    pageBase.selectInDropdownByTyping(this.elements.leistungscodeDropdown(), value);
    return this;
  }

  checkLeistungscodeDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.leistungscodeDropdown(), value);
    return this;
  }

  checkLeistungscodeDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.leistungscodeDropdown(), value);
    return this;
  }

  clearLeistungscodeDropdown() {
    pageBase.clearDropdown(this.elements.leistungscodeDropdown());
    pageBase.waitForLoadingDisappears();
    return this;
  }

  checkLeistungscodeDropdownEmpty(isEmpty) {
    pageBase.checkDropdownEmpty(this.elements.leistungscodeDropdown(), isEmpty);
    return this;
  }

  getLeistungscodeDropdownSelectedValue() {
    return pageBase.getDropdownSelectedValue(this.elements.leistungscodeDropdown());
  }

  checkGesuchDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.gesuchDropdown(), value);
    return this;
  }

  getGesuchDropdownSelectedValue() {
    return pageBase.getDropdownSelectedValue(this.elements.gesuchDropdown());
  }

  checkEreignisDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.ereignisDropdown(), value);
    return this;
  }

  getEreignisDropdownSelectedValue() {
    return pageBase.getDropdownSelectedValue(this.elements.ereignisDropdown());
  }

  checkBereichDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.bereichDropdown(), value);
    return this;
  }

  getBereichDropdownSelectedValue() {
    return pageBase.getDropdownSelectedValue(this.elements.bereichDropdown());
  }

  selectBearbeiterDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.bearbeiterDropdown(), value);
    return this;
  }

  selectBearbeiterDropdownByTyping(value) {
    pageBase.selectInDropdownByTyping(this.elements.bearbeiterDropdown(), value);
    return this;
  }

  checkBearbeiterDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.bearbeiterDropdown(), value);
    return this;
  }

  checkBearbeiterDropdownEmpty(isEmpty) {
    pageBase.checkDropdownEmpty(this.elements.bearbeiterDropdown(), isEmpty);
    return this;
  }

  checkBearbeiterReadonlyDropdownEmpty(isEmpty) {
    pageBase.checkElementEmpty(this.elements.bearbeiterDropdown().find("input"), isEmpty);
    return this;
  }

  checkBearbeiterDropdownReadonlyValue(value) {
    pageBase.checkReadonlyDropdownContainsValue(this.elements.bearbeiterDropdown(), value);
    return this;
  }

  checkArbeitslisteTxt(value) {
    this.elements.arbeitslisteTxt().should("have.value", value);
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

  selectAblehnungMassnahmeDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.ablehnungMassnahmeDropdown(), value);
    return this;
  }

  checkAblehnungMassnahmeDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.ablehnungMassnahmeDropdown(), value);
    return this;
  }

  checkAblehnungMassnahmeDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.ablehnungMassnahmeDropdown(), value);
    return this;
  }

  checkAblehnungMassnahmeDropdownEmpty(isEmpty) {
    pageBase.checkDropdownEmpty(this.elements.ablehnungMassnahmeDropdown(), isEmpty);
    return this;
  }

  clearAblehnungMassnahmeDropdown() {
    pageBase.clearDropdown(this.elements.ablehnungMassnahmeDropdown());
    return this;
  }

  checkEntscheidDropdownReadonly(isReadonly) {
    pageBase.checkDropdownReadonly(this.elements.entscheidDropdown(), isReadonly);
    return this;
  }

  selectSupertextDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.supertextDropdown(), value);
    return this;
  }

  lookupSupertextDropdown(value) {
    this.elements.supertextDropdown().find("[class='select2-selection__lookup']").click();
    this.supertextWahlenPopup.waitForLoaded()
        .supertextQueryGrid.waitGridViewLoaded();
    this.supertextWahlenPopup.clearSpracheIDDropdown()
        .clearEntscheidDropdown()
        .clearLeistungsCodeAnzeigenDropdown();
    this.supertextWahlenPopup.clearSupertextNrTxt()
        .setSupertextNrTxt(value);
    this.supertextWahlenPopup.supertextQueryGrid.waitGridViewLoaded();
    this.supertextWahlenPopup.clickBestatigenBtn();
    return this;
  }

  checkSupertextDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.supertextDropdown(), value);
    return this;
  }

  checkSupertextDropdownReadonly(isReadonly) {
    pageBase.checkDropdownReadonly(this.elements.supertextDropdown(), isReadonly);
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
    pageBase.checkDropdownReadonly(this.elements.entscheidtypDropdown(), isReadonly);
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

  setNotizenTextarea(value) {
    this.elements.notizenTextarea().type(value);
    return this;
  }

  clearNotizenTextarea() {
    this.elements.notizenTextarea().clear();
    return this;
  }

  checkNotizenTextarea(value) {
    this.elements.notizenTextarea().should("have.value", value);
    return this;
  }

  getNotizenTextarea() {
    return this.elements.notizenTextarea();
  }

}

export default EntscheidPageBase;
