class EntscheidGridHeaderActivePanel {
  constructor() {
    this.elements = {
      listeDerEntscheideTxt : () => cy.get("[class='dhx_cell_hdr_text dhx_cell_hdr_text_chrome']").contains("Liste der Entscheide"),
      refreshBtn: () => this.elements.listeDerEntscheideTxt().parent().find("[title='Refresh']")
    };
  }

  clickRefreshBtn() {
    this.elements.refreshBtn().should("be.visible").click();
  }
}

export default EntscheidGridHeaderActivePanel;
