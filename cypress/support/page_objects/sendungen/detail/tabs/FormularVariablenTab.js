import pageBase from "../../../../base/PageBase";

class FormularVariablenTab {
  constructor() {
    this.elements = {
      sendungDetailsTabFrame: () => cy.get("[akid='SendungDetailsTabFrame']")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
  }
}

export default FormularVariablenTab;
