import pageBase from "../../../base/PageBase";

class PosteingangGridFilter {
  constructor() {

    this.elements = {
      versichertenNrTxt : () => cy.get("[akid='PosteingangQueryGrid-Stamm_Nr'] input")
    };
  }

  /**
   * Search @value in 'Entscheid ID' field of Grid filter
   * @param value
   * @returns {VersicherteGrid}
   */
  searchVersichertenNrTxt(value) {
    this.elements.versichertenNrTxt().click().clear();
    pageBase.waitForLoadingDisappears();
    this.elements.versichertenNrTxt().click().type(`${value}{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }

}

export default PosteingangGridFilter;
