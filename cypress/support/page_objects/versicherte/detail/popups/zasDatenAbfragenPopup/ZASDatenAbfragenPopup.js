import ModalWindowBase from "../../../../../standalone/popup/ModalWindowBase";
import ZASDatenAbfragenGrid from "./ZASDatenAbfragenGrid";
import pageBase from "../../../../../base/PageBase";

class ZASDatenAbfragenPopup extends ModalWindowBase {
  constructor() {
    super();
    this.grid = new ZASDatenAbfragenGrid();
    super.elements = {
      ...this.elements,
      nachnameCheckbox : () => cy.get("[akid='ZasAssureForm-NachnameToggle']")
    };
  }

  setNachnameCheckbox(isChecked) {
    pageBase.setCheckboxChecked(this.elements.nachnameCheckbox(), isChecked);
    return this;
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.grid.waitGridViewLoaded();
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default ZASDatenAbfragenPopup;
