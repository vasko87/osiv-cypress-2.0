import pageBase from "../../../base/PageBase";

class PosteingangGridHeaderActivePanel {
  constructor() {

    this.elements = {
      posteingangTxt : () => cy.get("[class='dhx_cell_hdr_text dhx_cell_hdr_text_chrome']").contains("Posteingang"),
      refreshBtn: () => this.elements.posteingangTxt().parent().find("[title='Refresh']"),
      posteingangQueryGridDropdown: () => cy.get("[akid='panelHeaderDynSelect-PosteingangQueryGrid']")
    };
  }

  selectAllDropdown(){
    this.elements.posteingangQueryGridDropdown().should("be.visible");
    pageBase.selectInDropdownContains(this.elements.posteingangQueryGridDropdown(), "All");
    pageBase.waitForLoadingDisappears();
    return this;
  }

  clickRefreshBtn() {
    this.elements.refreshBtn().should("be.visible").click();
  }

  selectPosteingangQueryGridDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.posteingangQueryGridDropdown(), value);
  }

  selectPosteingangQueryGridDropdownAll() {
    this.selectPosteingangQueryGridDropdown("All");
  }

  selectPosteingangQueryGridDropdownMine() {
    this.selectPosteingangQueryGridDropdown("Meine Posteingänge");
  }
}

export default PosteingangGridHeaderActivePanel;
