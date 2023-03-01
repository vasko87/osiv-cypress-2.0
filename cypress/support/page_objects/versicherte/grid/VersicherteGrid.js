import VersicherteGridFilter from "./VersicherteGridFilter";
import VersicherteGridHeaderActivePanel from "./VersicherteGridHeaderActivePanel";
import GridBase from "../../../base/GridBase";
class VersicherteGrid extends GridBase{
  constructor() {
    super("[style*='opacity: 1']");
    this.filter = new VersicherteGridFilter();
    this.headerActivePanel = new VersicherteGridHeaderActivePanel();
    super.elements = {
      ...this.elements

    };
  }

  /**
   * Search @value in 'Versicherte Name' field of Grid filter
   * open VersicherteName with dblclick()
   * @param value
   * @returns {VersicherteGrid}
   */
  searchAndOpenVersicherteName(value) {
    this.filter.searchByVersicherteName(value);
    super.dblClickRowValue(value);
    return this;
  }
}

export default VersicherteGrid;
