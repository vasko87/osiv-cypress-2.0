import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";

class VisierenTab {
  constructor() {
    this.elements = {
      visumtypebezDropdown: () => cy.get("[akid='EntscheidVisierenForm-visumtypebez']")
    };
  }

  waitForLoaded() {
    cy.wait(constants.SHORT_TIMEOUT);
    this.elements.visumtypebezDropdown().should("be.visible");
    pageBase.waitForLoadingDisappears();
  }
}

export default VisierenTab;
