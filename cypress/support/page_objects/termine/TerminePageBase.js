class TerminePageBase {
  constructor(baseCSS) {
    this.elements = {
      terminText: () => cy.get(baseCSS).find("div[role='textbox'] p")
    };
  }

  setTerminTextValue(value){
    this.elements.terminText().type(value);
  }
}

export default TerminePageBase;
