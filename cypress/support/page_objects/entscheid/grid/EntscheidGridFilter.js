class EntscheidGridFilter {
  constructor() {

    this.elements = {
      entscheidIDTxt : () => cy.get("[akid='EntscheidQueryGrid-Entscheid_ID'] input")
    };
  }

  /**
   * Search @value in 'Entscheid ID' field of Grid filter
   * @param value
   * @returns {VersicherteGrid}
   */
  searchEntscheidID(value) {
    this.elements.entscheidIDTxt().click().clear().type(`${value}{enter}`);
    return this;
  }

}

export default EntscheidGridFilter;
