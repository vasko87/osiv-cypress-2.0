import PageBase from "./../../base/PageBase";

class AdressenCommonElements extends PageBase{

  constructor(baseCSS) {
    super();

    super.elements = {
      vmdatumDate : () => cy.get(baseCSS).find("[akid$='-entscheid_vmdatum'] input")
    };
  }

  setVmdatumDate(date) {
    this.elements.vmdatumDate().type(date);
    return this;
  }
}

export default AdressenCommonElements;
