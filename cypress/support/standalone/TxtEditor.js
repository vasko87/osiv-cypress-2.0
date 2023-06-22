import pageBase from "../base/PageBase";
import constants from "../helpers/Constants";

class TxtEditor {
  constructor(CSS) {
    this.baseCSS = `${CSS} .txtEditor`;
    this.elements = {
      getIframeDocument: () => {
        return cy.get(CSS).get("iframe[src*='osiv-viewer']").its("0.contentDocument").should("exist");
      },
      getIframeBody    : () => {
        return this.elements.getIframeDocument()
                   .its("body").should("not.be.undefined")
                   .then(cy.wrap);
      }
    };
  }

  waitForFirstLoad() {
    cy.wait(constants.MIN_TIMEOUT);
    pageBase.waitForLoadingDisappears();
    this.elements.getIframeBody().find("[id='txRibbonLoader']").should("be.visible");
    this.elements.getIframeBody().find("[id='txRibbonLoader']", {timeout: constants.LONG_TIMEOUT}).should("not.exist");
    return this;
  }

  setValue(value) {
    pageBase.executeJS(`document.querySelector("${this.baseCSS}").__vueParentComponent.ctx.setValue("${value}")`);
    cy.wait(constants.MIN_TIMEOUT);
    return this;
  }

  waitForValueVisible() {

    // const getValue = () => {
    //   let checkedVal = null;
    //
    //   pageBase.executeJS(`document.querySelector("${this.baseCSS}").__vueParentComponent.ctx.getValue()`).then((val) => {
    //     checkedVal = val;
    //   });
    //
    //   return checkedVal;
    // };
    //
    // console.log("START WAITING ...");
    // cy.waitUntil(() => getValue() !== null);
    // console.log("END WAITING", getValue());
    //
    // pageBase.executeJS(`document.querySelector("${this.baseCSS}").__vueParentComponent.ctx.getValue()`)
    // return this;
    cy.wait(constants.SHORT_TIMEOUT * 2);
    return this;
  }

  checkValue(value) {
    this.getSingleValue().then((actualValue) => {
      expect(actualValue).to.be.eql(value);
    });
    return this;
  }

  /**
   *
   * @returns {Cypress.Chainable<>}
   */
  getSingleValue() {
    return pageBase.executeJS(`document.querySelector("${this.baseCSS}").__vueParentComponent.ctx.getValue()`).then((val) => {
      val = val.split("fs20\\lang1031\\langnp1031\\langfe1031\\langfenp1031 ")[1].replaceAll("}", "");
      return val;
    });
  }

  checkTextHighlighted(text, isHighlighted) {
    pageBase.executeJS(`document.querySelector("${this.baseCSS}").__vueParentComponent.ctx.getValue()`).then((val) => {
      cy.log(`[TxtEditor]: Check text [${text}] hightighted`);
      const highlightedTextExists = val.indexOf(`chcbpat2 ${text}`) !== -1;
      if (isHighlighted) {
        expect(highlightedTextExists).to.be.eql(true);
      } else {
        expect(highlightedTextExists).to.be.eql(false);
      }
    });
    return this;
  }

  checkTextHighlightedBulk(textList, isHighlighted) {
    textList.forEach(text => this.checkTextHighlighted(text, isHighlighted));
    return this;
  }
}

export default TxtEditor;
