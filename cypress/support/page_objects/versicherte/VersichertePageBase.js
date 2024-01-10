import pageBase from "../../base/PageBase";
import ZASDatenAbfragenPopup from "./detail/popups/zasDatenAbfragenPopup/ZASDatenAbfragenPopup";
import constants from "../../helpers/Constants";

class VersichertePageBase {
  constructor(baseCSS) {
    this.elements = {
      nameTxt: () => cy.get(baseCSS).find("[akid*='-stamm_nr_nachname'] input"),
      vornameTxt: () => cy.get(baseCSS).find("[akid*='-vorname'] input"),
      geburtsdatumDate: () => cy.get(baseCSS).find("[akid*='-geburtsdatum'] input"),
      geschlechtDropdown: () => cy.get(baseCSS).find("[akid*='-sex_bez']"),
      statusTxt: () => cy.get(baseCSS).find("[akid*='-brs_status'] input"),
      versichertenNrTxt: () => cy.get(baseCSS).find("[akid*='-stamm_nr_stamm_nr'] input"),
      staatDropdown: () => cy.get(baseCSS).find("[akid*='-staat_bez']"),
      alternTxt: () => cy.get(baseCSS).find("[akid*='-alternr'] input"),
      zasCheckbox: () => cy.get(baseCSS).find("[akid*='-zascheckboxvalue']"),
      zasDatenBtn: () => cy.get(baseCSS).find("[akid*='-openzassearch']")
    };
  }

  clickZasDatenBtn() {
    this.elements.zasDatenBtn().click();
    return new ZASDatenAbfragenPopup();
  }

  setNameTxt(date) {
    this.elements.nameTxt().should("be.visible").clear({timeout: 1000}).type(date, {delay: 100});
    return this;
  }

  checkNameTxt(value) {
    this.elements.nameTxt().should("be.visible").should("have.value", value);
    return this;
  }

  setVornameTxt(date) {
    this.elements.vornameTxt().should("be.visible").type(date);
    return this;
  }

  checkVornameTxt(value) {
    this.elements.vornameTxt().should("be.visible").should("have.value", value);
    return this;
  }

  setGeburtsdatumDate(date) {
    this.elements.geburtsdatumDate().should("be.enabled").click().type(date);
    return this;
  }

  checkGeburtsdatumDate(value) {
    this.elements.geburtsdatumDate().should("be.visible").should("have.value", value);
    return this;
  }

  selectGeschlechtDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.geschlechtDropdown(), value);
    return this;
  }

  checkGeschlechtDropdown(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.geschlechtDropdown(), value, true);
    return this;
  }


  checkStatusTxt(value) {
    this.elements.statusTxt().should("be.visible").should("have.value", value);
    return this;
  }

  checkStaatDropdown(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.staatDropdown(), value, true);
    return this;
  }

  checkAlternContainsTxt(value) {
    this.elements.alternTxt().should("be.visible").should("contain.value", value);
    return this;
  }

  setZasCheckboxChecked(shouldCheck) {
    pageBase.setCheckboxChecked(this.elements.zasCheckbox(), shouldCheck);
    cy.wait(constants.MIN_TIMEOUT/2);
    return this;
  }
}

export default VersichertePageBase;
