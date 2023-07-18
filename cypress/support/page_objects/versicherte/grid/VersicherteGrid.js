import VersicherteGridFilter from "./VersicherteGridFilter";
import VersicherteGridHeaderActivePanel from "./VersicherteGridHeaderActivePanel";
import GridBase from "../../../base/GridBase";
import constants from "../../../helpers/Constants"
import pageBase from "../../../base/PageBase";
import NeuerVersicherterPopup from "../detail/popups/NeuerVersicherterPopup";

class VersicherteGrid extends GridBase {
  constructor() {
    super(`${constants.CSS_ACTIVE_FORM} [akid='sStammQueryB']`);
    this.filter = new VersicherteGridFilter();
    this.headerActivePanel = new VersicherteGridHeaderActivePanel();
    super.elements = {
      ...this.elements,
      plusBtn: () => cy.get("[akid='sStammQueryB-StammCreateDialog']")
    };
  }

  waitGridViewLoaded() {
    super.waitGridViewLoaded();
    return this;
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

  searchAndOpenVersicherteNr(value) {
    this.filter.searchByVersicherteNr(value);
    super.waitGridViewLoaded()
         .dblClickRowValue(value);
    pageBase.waitForLoadingDisappears();
    return this;
  }

  clickPlusBtn() {
    this.elements.plusBtn().click();
    return new NeuerVersicherterPopup();
  }
}

export default VersicherteGrid;
