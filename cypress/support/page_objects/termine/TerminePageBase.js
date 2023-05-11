class TerminePageBase {
  constructor(baseCSS) {
    this.elements = {
      terminText: () => cy.get(baseCSS).find("[name='termin_text']")
    };
  }

  setTerminTextValue(value){
    this.elements.terminText().type(value);
  }
}

export default TerminePageBase;
