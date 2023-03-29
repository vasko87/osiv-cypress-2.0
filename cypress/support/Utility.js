export default {
  /**
   * Gather elements which specified as parameters.
   * Uses for collecting values from elements on the page to make some actions with them later.
   *
   * See example of usage in test: C39770_EntscheidCopy.js
   * @param cmds
   * @returns {Cypress.Chainable<{}>}
   */
  gatherElements(cmds) {
    const results = {};

    for (const k in cmds) {
      cmds[k].then((el) => results[k] = el);
    }

    return cy.wrap(results);
  }
};
