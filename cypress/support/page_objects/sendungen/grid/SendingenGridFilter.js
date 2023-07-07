import pageBase from "../../../base/PageBase";

class SendingenGridFilter {
  constructor() {

    this.elements = {
      sendundenNrTxt : () => cy.get("[akid='SendungQueryDesktopGrid-Sendung_ID'] input")
    };
  }

  /**
   * Search @value in 'Sendunden Nr' field of Grid filter
   * @param value
   * @returns {SendingenGridFilter}
   */
  searchBySendundenNr(value) {
    pageBase.waitForLoadingDisappears();
    this.elements.sendundenNrTxt().click().type(`${value}{enter}`);
    pageBase.waitForLoadingDisappears();
    return this;
  }

}

export default SendingenGridFilter;
