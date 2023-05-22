import pageBase from "../../../base/PageBase";

class EingliederungGridFilter {
  constructor() {

    this.elements = {
      eingliederungIDTxt : () => cy.get("[akid='EingliederungGrid-Eingliederung_ID'] input")
    };
  }

  /**
   * Search @value in 'Eingliederung ID' field of Grid filter
   * @param value
   * @returns {EingliederungGridFilter}
   */
  searchEingliederungID(value) {
    this.elements.eingliederungIDTxt().click().clear().type(`${value}{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }

}

export default EingliederungGridFilter;
