import RibbonBase from "../../../base/RibbonBase";

class VersicherteRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements
    };
  }
}
export default VersicherteRibbon;
