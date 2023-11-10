import NeueAdressePopup from "../detail/popups/NeueAdressePopup";
import GridBase from "../../../base/GridBase";
import AdressenGridFilter from "./AdressenGridFilter";
import pageBase from "../../../base/PageBase";
import AdressenGridHeaderActivePanel from "./AdressenGridHeaderActivePanel";
class AdressenGrid extends GridBase {
  constructor(css) {

    super(css);
    this.filter = new AdressenGridFilter(css);
    this.headerActivePanel = new AdressenGridHeaderActivePanel(css);
    super.elements = {
      ...this.elements,
      adresseNewBtn: () => cy.get("[akid='AdresseQueryGrid-AdresseNew']")
    };
  }

  searchAndOpenAdresseID(value) {
    super.waitGridWrapperLoaded();
    this.filter.searchAdresseID(value);
    super.waitGridViewLoaded()
         .dblClickRowValue(value);
    pageBase.waitForLoadingDisappears();
    return this;
  }

  waitGridViewLoaded() {
    super.waitGridViewLoaded();
    return this;
  }

  clickAdressenNewBtn() {
    this.elements.adresseNewBtn().click();
    return new NeueAdressePopup();
  }
}

export default AdressenGrid;
