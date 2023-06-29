import pageBase from "../../../base/PageBase";
import constants from "../../../../support/helpers/Constants";

class EntscheidGridHeaderActivePanel {
  constructor() {
    this.elements = {
      listeDerEntscheideTxt : () => cy.get("[class='dhx_cell_hdr_text dhx_cell_hdr_text_chrome']").contains("Liste der Entscheide"),
      refreshBtn: () => this.elements.listeDerEntscheideTxt().parent().find("[title='Refresh']"),
      entscheidQueryGridDropdown: () => this.elements.listeDerEntscheideTxt().parent().find("[akid='panelHeaderDynSelect-EntscheidQueryGrid']")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.listeDerEntscheideTxt().should("be.visible");
    return this;
  }

  clickRefreshBtn() {
    this.elements.refreshBtn().should("be.visible").click();
  }

  selectAllDropdown(){
    this.elements.entscheidQueryGridDropdown().should("be.visible");
    pageBase.selectInDropdownContains(this.elements.entscheidQueryGridDropdown(), "All");
    pageBase.waitForLoadingDisappears();
    return this;
  }

  selectMeineEntscheideDropdown() {
    this.elements.entscheidQueryGridDropdown().should("be.visible");
    pageBase.selectInDropdownContains("Meine Entscheide");
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default EntscheidGridHeaderActivePanel;
