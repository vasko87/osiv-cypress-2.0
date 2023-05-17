import pageBase from "../../../base/PageBase";

class VersicherteGridFilter {
  constructor() {

    this.elements = {
      versicherteNameTxt : () => cy.get("[akid='sStammQueryB-BRS_Versicherten_Name'] input")
    };
  }

  /**
   * Search @value in 'Versicherte Name' field of Grid filter
   * @param value
   * @returns {VersicherteGrid}
   */
  searchByVersicherteName(value) {
    this.elements.versicherteNameTxt().click().type(`${value}{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }

}

export default VersicherteGridFilter;
