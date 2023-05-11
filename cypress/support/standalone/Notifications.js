import pageBase from "../base/PageBase";

class Notifications {
  constructor() {
    this.elements = {
      successMessage : () => cy.get("[class='dhtmlx-info dhtmlx-success']", {timeout : 20000}),
      errorMessage : () => cy.get("[class='dhtmlx-info dhtmlx-error']", {timeout : 20000})
    };
  }

  /**
   * Waiting for Success info message appears
   * @returns {Notifications}
   */
  checkSuccessMessageVisible() {
    this.elements.successMessage().should("be.visible");
    return this;
  }

  /**
   * Waiting for Error info message appears
   * @returns {Notifications}
   */
  checkErrorMessageVisible() {
    this.elements.errorMessage().should("be.visible");
    return this;
  }

  checkErrorMessageText(text) {
    this.elements.errorMessage().should("have.text", text);
    return this;
  }

}
export default Notifications;
