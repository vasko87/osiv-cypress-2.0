import pageBase from "../../../../base/PageBase";

class BeschwerdeGridFilter {
  constructor() {

    this.elements = {
      beschwerdeIDTxt : () => cy.get("[akid='BeschwerdeDesktopQueryGrid-Beschwerde_ID'] input")
    };
  }

  /**
   * Search @value in 'Beschwerde_ID' field of Grid filter
   * @param value
   * @returns {BeschwerdeGridFilter}
   */
  searchBeschwerdeID(value) {
    this.elements.beschwerdeIDTxt().click().clear().type(`${value}{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default BeschwerdeGridFilter;
