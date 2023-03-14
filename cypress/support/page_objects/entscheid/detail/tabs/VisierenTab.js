import pageBase from "../../../../base/PageBase";

class VisierenTab {
  constructor() {
    this.elements = {
      visumtypebezDropdown: () => cy.get("[akid='EntscheidVisierenForm-visumtypebez']")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.visumtypebezDropdown().should("be.visible");
    pageBase.waitForLoadingDisappears();
  }
}

export default VisierenTab;
