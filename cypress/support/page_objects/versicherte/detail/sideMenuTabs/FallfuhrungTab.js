import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";
import GridBase from "../../../../base/GridBase";

class FallfuhrungTab {
  constructor() {
    this.grid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='FallfuehrungStammGrid']`);
    this.elements = {
      arbeitslisteDropdown: () => cy.get("[akid='FallfuehrungDetailForm-arbeitslistebez']"),
      beantwortetAmDate: () => cy.get("[akid='FallfuehrungDetailForm-antwort_dat'] input"),
      ffBeginnDate: () => cy.get("[akid='FallfuehrungDetailForm-ff_beginn_dat'] input"),
      ffEndeDate: () => cy.get("[akid='FallfuehrungDetailForm-ff_ende_dat'] input"),
      fallfuehrungDropdown: () => cy.get("[akid='FallfuehrungDetailForm-verantwortungintextbez']"),
      antwortDropdown: () => cy.get("[akid='FallfuehrungDetailForm-antwortcodebez']"),
      empfangerDropdown    : () => cy.get("[akid='FallfuehrungDetailForm-kurzadresse']")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.grid.waitGridWrapperLoaded();
    return this;
  }

  selectArbeitlisteDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.arbeitslisteDropdown(), value);
    return this;
  }
  checkArbeitlisteDropdown(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.arbeitslisteDropdown(), value, true);
    return this;
  }

  setBeantwortetAmDate(value) {
    this.elements.beantwortetAmDate().should("be.visible").type(value);
    return this;
  }

  checkFfBeginnDate(value) {
    this.elements.ffBeginnDate().should("be.visible").should("have.value", value);
    return this;
  }

  setFfBeginnDate(value) {
    this.elements.ffBeginnDate().should("be.visible").type(value);
    return this;
  }

  checkFfEndeDate(value) {
    this.elements.ffEndeDate().should("be.visible").should("have.value", value);
    return this;
  }

  setFfEndeDate(value) {
    this.elements.ffEndeDate().should("be.visible").type(value);
    return this;
  }

  checkBeantwortetAmDate(value) {
    this.elements.beantwortetAmDate().should("be.visible").should("have.value", value);
    return this;
  }

  selectFallfuehrungDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.fallfuehrungDropdown(), value);
    return this;
  }
  checkFallfuehrungDropdown(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.fallfuehrungDropdown(), value, true);
    return this;
  }

  selectAntwortDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.antwortDropdown(), value);
    return this;
  }

  checkAntwortDropdown(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.antwortDropdown(), value, true);
    return this;
  }

  checkEmpfangerDropdown(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.empfangerDropdown(), value, true);
    return this;
  }
}

export default FallfuhrungTab;
