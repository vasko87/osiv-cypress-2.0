class PageBase {
  /**
   * Clicks on @element dropdown;
   * Selects value which contains @value parameter
   * @param element
   * @param value
   * @returns {PageBase}
   */
  selectInDropdownContains(element, value) {
    element.click("top").get("[class='select2-results__options']").contains(value).click();
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

  checkElementVisible(element, isVisible) {
    if (isVisible === true) {
      element.should("be.visible");
    } else {
      element.should("not.be.visible");
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
  checkElementReadonly(element, isReadonly) {
    if (isReadonly === true) {
      element.parent().should("have.class", "akReadOnlyDynselect");
    } else {
      element.parent().should("not.have.class", "akReadOnlyDynselect");
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
      errorMsg : "Element is not visible",
      timeout  : 100000
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
  checkElementColor(element, color, shouldHave) {
    if (shouldHave) {
      element.should("have.css", "border-left-color", color);
    } else {
      element.should("not.have.css", "border-left-color", color);
    }
    return this;
  }

  checkMsgOnThePage(msg, isExist) {
    if (isExist) {
      cy.contains(msg).should("exist");
    } else {
      cy.contains(msg).should("not.exist");
    }
    return this;
  }
}

export default PageBase;
