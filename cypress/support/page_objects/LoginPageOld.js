export default {
  open(url) {
    cy.visit(url);
    // workaround to make detail vew pages open correctly
    // redefined Akioma method 'isWindowInTaskbarMode' to return true.
    // Otherwise, Detail view windows opening work incorrectly, probably because cypress run tests inside frame
    cy.window().then(function(win) {
      win.akioma.swat.MasterLayout.isWindowInTaskbarMode = () => true;
    });

    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  },

  userName() {
    return cy.get("[name='login_name']");
  },

  password() {
    return cy.get("[name='login_password']");
  },

  okButton() {
    return cy.get("[class='dhxform_btn']");
  },

  login(username, password) {
    cy.waitUntil(() => this.userName().should("be.visible"));
    this.userName().wait(0).focus().clear().type(username);
    this.password().type(`${password}{enter}`);
  }
};
