import GridBase from "../../../base/GridBase";
import ProtocollGridHeaderActivePanel from "./ProtocollGridHeaderActivePanel";
class ProtocollGrid extends GridBase {
  constructor(css) {
    super(css);
    this.headerActivePanel = new ProtocollGridHeaderActivePanel(css);
    super.elements = {
      ...this.elements
    };
  }
}

export default ProtocollGrid;
