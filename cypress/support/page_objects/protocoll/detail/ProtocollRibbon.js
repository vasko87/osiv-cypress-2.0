import RibbonBase from "../../../base/RibbonBase";
import UrsprungAndernPopup from "./popups/UrsprungAndernPopup";

class ProtocollRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      ursprungAndernBtn : () => this.elements.ribbonBlock().find("[title='Ursprung ändern']")
    };
  }

  clickUrsprungAndernBtn() {
    this.elements.ursprungAndernBtn().should("be.visible").click();
    return new UrsprungAndernPopup();
  }

}

export default ProtocollRibbon;
