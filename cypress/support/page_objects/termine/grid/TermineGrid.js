import GridBase from "../../../base/GridBase";
import TermineGridFilter from "./TermineGridFilter";
import TermineGridHeaderActivePanel from "./TermineGridHeaderActivePanel";
class TermineGrid extends GridBase {
  constructor(css) {
    super(css);
    this.filter = new TermineGridFilter();
    this.headerActivePanel = new TermineGridHeaderActivePanel();
    super.elements = {
      ...this.elements
    };
  }
}

export default TermineGrid;
