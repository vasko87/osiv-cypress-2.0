import pageBase from "./PageBase";

class GridBase {
  constructor(baseCSS) {
    this.elements = {
      gridWrapper    : () => cy.get(baseCSS),
      rowSelected    : () => this.elements.gridWrapper().find("tr[class*='_material rowselected']"),
      table    : () => this.elements.gridWrapper().find("table"),
      rowElementsList: () => this.elements.gridWrapper().find("[class='objbox'] tr[class*=material]")
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

    cy.log("Get GRID data");
    return this.elements.gridWrapper().then((gridWrapper) => {
      gridWrapper.find("[class='xhdr'] table tr:nth-child(2) td")
                 .each((i, el) => {
                   columnsList.push(el.getAttribute("title"));
                 });

      // gridWrapper.find("[class='objbox'] table tr[class*='material']")
      //            .each((i, tr) => {
      //              const row = {};
      //              cy.$$(tr).find("td").each((i, td) => {
      //                row[columnsList[i] || "unknown"] = td.textContent;
      //              });
      //
      //              finalGridDataList.push(row);
      //            });

      gridWrapper.find("[class='objbox'] table tr[class*='material']")
                 .each((i, tr) => {
                   const row = {};
                   cy.$$(tr).find("td").each((i, td) => {
                     if (td.hasAttribute("excell")) {
                       if (td.chstate === "1") {
                         row[columnsList[i] || "unknown"] = true;
                       } else {
                         row[columnsList[i] || "unknown"] = false;
                       }
                     } else {
                       row[columnsList[i] || "unknown"] = td.textContent;
                     }
                   });
                   finalGridDataList.push(row);
                 });

      console.log(finalGridDataList);

      return finalGridDataList;
    });
  }

  /**
   * Returns all values from the column of the grid
   * @param {String} columnName
   * @returns {Cypress.Chainable<JQuery<*[] extends ArrayLike<infer T> ? T : never>>}
   */
  getAllColumnValues(columnName) {
    const colValues = [];
    return this.getGridData().then((gridData) => {
      gridData.forEach((row) => {
        colValues.push(row[`${columnName}`]);
      });
      cy.log(`GET all values of Grid column [${columnName}]: [${colValues}]`);
      console.log(colValues);
      return colValues;
    });
  }

  /**
   * Waits for the Grid view is loaded, by checkin the grid selected row is visible
   * @returns {GridBase}
   */
  waitGridViewLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.rowSelected().should("be.visible");
    return this;
  }

  waitGridWrapperLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.gridWrapper().should("be.visible");
    return this;
  }

  /**
   * dblclick() on the row @value
   * @param value
   * @returns {GridBase}
   */
  dblClickRowValue(value) {
    cy.log(`Double click on row with name [${value}]`);
    this.elements.rowElementsList()
        .contains(value)
        .should("be.visible")
        .dblclick();
    return this;
  }

  dblClickRowNumber(rowNumber) {
    cy.log(`Double click on row number [${rowNumber}]`);
    this.elements.rowElementsList()
        .eq(rowNumber - 1).should("be.visible")
        .find("td").eq(0).dblclick();
    return this;
  }

  clickRowNumber(rowNumber) {
    cy.log(`click on row number [${rowNumber}]`);
    this.elements.rowElementsList()
        .eq(rowNumber - 1).should("be.visible").click();
    return this;
  }

  clickRowWithTextToSelectIt(text) {
    cy.log(`click on row with text [${text}] to select it`);
    this.elements.gridWrapper().find("tbody").contains("td", text).click();
    return this;
  }

  dblClickRowWithText(text) {
    cy.log(`Double click on row with text [${text}]`);
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
      cy.log(`Checking value [${value}] exists in Grid`);
      this.elements.gridWrapper().contains(value).should("exist");
    } else {
      cy.log(`Checking value [${value}] not exists in Grid`);
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

  /**
   * Check the count of grid rows
   * @param {int} count
   * @returns {GridBase}
   */
  checkGridRowsCount(count) {
    cy.log(`Checking Grid rows count is [${count}]`);
    if (count !== 0) {
      this.elements.gridWrapper().find("tr[class*='material']").should("have.length", count);
    } else {
      this.elements.gridWrapper().find("tr[class*='material']").should("not.exist");
    }
    return this;
  }

}

export default GridBase;
