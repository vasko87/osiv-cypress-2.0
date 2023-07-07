import GridBase from "../../../../../base/GridBase";

class DossierBeilagenGrid extends GridBase {
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

  setAllCheckboxesWithTypAndAdresseChecked(typ, addresse, isChecked) {
    cy.xpath(`${this.gridWrapperXpath}//td[contains(text(),'${typ}')]/../td[contains(text(),'${addresse}')]/../td[@excell='ch']`).each(($td) => {
      if (isChecked === true) {
        console.log("PRE");
        console.log($td.prop("chstate"));
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

  clickFirstRowWithTextsToSelectIt(text1, text2) {
    cy.xpath(`${this.gridWrapperXpath}//td[contains(text(),'${text1}')]/../td[contains(text(),'${text2}')]`).first().click();
  }
}

export default DossierBeilagenGrid;
