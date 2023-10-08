import GridBase from "../../../../base/GridBase";
import pageBase from "../../../../base/PageBase";
import BeschwerdeGridFilter from "./BeschwerdeGridFilter";
class BeschwerdeGrid extends GridBase {
  constructor(css) {
    super(css);
    this.filter = new BeschwerdeGridFilter();
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
  searchAndOpenBeschwerdeID(value) {
    super.waitGridWrapperLoaded();
    this.filter.searchBeschwerdeID(value);
    super.waitGridViewLoaded()
         .dblClickRowValue(value);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default BeschwerdeGrid;
