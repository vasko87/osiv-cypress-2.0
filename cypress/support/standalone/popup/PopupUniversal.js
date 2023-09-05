import constants from "../../helpers/Constants";

class PopupUniversal {
  constructor() {
    this.elements = {
      popup: () => cy.get("div [class*='swal-modal ']", {timeout: constants.DEFAULT_TIMEOUT}),
      okBtn       : () => this.elements.popup().find(`[class='swal-button swal-button--yesreply default'],
                                                              [class='swal-button swal-button--confirm'],
                                                              [class='swal-button swal-button--okreply default'],
                                                              [class*='swal-button swal-button'][class*='ok']`),
      neinBtn     : () => this.elements.popup().find(`[class='swal-button swal-button--noreply'],
                                                              [class='swal-button swal-button--cancelreply'],
                                                              [class='swal-button swal-button--replycancel']`)
    };
  }

  waitForLoaded() {
    this.elements.popup().should("be.visible");
    return this;
  }

  clickOkBtn() {
    this.waitForLoaded();
    this.elements.okBtn().click();
    return this;
  }

  clickNeinBtn() {
    this.waitForLoaded();
    this.elements.neinBtn().click();
    return this;
  }
}

export default PopupUniversal;
