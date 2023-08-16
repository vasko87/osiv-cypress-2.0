import GridBase from "../../../../base/GridBase";
import constants from "../../../../helpers/Constants";
import pageBase from "../../../../base/PageBase";

class DossierChronikTab {
  constructor() {
    this.dossierHistoryGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='sStamm_Doss_HistGrid']`);
    this.dossierAbgabeGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='DossierAbgabeGrid']`);
    this.elements = {
      dossierChronikTab : () => cy.get("[akid='StammDossierChronikTabbar-Dossier-Chronik']"),
      dossierAbgabeTab  : () => cy.get("[akid='StammDossierChronikTabbar-Dossier-Abgabe']")
    };

    this.dossierChronikDetailForm = {
      dossierEreignisTxt : () => cy.get("[akid='DossierChronikDetailForm-stammereignis'] input"),
      iVStelleDropdown : () => cy.get("[akid='DossierChronikDetailForm-stammivstelle']"),
      datumnAmDate : () => cy.get("[akid='DossierChronikDetailForm-ereignis_dat'] input"),

      waitForLoaded() {
        this.dossierEreignisTxt().should("be.visible");
        return this;
      },

      checkDossierEreignisTxtDisabled(isDisabled) {
        pageBase.checkElementReadonly(this.dossierEreignisTxt(), isDisabled);
        return this;
      },

      checkDossierEreignisTxtEmpty(isEmpty) {
        pageBase.checkElementEmpty(this.dossierEreignisTxt(), isEmpty);
        return this;
      },

      checkDossierEreignisTxt(value) {
        this.dossierEreignisTxt().should("have.value", value);
        return this;
      },

      checkIVStelleDropdownDisabled(isDisabled) {
        pageBase.checkDropdownReadonly(this.iVStelleDropdown(), isDisabled);
        return this;
      },

      checkIVStelleDropdownEmpty(isEmpty) {
        pageBase.checkReadonlyDropdownEmpty(this.iVStelleDropdown(), isEmpty);
        return this;
      },

      checkIVStelleDropdown(value) {
        pageBase.checkDropdownSelectedValue(this.iVStelleDropdown(), value);
        return this;
      },

      checkDatumnAmDateDisabled(isDisabled) {
        pageBase.checkElementReadonly(this.datumnAmDate(), isDisabled);
        return this;
      },

      checkDatumnAmDateEmpty(isEmpty) {
        pageBase.checkElementEmpty(this.datumnAmDate(), isEmpty);
        return this;
      },

      checkDatumnAmDate(value) {
        this.datumnAmDate().should("have.value", value);
        return this;
      },

      checkDatumnAmDateIsNot(value) {
        this.datumnAmDate().should("not.have.value", value);
        return this;
      },

      setDatumnAmDate(value) {
        this.datumnAmDate().should("be.visible").clear().type(value);
        return this;
      }
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
  }

  clickDossierChronikTab() {
    this.elements.dossierChronikTab().should("be.visible").click();
    return this;
  }

  clickDossierAbgabeTab() {
    this.elements.dossierAbgabeTab().should("be.visible").click();
    return this;
  }
}

export default DossierChronikTab;
