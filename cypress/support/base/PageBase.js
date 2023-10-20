import constants from "../helpers/Constants";

class PageBase {
  /**
   * Clicks on @element dropdown;
   * Selects value which contains @value parameter
   * @param element
   * @param {string} value
   * @returns {PageBase}
   */
  selectInDropdownContains(element, value) {
    element.find("[class='select2-selection__arrow']").click();
    element.get("[class='select2-results__options']", {timeout: constants.DEFAULT_TIMEOUT})
           .contains(value)
           .click();
    return this;
  }

  selectInDropdownExect(element, value) {
    element.find("[class='select2-selection__arrow']").click();
    element.xpath(`//*[@class='select2-results__options']//*[normalize-space(text())='${value}']`,
      {timeout: constants.DEFAULT_TIMEOUT}).click();
    return this;
  }

  selectInDropdownByTyping(element, value) {
    element.find("[class='select2-selection__arrow']").click();
    cy.get("[class='select2-search select2-search--dropdown'] input[class='select2-search__field']").type(value);
    cy.wait(constants.MIN_TIMEOUT / 2);
    element.get("[class='select2-results__options']", {timeout: constants.DEFAULT_TIMEOUT})
           .contains(value)
           .click();
    return this;
  }

  /**
   * Clicks on @element dropdown;
   * Selects value whith specified @index parameter
   *
   * @param element
   * @param {int} index
   * @returns {PageBase}
   */
  selectDropdownValueByIndex(element, index) {
    element.find("[class='select2-selection__arrow']").click();
    element.get("[class='select2-results__options']", {timeout: constants.DEFAULT_TIMEOUT})
           .eq(index - 1)
           .click();
    return this;
  }

  /**
   * Verifies the option value selected in Dropdown
   *
   * @param element
   * @param selectedValue
   * @returns {PageBase}
   */
  checkDropdownSelectedValue(element, selectedValue) {
    element.find("[class='select2-selection__rendered']").should("have.text", selectedValue);
    return this;
  }

  checkDropdownSelectedValueContains(element, value, shouldContain) {
    if (shouldContain) {
      element.find("option").should("contain.text", value);
    } else {
      element.find("option").should("not.contain.text", value);
    }
    return this;
  }

  checkDropdownEmpty(element, isEmpty) {
    if (isEmpty) {
      element.find("select").should("be.visible").find("option").should("be.empty");
    } else {
      element.find("select").should("be.visible").find("option").should("not.be.empty");
    }

    return this;
  }

  clearDropdown(element) {
    try {
      element.find("[class='select2-selection__clear']").click();
    } catch (e) {
    }
    return this;
  }

  getDropdownCodesList(element) {
    element.find("[class='select2-selection__arrow']").click();
    return cy.get("[class='select2-results__options']").should("be.visible").then((el) => {
      const actualValues = [];
      cy.$$(el).find("[class='searchItem'] [class='grid2Search1']").each((i, elVal) => {
        actualValues.push(elVal.innerText);
      });

      return actualValues;
    });
  }

  getDropdownValuesList(element) {
    element.find("[class='select2-selection__arrow']").click();
    return cy.get("[class='select2-results__options']").should("be.visible").then((el) => {
      const actualValues = [];
      cy.$$(el).find("[class='searchItem'] [class='grid2Search2']").each((i, elVal) => {
        actualValues.push(elVal.innerText);
      });

      return actualValues;
    });
  }

  getDropdownCodeValuesList(element) {
    element.find("[class='select2-selection__arrow']").click();
    return cy.get("[class='select2-results__options']").should("be.visible").then((el) => {
      const map = {};
      const actualCodes = [];
      const actualValues = [];
      cy.$$(el).find("[class='searchItem'] [class='grid2Search1']").each((i, elCode) => {
        actualCodes.push(elCode.innerText);
      });
      cy.$$(el).find("[class='searchItem'] [class='grid2Search2']").each((i, elVal) => {
        actualValues.push(elVal.innerText);
      });
      map.codes = actualCodes;
      map.values = actualValues;

      return map;
    });
  }

  checkDropdownValuesList(element, expectedValues) {
    this.getDropdownValuesList(element).then((actualValues) => {
      expect(JSON.stringify(actualValues)).to.be.eql(JSON.stringify(expectedValues));
    });
    return this;
  }

  checkDropdownCodeList(element, expectedValues) {
    this.getDropdownCodesList(element).then((actualValues) => {
      expect(JSON.stringify(actualValues)).to.be.eql(JSON.stringify(expectedValues));
    });
    return this;
  }

  checkDropdownCodeValueList(element, expectedCodes, expectedValues) {
    this.getDropdownCodeValuesList(element).then((actual) => {
      expect(JSON.stringify(actual.codes)).to.be.eql(JSON.stringify(expectedCodes));
      expect(JSON.stringify(actual.values)).to.be.eql(JSON.stringify(expectedValues));
    });
    return this;
  }

  getDropdownSelectedValue(element) {
    return element.find("select").should("be.visible");
  }

  checkDropdownContainsValue(element, selectedValue) {
    element.find("option").should("contain.text", selectedValue);
    return this;
  }

