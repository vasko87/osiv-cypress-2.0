import GridBase from "../../../base/GridBase";
import EingliederungGridFilter from "./EingliederungGridFilter";
import EingliederungGridHeaderActivePanel from "./EingliederungGridHeaderActivePanel";
class EntscheidGrid extends GridBase {
  constructor(css) {
    super(css);
    this.filter = new EingliederungGridFilter();
    this.headerActivePanel = new EingliederungGridHeaderActivePanel();
    super.elements = {
      ...this.elements

    };
  }
}

export default EntscheidGrid;
