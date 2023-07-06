import EntscheidGridFilter from "./EntscheidGridFilter";
import EntscheidGridHeaderActivePanel from "./EntscheidGridHeaderActivePanel";
import GridBase from "../../../base/GridBase";
import pageBase from "../../../base/PageBase";
class EntscheidGrid extends GridBase {
  constructor(css) {
    super(css);
    this.filter = new EntscheidGridFilter();
    this.headerActivePanel = new EntscheidGridHeaderActivePanel();
    super.elements = {
      ...this.elements

    };
  }

  waitGridViewLoaded() {
    super.waitGridViewLoaded();
    return this;
  }

  /**
   * Search @value in 'Entscheid ID' field of Grid filter
   * open EntcheidID with dblclick()
   * @param value
   * @returns {EntscheidGrid}
   */
  searchAndOpenEntscheidID(value) {
    super.waitGridWrapperLoaded();
    this.filter.searchEntscheidID(value);
    super.waitGridViewLoaded().scrollRight()
         .dblClickRowValue(value);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default EntscheidGrid;