  checkReadonlyDropdownSelectedValue(element, selectedValue) {
    element.find("input[readonly='true']").should("have.value", selectedValue);
    return this;
  }

  checkReadonlyDropdownContainsValue(element, selectedValue) {
    element.find("input[readonly='true']").should("contains.value", selectedValue);
    return this;
  }

  /**
   *
   * @param element {String} - css of element
   * @returns {boolean}
   */
  isElementVisible(element) {
    cy.xpath("//body[@id='main']").then((body) => {
      return body.find(element).length > 0;
    });
  }

  /**
   *
   * @param {Cypress.Chainable<JQuery<HTMLElement>>} element
   * @param {string} validationError
   * @param {boolean} isVisible
   */
  checkElementValidationError(element, validationError, isVisible) {
    if (isVisible) {
      element.find("[class='validation-error-smartmessage']").should("contain.text", validationError);
    } else {
      element.find("[class='validation-error-smartmessage']").should("not.contain.text", validationError);
    }
  }

  checkElementMandatory(element, isMandatory) {
    if (isMandatory) {
      element.should("have.class", "akMandatory");
    } else {
      element.should("not.have.class", "akMandatory");
    }
  }

  checkElementVisible(element, isVisible) {
    if (isVisible === true) {
      element.should("be.visible");
    } else {
      element.should("not.be.visible");
    }
  }

  checkElementExists(element, isExist) {
    if (isExist === true) {
      element.should("exist");
    } else {
      element.should("not.exist");
    }
  }

  /**
   * Checks if element checked or not. Actual for Checkboxes and Radio buttons
   * @param element
   * @param isChecked
   */
  checkCheckboxChecked(element, isChecked) {
    if (isChecked === true) {
      element.find("input").should("have.value", "true");
    } else {
      element.find("input").should("not.have.value", "true");
    }
  }

  setCheckboxChecked(element, shouldCheck) {
    element.should("be.visible");
    if (shouldCheck === true) {
      element.then((el) => {
        if (!(el.find("input").val() === "true")) {
          cy.wrap(el).click();
        }
      });
    }
    if (shouldCheck === false) {
      element.then((el) => {
        if (el.find("input").val() === "true") {
          cy.wrap(el).click();
        }
      });
    }
  }

  /**
   * Checks @element readonly
   * - set @isReadonly = true if @element expected to be readonly
   * - set @isReadonly = false if @element expected to NOT be readonly
   *
   * @param element
   * @param isReadonly
   */
  checkDropdownReadonly(element, isReadonly) {
    if (isReadonly === true) {
      element.parent().should("have.class", "akReadOnlyDynselect");
    } else {
      element.parent().should("not.have.class", "akReadOnlyDynselect");
    }
  }

  checkElementReadonly(element, isReadonly) {
    if (isReadonly === true) {
      element.should("have.attr", "readonly");
    } else {
      element.should("not.have.attr", "readonly");
    }
  }

  checkBtnReadonly(element, isReadonly) {
    if (isReadonly === true) {
      element.should("have.class", "dhx_toolbar_btn dhxtoolbar_btn_dis");
    } else {
      element.should("not.have.class", "dhx_toolbar_btn dhxtoolbar_btn_dis");
    }
  }

  /**
   * Checks @element empty
   * - set @isEmpty = true if @element expected to be empty
   * - set @isEmpty = false if @element expected to NOT be empty
   *
   * @param element
   * @param isReadonly
   */
  checkReadonlyDropdownEmpty(element, isEmpty) {
    if (isEmpty === true) {
      element.find("span[class='select2-selection__placeholder']").should("be.empty");
    } else {
      element.find("span[class='select2-selection__placeholder']").should("not.be.empty");
    }
  }

  checkElementEmpty(element, isEmpty) {
    if (isEmpty === true) {
      element.should("be.empty");
    } else {
      element.should("not.be.empty");
    }
  }

  /**
   * Waits {100 000} until @element becomes visible.
   * @param element
   * @returns {PageBase}
   */
  waitForElementVisible(element) {
    cy.waitUntil(() => element.should("be.visible")), {
      errorMsg: "Element is not visible",
      timeout : 100000
    };
    return this;
  }

  /**
   * Checks @element has @color
   * @param element
   * @param color
   * @param hasColor
   * @returns {PageBase}
   */
  checkElementBorderLeftColor(element, color, shouldHave) {
    if (shouldHave) {
      element.should("have.css", "border-left-color", color, {timeout: 10000});
    } else {
      element.should("not.have.css", "border-left-color", color, {timeout: 10000});
    }
    return this;
  }

  checkElementColor(element, color, shouldHave) {
    if (shouldHave) {
      element.invoke("attr", "style", `color: ${color}`)
             .then(new_element => {
               expect(new_element).to.have.css("color", color);
             });
    } else {
      element.invoke("attr", "style", `color: ${color}`)
             .then(new_element => {
               expect(new_element).not.to.have.css("color", color);
             });
    }
    return this;
  }

  waitForLoadingDisappears() {
    cy.get("[class='dhx_cell_prcircle']", {timeout: constants.LONG_TIMEOUT}).should("not.exist");
    return this;
  }

  executeJS(commandJS) {
    return cy.window().then((win) => {
      return win.eval(commandJS);
    });
  }
}

export default new PageBase();
