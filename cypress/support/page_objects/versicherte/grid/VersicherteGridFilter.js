import pageBase from "../../../base/PageBase";
import constants from "../../../helpers/Constants";

class VersicherteGridFilter {
  constructor() {

    this.elements = {
      versicherteNameTxt : () => cy.get("[akid='sStammQueryB-BRS_Versicherten_Name'] input"),
      versicherteNrTxt : () => cy.get("[akid='sStammQueryB-Stamm_Nr'] input")
    };
  }

  /**
   * Search @value in 'Versicherte Name' field of Grid filter
   * @param value
   * @returns {VersicherteGrid}
   */
  searchByVersicherteName(value) {
    this.elements.versicherteNameTxt().should("be.visible").click().clear().type(`${value}{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }

  searchByVersicherteNr(value) {
    this.elements.versicherteNrTxt().should("be.visible").click().clear().type(`${value}{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }

}

export default VersicherteGridFilter;
