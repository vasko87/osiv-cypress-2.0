import GridBase from "../../../base/GridBase";
import EingliederungGridFilter from "./EingliederungGridFilter";
import EingliederungGridHeaderActivePanel from "./EingliederungGridHeaderActivePanel";
import pageBase from "../../../base/PageBase";
class EingliederungGrid extends GridBase {
  constructor(css) {
    super(css);
    this.filter = new EingliederungGridFilter();
    this.headerActivePanel = new EingliederungGridHeaderActivePanel();
    super.elements = {
      ...this.elements

    };
  }

  /**
   *
   * @returns {EingliederungGrid}
   */
  waitGridViewLoaded() {
    super.waitGridViewLoaded();
    return this;
  }

  /**
   * Search @value in 'Eingliederung ID' field of Grid filter
   * open EingliederungID with dblclick()
   * @param value
   * @returns {EingliederungGrid}
   */
  searchAndOpenEingliederungID(value) {
    this.filter.searchEingliederungID(value);
    super.waitGridViewLoaded()
         .dblClickRowNumber(1);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default EingliederungGrid;
