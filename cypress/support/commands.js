import LoginPage from "./standalone/LoginPage";
import Navigation from "./standalone/navigation/Navigation";
import addContext from "mochawesome/addContext";

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

before( function() {
  window.logCalls = 1;
  window.testFlow = [];
  window.usedJSHeapSize = {};
});

after( function() {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
});

Cypress.Commands.add("logWithSteps", (originalFn, message) => {
  Cypress.log({
    displayName: `--- ${window.logCalls}. ${message} ---`,
    name: `--- ${window.logCalls}. ${message} ---`,
    message: ""
  });
  window.testFlow.push(`${window.logCalls}. ${message}`);
  window.logCalls++;
});

Cypress.Commands.overwrite("log", (originalFn, message) => {
  Cypress.log({
    displayName: `--- ${message} ---`,
    name: `--- ${message} ---`,
    message: ""
  });
  window.testFlow.push(`${message}`);
});

Cypress.on("fail", (error) => {
  error.message = error.message + "\n\nTest flow:\n" + window.testFlow.join("\n");
  throw error;
});

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

Cypress.Commands.add("skipWhen", function(expression) {
  if (expression) {
    this.skip();
  }
});

Cypress.Commands.add("addContext", (context) => {
  cy.once("test:after:run", (test) => addContext({ test }, context));
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

  Cypress.Commands.add("GETrequest", (link) => {
    cy.log(link);
    cy.request("GET", `${Cypress.env("baseUrl") + link}`);
  });

  Cypress.Commands.add("PUTrequest", (link, body) => {
    cy.log(link);
    cy.request("PUT", `${Cypress.env("baseUrl") + link}`, body);
  });

  Cypress.Commands.add("DELETE", (link, body) => {
    cy.log(link);
    cy.request("DELETE", `${Cypress.env("baseUrl") + link}`, body);
  });

}

