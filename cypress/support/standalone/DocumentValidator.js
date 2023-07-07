import constants from "../helpers/Constants";

class DocumentValidator {
  constructor(baseCSS) {
    this.elements = {
      textForm: () => cy.get(baseCSS).find("[id*='cke_'][id*='_contents'] [class='WordSection1']")
    };
  }

  checkTextBlockNotEmpty() {
    this.elements.textForm().should("be.visible", {timeout: constants.LONG_TIMEOUT});
  }

  checkTagTextAndBackgroundColor(tag, text, color, hasColor) {
    if (hasColor) {
      this.elements.textForm().find(`${tag}:contains(${text})`)
          .should("have.css", "background").and("include", color);
    } else {
      this.elements.textForm().find(`${tag}:contains(${text})`)
          .should("have.css", "background").and("not.include", color);
    }
    return this;
  }

  checkTagTextAndBackgroundColorBulk(tag, textList, color, hasColor) {
    textList.forEach(text => this.checkTagTextAndBackgroundColor(tag, text, color, hasColor));
    return this;
  }
}

export default DocumentValidator;
