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

  /**
   * Checks @element readonly
   * - set @isReadonly = true if @element expected to be readonly
   * - set @isReadonly = false if @element expected to NOT be readonly
   *
   * @param element
   * @param isReadonly
   */
  checkElementReadOnly(element, isReadonly) {
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
}

export default PageBase;
