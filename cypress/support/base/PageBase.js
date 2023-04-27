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
    element.click("top").get("[class='select2-results__options']", {timeout: constants.DEFAULT_TIMEOUT}).contains(value).click();
    return this;
  }

  /**
   *
   * @param element
   * @param {int} index
   * @returns {PageBase}
   */
  selectDropdownValueByIndex(element, index) {
    element.click("top").get("[class='select2-results__options']", {timeout: constants.DEFAULT_TIMEOUT}).eq(index - 1).click();
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
    element.find("option").should("have.text", selectedValue);
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

  isElementVisible(element) {
    return element.then(el => {
      if (el.is(":visible")){
        return true;
      } else {
        return  false;
      }
    });
  }

  checkElementVisible(element, isVisible) {
    if (isVisible === true) {
      element.should("be.visible");
    } else {
      element.should("not.be.visible");
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
    if (shouldCheck === true) {
      element.then((el) => {
        if (!(el.find("input").value === "true")){
          element.click();
        }
      });
    }
    if (shouldCheck === false) {
      element.then((el) => {
        if (el.find("input").value === "true"){
          element.click();
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

  /**
   * Checks @element empty
   * - set @isEmpty = true if @element expected to be empty
   * - set @isEmpty = false if @element expected to NOT be empty
   *
   * @param element
   * @param isReadonly
   */
  checkElementEmpty(element, isEmpty) {
    if (isEmpty === true) {
      element.parent().should("be.empty");
    } else {
      element.parent().should("not.be.empty");
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
}

export default new PageBase();
