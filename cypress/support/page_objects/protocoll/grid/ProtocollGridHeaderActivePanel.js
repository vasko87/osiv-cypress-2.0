
class ProtocollGridHeaderActivePanel {
  constructor() {
    this.elements = {
      listeDerProtokolleintrageTxt : () => cy.get("[class='dhx_cell_hdr_text dhx_cell_hdr_text_chrome']").contains("Liste der Protokolleinträge"),
      refreshBtn: () => this.elements.listeDerProtokolleintrageTxt().parent().find("[title='Refresh']")
    };
  }

  clickRefreshBtn() {
    this.elements.refreshBtn().should("be.visible").click();
  }
}

export default ProtocollGridHeaderActivePanel;
