import pageBase from "../../../base/PageBase";

class AdressenGridFilter {
  constructor(css) {
    this.elements = {
      adresseIDTxt : () => cy.get(css).find("[akid*='-Adresse_ID'] input")
    };
  }

  /**
   * Search @value in 'Adresse_ID' field of Grid filter
   * @param value
   * @returns {AdressenGridFilter}
   */
  searchAdresseID(value) {
    this.elements.adresseIDTxt().click().clear().type(`${value}{enter}`, {delay: 10});
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default AdressenGridFilter;
