class GridBase {
  constructor(baseCSS) {
    this.elements = {
      grid: () => cy.get(baseCSS),
      gridWrapper: () => cy.get(baseCSS),
      rowSelected: () => this.elements.gridWrapper().find("tr[class=' ev_material rowselected']")
    };
  }

  /**
   * Waits for the Grid view is loaded, by checkin the grid selected row is visible
   * @returns {GridBase}
   */
  waitGridViewLoaded() {
    this.elements.rowSelected().should("be.visible");
    return this;
  }

  /**
   * dblclick() on the row @value
   * @param value
   * @returns {GridBase}
   */
  dblClickRowValue(value) {
    this.elements.gridWrapper().contains(value).should("be.visible").dblclick();
    return this;
  }

  dblClickRowWithText(text) {
    this.elements.gridWrapper().find("tbody").contains("td", text).dblclick();
    return this;
  }

  /**
   * Verifies that @value exists in the Grid table
   * @param {string|number|RegExp} value
   * @param {boolean} isExist
   * @returns {GridBase}
   */
  checkValueInGridExists(value, isExist) {
    if (isExist) {
      this.elements.gridWrapper().contains(value).should("exist");
    } else {
      this.elements.gridWrapper().contains(value).should("not.exist");
    }
    return this;
  }

  /**
   * Verifies all values of @valueArr are @isExist in Grid table
   * @param valuesArr
   * @param {boolean} isExist
   * @returns {GridBase}
   */
  checkAllValuesInGridExist(valuesArr, isExist) {
    valuesArr.forEach((item) => {
      this.checkValueInGridExists(item, isExist);
    });
    return this;
  }

  checkGridRowCount(count) {
    this.elements.gridWrapper().find("tr[class*='material']").should("have.length", count);
    return this;
  }

}

export default GridBase;
