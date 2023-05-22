import pageBase from "../base/PageBase";
import constants from "../helpers/Constants";

class TxtEditor {
  constructor() {
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    cy.wait(constants.SHORT_TIMEOUT * 2);
    pageBase.waitForLoadingDisappears();
    return this;
  }

  setValue(value) {
    pageBase.executeJS(`document.querySelector(".txtEditor").__vueParentComponent.ctx.setValue("${value}")`);
    return this;
  }

  checkValue(value) {
    this.waitForLoaded();
    const actualValue = pageBase.executeJS(`document.querySelector( ".txtEditor" ).__vueParentComponent.ctx.value`);
    console.log(actualValue);
    // expect(actualValue).to.be.eql(value);
  }

}
export default TxtEditor;
