import EntscheidGridFilter from "./EntscheidGridFilter";
import EntscheidGridHeaderActivePanel from "./EntscheidGridHeaderActivePanel";
import GridBase from "../../../base/GridBase";
class EntscheidGrid extends GridBase{
  constructor() {
    super("[style*='opacity: 1']");
    this.filter = new EntscheidGridFilter();
    this.headerActivePanel = new EntscheidGridHeaderActivePanel();
    super.elements = {
      ...this.elements

    };
  }

  /**
   * Search @value in 'Entscheid ID' field of Grid filter
   * open EntcheidID with dblclick()
   * @param value
   * @returns {EntscheidGrid}
   */
  searchAndOpenEntscheidID(value) {
    this.filter.searchEntscheidID(value);
    super.dblClickRowValue(value);
    return this;
  }
}

export default EntscheidGrid;
