import constants from "../helpers/Constants";

class Notifications {
  constructor() {
    this.elements = {
      successMessage : () => cy.get("[class='dhtmlx-info dhtmlx-success']", {timeout : 20000}),
      notificationMessage : () => cy.get("[class='vue-notification-message dhtmlx-info dhtmlx-info']", {timeout : 20000}),
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

  waitForSuccessMessageDisappears() {
    cy.get("[class='dhtmlx-info dhtmlx-success']", {timeout : constants.LONG_TIMEOUT}).should("not.exist");
    return this;
  }

  /**
   * Waiting for Notification(Blue) info message appears
   * @returns {Notifications}
   */
  checkNotificatiomMessageVisible() {
    this.elements.notificationMessage().should("be.visible");
    return this;
  }

  checkNotificationMessageContainsText(text) {
    this.elements.notificationMessage().should("contain.text", text);
    return this;
  }

  waitForNotificationMessageContainsText(text) {
    this.elements.notificationMessage().find(`p:contains('${text}')`, {timeout: constants.LONG_TIMEOUT}).should("exist");
    return this;
  }

  waitForNotificationMessageDisappears() {
    cy.get("[class='vue-notification-message dhtmlx-info dhtmlx-info']", {timeout: constants.LONG_TIMEOUT}).should("not.exist");
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
