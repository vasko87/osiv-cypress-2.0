import pageBase from "../../base/PageBase";

class ZuordnungPage {
  constructor() {
    this.elements = {
      versichertenNrDropdown  : () => cy.get("[akid='PosteingangZuordnenOverviewForm-versichertennrdynselect']"),
      abklarungDropdown  : () => cy.get("[akid='PosteingangZuordnenOverviewForm-abklarungdynselect']"),
      dokumenttitleTxt: () => cy.get("[akid='PosteingangZuordnenOverviewForm-doktitle']"),

      zuordnenBtn: () => cy.get("[class='dhxtoolbar_text']").contains("Zuordnen"),
      zuordnenUndAbschliessenBtn: () => cy.get("[class='dhxtoolbar_text']").contains("Zuordnen und Abschliessen")
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

  clickZuordnenUndAbschliessen() {
    this.elements.zuordnenUndAbschliessenBtn().should("be.visible").click();
    return this;
  }
}
export default ZuordnungPage;
