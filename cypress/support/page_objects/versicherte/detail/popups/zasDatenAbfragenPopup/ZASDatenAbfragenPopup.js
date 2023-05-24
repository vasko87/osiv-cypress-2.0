import ModalWindowBase from "../../../../../standalone/popup/ModalWindowBase";
import ZASDatenAbfragenGrid from "./ZASDatenAbfragenGrid";

class ZASDatenAbfragenPopup extends ModalWindowBase {
  constructor() {
    super();
    this.grid = new ZASDatenAbfragenGrid();
    super.elements = {
      ...this.elements
    };
  }

  clickZasDatenBtn() {
    this.elements.zasDatenBtn().should("be.visible").click();
    return this;
  }

}

export default ZASDatenAbfragenPopup;
