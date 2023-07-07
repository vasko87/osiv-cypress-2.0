class SendungenGridHeaderActivePanel {
  constructor() {
    this.elements = {
      listeDerVersichertenTxt : () => cy.get("[class='dhx_cell_hdr_text dhx_cell_hdr_text_chrome']").contains("Liste der Sendungen"),
      refreshBtn: () => this.elements.listeDerVersichertenTxt().parent().find("[title='Refresh']")
    };
  }

  clickRefreshBtn() {
    this.elements.refreshBtn().should("be.visible").click();
  }
}

export default SendungenGridHeaderActivePanel;
