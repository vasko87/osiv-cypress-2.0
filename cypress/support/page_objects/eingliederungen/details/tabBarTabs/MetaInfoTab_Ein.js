import pageBase from "../../../../base/PageBase";

class MetaInfoTab_Ein {
  constructor() {
    this.elements = {
      eingliederungIdTxt      : () => cy.get("[akid='EingliederungMetaInfoForm-eingliederung_id'] input")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
  }

  getEingliederungIdTxt() {
    return this.elements.eingliederungIdTxt();
  }
}

export default MetaInfoTab_Ein;
