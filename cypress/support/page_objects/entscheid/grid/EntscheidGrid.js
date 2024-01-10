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
      ...this.elements,
      threeDotMenu    : () => cy.get("[akid='EntscheidQueryStammGrid-EntscheidSendungGridContextMenu']")

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
    super.waitGridViewLoaded()
         .dblClickRowValue(value);
    pageBase.waitForLoadingDisappears();
    return this;
  }

  checkThreeDotMenuVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.threeDotMenu(), isVisible);
    return this;
  }
}

export default EntscheidGrid;
