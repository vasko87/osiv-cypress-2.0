import pageBase from "../base/PageBase";

class Notifications {
  constructor() {
    this.elements = {
      successMessage : () => cy.get("[class='dhtmlx-info dhtmlx-success']", {timeout : 20000})
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

}
export default Notifications;
