import pageBase from "../base/PageBase";
import constants from "../helpers/Constants";

class TxtEditor {
  constructor() {
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    cy.wait(constants.SHORT_TIMEOUT * 5);
    pageBase.waitForLoadingDisappears();
    return this;
  }

  setValue(value) {
    pageBase.executeJS(`document.querySelector(".txtEditor").__vueParentComponent.ctx.setValue("${value}")`);
    return this;
  }

  checkValue(value) {
    this.waitForLoaded();
    this.getValue().then((actualValue) => {
      expect(actualValue).to.be.eql(value);
    });
    return this;
  }

  /**
   *
   * @returns {Cypress.Chainable<>}
   */
  getValue() {
    return pageBase.executeJS(`document.querySelector( ".txtEditor" ).__vueParentComponent.ctx.getValue()`).then((val) => {
      console.log(val);
      val = val.split("fs20\\lang1031\\langnp1031\\langfe1031\\langfenp1031 ")[1].replaceAll("}", "");
      console.log(val);
      return val;
    });
  }
}
export default TxtEditor;
