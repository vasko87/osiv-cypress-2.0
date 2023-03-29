class GridBase {
  constructor(baseCSS) {
    this.elements = {
      grid       : () => cy.get(baseCSS),
      gridWrapper: () => cy.get(baseCSS),
      rowSelected: () => this.elements.gridWrapper().find("tr[class=' ev_material rowselected']")
    };
  }

  /**
   * Get Full grid data in the following format: [{…}, {…}, {…}]
   * template: [{column1Name: 'value1', column2Name: 'value2', ...}, {…}, {…}]
   * example:
   * [ {Sortierung: ' 1', Gesperrt: '', Kurzadresse: 'Schaeppi Grundstücke per Adresse: Stamm Immobilien AG, Holbeinstrasse 75, 4002 Basel', Adresstyp: '560', Kosten: '', …}
   *   {Sortierung: ' 1', Gesperrt: '', Kurzadresse: 'Basler Orthopädie René Ruepp AG, Austrasse 109, 4051 Basel', Adresstyp: '300', Kosten: '', …}
   *   {Sortierung: ' 1', Gesperrt: '', Kurzadresse: 'Ergotherapie Rheinfelden, Petra Leisinger-Burns, Thermenstrasse 11, 4310 Rheinfelden', Adresstyp: '400', Kosten: '', …}
   * ]
   * see example of usage in test C39770_EntscheidCopy.js
   * @returns {Cypress.Chainable<JQuery<*[] extends ArrayLike<infer T> ? T : never>>}
   */
  getGridData() {
    const columnsList = [];
    const finalGridDataList = [];

    return this.elements.gridWrapper().then((gridWrapper) => {
      gridWrapper.find("[class='xhdr'] table tr:nth-child(2) td")
                 .each((i, el) => {
                   columnsList.push(el.getAttribute("title"));
                 });

      gridWrapper.find("[class='objbox'] table tr[class*='material']")
                 .each((i, tr) => {
                   const row = {};
                   cy.$$(tr).find("td").each((i, td) => {
                     row[columnsList[i] || "unknown"] = td.textContent;
                   });

                   finalGridDataList.push(row);
                 });

      console.log(finalGridDataList);

      return finalGridDataList;
    });
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
