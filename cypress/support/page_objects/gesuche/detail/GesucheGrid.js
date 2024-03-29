import GridBase from "../../../base/GridBase";
import GesucheGridFilter from "./GesucheGridFilter";
import pageBase from "../../../base/PageBase";

class GesucheGrid extends GridBase {
  constructor(css) {
    super(css);
    this.filter = new GesucheGridFilter();
    super.elements = {
      ...this.elements
    };
  }

  waitGridViewLoaded() {
    super.waitGridViewLoaded();
    return this;
  }

  /**
   * Search @value 'Gesuch ID' field of Grid filter
   * open found Gesuch with dblclick()
   * @param value
   * @returns {VersicherteGrid}
   */
  searchAndOpenGesuchID(value) {
    this.filter.searchByGesuchID(value);
    super.waitGridViewLoaded()
         .dblClickRowNumber(1);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default GesucheGrid;
