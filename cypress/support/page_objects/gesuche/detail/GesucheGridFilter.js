import pageBase from "../../../base/PageBase";

class GesucheGridFilter {
  constructor() {

    this.elements = {
      gesuchIDTxt : () => cy.get("[akid='GesuchQueryGrid-Gesuch_ID'] input")
    };
  }

  /**
   * Search @value in 'Gesuch ID' field of Grid filter
   * @param value
   * @returns {VersicherteGrid}
   */
  searchByGesuchID(value) {
    this.elements.gesuchIDTxt().click().type(`${value}{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }

}

export default GesucheGridFilter;
