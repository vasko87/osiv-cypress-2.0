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

  waitForLoadedHard() {
    cy.wait(constants.DEFAULT_TIMEOUT);
    pageBase.waitForLoadingDisappears();
    return this;
  }

  setValue(value) {
    pageBase.executeJS(`document.querySelector("${this.baseCSS}").vueComponentInstance.setValue(\`{\\\\rtf1\\\\ansi\\\\ansicpg1252\\\\uc1\\\\deff0\\\\adeff0\\\\deflang0\\\\deflangfe0\\\\adeflang0{\\\\fonttbl
{\\\\f0\\\\fswiss\\\\fcharset0\\\\fprq2{\\\\*\\\\panose 020B0604020202020204}Arial;}
{\\\\f1\\\\froman\\\\fcharset2\\\\fprq2{\\\\*\\\\panose 05050102010706020507}Symbol;}}
{\\\\colortbl;\\\\red0\\\\green0\\\\blue0;}
{\\\\stylesheet{\\\\s0\\\\ltrpar\\\\itap0\\\\nowidctlpar\\\\ql\\\\li0\\\\ri0\\\\lin0\\\\rin0\\\\cbpat0\\\\rtlch\\\\af0\\\\afs24\\\\ltrch\\\\f0\\\\fs24\\\\lang2055\\\\langnp2055\\\\langfe2055\\\\langfenp2055 [Normal];}{\\\\*\\\\cs10\\\\additive Default Paragraph Font;}}
{\\\\info
{\\\\*\\\\txInfo{\\\\txVer 31.0.822.500}}}
\\\\paperw12240\\\\paperh15840\\\\margl1440\\\\margt1440\\\\margr1440\\\\margb1440\\\\deftab1134\\\\widowctrl\\\\trackmoves0\\\\trackformatting1\\\\lytexcttp\\\\formshade\\\\sectd
\\\\headery567\\\\footery567\\\\pgwsxn11906\\\\pghsxn16838\\\\marglsxn1134\\\\margtsxn1134\\\\margrsxn1134\\\\margbsxn1134\\\\pgbrdropt32\\\\pard\\\\ltrpar\\\\itap0\\\\nowidctlpar\\\\ql\\\\li0\\\\ri0\\\\lin0\\\\rin0\\\\plain\\\\rtlch\\\\af0\\\\afs20\\\\alang2055\\\\ltrch\\\\f0\\\\fs20\\\\lang2055\\\\langnp2055\\\\langfe2055\\\\langfenp2055\\\\par ${value}}\`)`);
    cy.wait(constants.MIN_TIMEOUT);
    return this;
  }

  waitForValueVisible() {

    // const getValue = () => {
    //   let checkedVal = null;
    //
    //   pageBase.executeJS(`document.querySelector("${this.baseCSS}").vueComponentInstance.ctx.getValue()`).then((val) => {
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
    // pageBase.executeJS(`document.querySelector("${this.baseCSS}").vueComponentInstance.ctx.getValue()`)
    // return this;
    cy.wait(constants.DEFAULT_TIMEOUT);
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
    return pageBase.executeJS(`document.querySelector("${this.baseCSS}").vueComponentInstance.getValue()`).then((val) => {
      if (val) {
        val = val.split("langfenp2055\\par ")[1].replaceAll("}", "");
      } else {
        throw new Error("No value found in TXT Editor!");
      }
      return val;
    });
  }

  checkTextHighlighted(text, isHighlighted) {
    pageBase.executeJS(`document.querySelector("${this.baseCSS}").vueComponentInstance.getValue()`).then((val) => {
      const highlightedTextExists = val.indexOf(`chcbpat6 ${text}`) !== -1;
      if (isHighlighted) {
        expect(highlightedTextExists).to.be.eql(true);
      } else {
        expect(highlightedTextExists).to.be.eql(false);
      }
    });
    return this;
  }

  checkTextHighlightedBulk(textList, isHighlighted) {
    textList.forEach(text => {
      cy.log(`Checking text [${text}] is highlighted [${isHighlighted}]`);
      this.checkTextHighlighted(text, isHighlighted);
    });
    return this;
  }
}

export default TxtEditor;
