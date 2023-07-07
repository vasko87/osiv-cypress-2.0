import GridBase from "../../../../../base/GridBase";

class OrdnerDocumentViewerGrid extends GridBase {
  constructor(css) {
    super(css);
    super.elements = {
      ...this.elements

    };
  }

  /**
   * Waits for the Grid view is loaded, by checkin the grid selected row is visible
   * @returns {DossierBeilagenGrid}
   */
  waitGridViewLoaded() {
    super.waitGridViewLoaded();
    return this;
  }

  setCheckboxesOfSoftDeletedRowsSelected(isChecked) {
    cy.xpath(`${this.gridWrapperXpath}//img[contains(@src,'SK_BeschwK')]/../../../..//td[@excell='ch']`).each(($td) => {
      if (isChecked === true) {
        if ($td.prop("chstate") === "0") {
          $td.find("div").click();
        }
      }
      if (isChecked === false) {
        if ($td.prop("chstate") === "1") {
          $td.find("div").click();
        }
      }
    });
  }

  checkCheckboxOfSoftDeletedRowsSelected(isChecked) {
    cy.xpath(`${this.gridWrapperXpath}//td[contains(src,'SK_BeschwK')]/../td[@excell='ch']`).each(($td) => {
      if (isChecked === true) {
        expect($td.prop("chstate")).to.be.eq("1");
      } else {
        expect($td.prop("chstate")).to.be.eq("0");
      }
    });
  }
}

export default OrdnerDocumentViewerGrid;
