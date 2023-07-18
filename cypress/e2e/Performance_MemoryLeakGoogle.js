
import helperObject from "../support/helpers/HelperObject";

describe(`Google test`, {failFast: {enabled: true}}, () => {
  before("Login", () => {
    cy.visit("https://www.google.com/");
  });

  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 10].forEach((i) => {

    for (let i = 1; i <= 100; i++) {
      it("Step 1: ", () => {
        helperObject.performance.collectUsedJSHeapSize(i);
        var crypto = require("crypto");
        var id = crypto.randomBytes(20).toString('hex');
        cy.get("[id='APjFqb']").clear().type(`${id}{enter}`);

        helperObject.performance.collectMeasureUserAgentSpecificMemory(i);
      });
    }
  });
});
