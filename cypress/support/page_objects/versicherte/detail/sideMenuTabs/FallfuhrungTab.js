import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";
import GridBase from "../../../../base/GridBase";

class FallfuhrungTab {
  constructor() {
    this.grid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='FallfuehrungStammGrid']`);
    this.elements = {
      empfangerDropdown    : () => cy.get("[akid='FallfuehrungDetailForm-kurzadresse']")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.grid.waitGridWrapperLoaded();
    return this;
  }

  checkEmpfangerDropdown(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.empfangerDropdown(), value, true);
    return this;
  }
}

export default FallfuhrungTab;
