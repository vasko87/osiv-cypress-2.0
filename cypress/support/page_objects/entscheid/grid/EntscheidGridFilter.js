import pageBase from "../../../base/PageBase";

class EntscheidGridFilter {
  constructor() {

    this.elements = {
      entscheidIDTxt : () => cy.get("[akid='EntscheidQueryGrid-Entscheid_ID'] input"),
      bearbeiterDropdown : () => cy.get("[akid='EntscheidQueryGrid-Bearbeiter']")
    };
  }

  /**
   * Search @value in 'Entscheid ID' field of Grid filter
   * @param value
   * @returns {EntscheidGridFilter}
   */
  searchEntscheidID(value) {
    this.elements.entscheidIDTxt().click().clear().type(`${value}{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }

  clearBearbeiterDropdown() {
    pageBase.clearDropdown(this.elements.bearbeiterDropdown());
    return this;
  }

}

export default EntscheidGridFilter;
