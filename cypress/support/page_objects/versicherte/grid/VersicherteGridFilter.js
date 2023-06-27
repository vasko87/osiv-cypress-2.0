import pageBase from "../../../base/PageBase";
import constants from "../../../helpers/Constants";

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
    cy.wait(1000);
    this.elements.versicherteNameTxt().should("be.visible").click().clear().type(`${value}`);
    cy.wait(constants.MIN_TIMEOUT);
    this.elements.versicherteNameTxt().type(`{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }

}

export default VersicherteGridFilter;
