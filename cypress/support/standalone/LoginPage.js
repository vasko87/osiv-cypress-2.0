class LoginPage {
  constructor() {
    this.elements = {
      nameTxt: () => cy.get("[name='login_name']"),
      passwordTxt: () => cy.get("[name='login_password']"),
      okBtn: () => cy.get("[class='dhxform_btn']")
    };
  }

  open(url) {
    cy.visit(url);
    // workaround to make detail view pages open correctly
    // redefined Akioma method 'isWindowInTaskbarMode' to return true.
    // Otherwise, Detail view windows opening work incorrectly, probably because cypress run tests inside frame
    cy.window().then(function (win) {
      win.akioma.swat.MasterLayout.isWindowInTaskbarMode = () => true;
    });

    Cypress.on("uncaught:exception", (err) => {
      console.log(err.message);
      if (Cypress.env("uncaughtExceptionFailure") === true) {
        return err;
      } else {
        return false;
      }
    });
  }

  /**
   * Opens default URL from 'cypress.env.json' file
   */
  openUrl() {
    this.open(Cypress.env("baseUrl"));
  }

  login(username, password) {
    this.elements.nameTxt().wait(0).focus().clear().type(username);
    this.elements.passwordTxt().type(`${password}{enter}`);
  }
}

export default LoginPage;
