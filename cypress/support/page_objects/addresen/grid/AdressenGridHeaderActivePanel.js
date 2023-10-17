import pageBase from "../../../base/PageBase";

class AdressenGridHeaderActivePanel {
  constructor(css) {
    this.elements = {
      listeDerAdressenTxt : () => cy.get(css)
                                    .xpath(".//../..//*[@class='dhx_cell_hdr_text dhx_cell_hdr_text_chrome']")
                                    .contains("Liste der Adressen"),
      refreshBtn: () => this.elements.listeDerAdressenTxt().parent().find("[title='Refresh']"),
      allDropdown: () => this.elements.listeDerAdressenTxt().parent()
                             .find("[akid*='panelHeaderDynSelect-Adresse']")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.listeDerAdressenTxt().should("be.visible");
    return this;
  }

  clickRefreshBtn() {
    this.elements.refreshBtn().should("be.visible").click();
  }

  selectAllDropdown(){
    this.elements.allDropdown().should("be.visible");
    pageBase.selectInDropdownContains(this.elements.allDropdown(), "All");
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default AdressenGridHeaderActivePanel;
