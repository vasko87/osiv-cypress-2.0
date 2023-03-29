import LoginPage from "./standalone/LoginPage";
import Navigation from "./standalone/navigation/Navigation";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


const loginPage = new LoginPage();
const navigation = new Navigation();

Cypress.Commands.add("loginWithSession", (username, password) => {
  cy.session([username, password], () => {
    loginPage.openUrl();
    cy.waitUntil(() => loginPage.elements.nameTxt().should("be.visible"));
    loginPage.login(username, password);
    navigation.elements.userInfoTxt().invoke("text").then(text => {
      expect(text).to.equal(Cypress.env("username"));
      expect(text).not.empty;
    });
  });
});


// Hide all fetch/XHR requests in Cy console, toggle via cypress.json

if (Cypress.config("hideXHR")) {
  const app = window.top;

  if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
    const style = app.document.createElement("style");
    style.innerHTML =
      ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");

    app.document.head.appendChild(style);
  }
}

