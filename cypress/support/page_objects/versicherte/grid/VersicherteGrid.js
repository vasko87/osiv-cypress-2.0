import VersicherteGridFilter from "./VersicherteGridFilter";
import VersicherteGridHeaderActivePanel from "./VersicherteGridHeaderActivePanel";
import GridBase from "../../../base/GridBase";
import constants from "../../../helpers/Constants"
import pageBase from "../../../base/PageBase";

class VersicherteGrid extends GridBase {
  constructor() {
    super(constants.CSS_OPACITY1);
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
    super.waitGridViewLoaded()
         .dblClickRowValue(value);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default VersicherteGrid;
