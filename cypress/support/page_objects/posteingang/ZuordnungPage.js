import pageBase from "../../base/PageBase";

class ZuordnungPage {
  constructor() {
    this.bearbeiterWartenFieldsetCss = "[akid='PosteingangZuordnenOverviewForm-bearbeiterwartenfieldset'] [class='fs_legend']";
    this.elements = {
      versichertenNrDropdown: () => cy.get("[akid='PosteingangZuordnenOverviewForm-versichertennrdynselect']"),
      abklarungDropdown     : () => cy.get("[akid='PosteingangZuordnenOverviewForm-abklarungdynselect']"),
      dokumenttitleTxt      : () => cy.get("[akid='PosteingangZuordnenOverviewForm-doktitle']"),

      bearbeiterWartenFieldset: () => cy.get(this.bearbeiterWartenFieldsetCss),
      wartenCheckbox          : () => cy.get("[akid='PosteingangZuordnenOverviewForm-warten']"),

      zuordnenBtn               : () => cy.get("[title='Zuordnen']"),
      zuordnenUndAbschliessenBtn: () => cy.get("[title='Zuordnen und Abschliessen']"),
      speichernBtn              : () => cy.get("[title='Speichern']")
    };
  }

  checkVersichertenNrDropdownContains(value) {
    this.elements.versichertenNrDropdown().find("select").should("be.visible")
        .should("be.enabled");
    pageBase.checkDropdownContainsValue(this.elements.versichertenNrDropdown(), value);
    return this;
  }

  selectAbklarungDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.abklarungDropdown(), value);
    return this;
  }

  selectAbklarungDropdownByIndex(index) {
    this.elements.abklarungDropdown().find("select").should("be.visible")
        .should("be.enabled");
    pageBase.selectDropdownValueByIndex(this.elements.abklarungDropdown(), index);
    return this;
  }

  setDokumenttitleTxt(value) {
    this.elements.dokumenttitleTxt().should("be.visible").click().type(value);
    return this;
  }

  clickZuordnenBtn() {
    this.elements.zuordnenBtn().should("be.visible").click();
    return this;
  }

  checkZuordnenBtnDisabled(isDisabled) {
    pageBase.checkBtnReadonly(this.elements.zuordnenBtn(), isDisabled);
    return this;
  }

  clickZuordnenUndAbschliessen() {
    this.elements.zuordnenUndAbschliessenBtn().should("be.visible").click();
    return this;
  }

  checkZuordnenUndAbschliessenBtnDisabled(isDisabled) {
    pageBase.checkBtnReadonly(this.elements.zuordnenUndAbschliessenBtn(), isDisabled);
    return this;
  }

  clickSpeichernBtn() {
    this.elements.speichernBtn().should("be.visible").click();
    return this;
  }

  expandBearbeiterUndWartenBlock() {
    this.elements.bearbeiterWartenFieldset().click();
    pageBase.waitForLoadingDisappears();
    return this;
  }

  setWartenCheckboxSelected(isSelected) {
    pageBase.setCheckboxChecked(this.elements.wartenCheckbox(), isSelected);
    return this;
  }
}

export default ZuordnungPage;
