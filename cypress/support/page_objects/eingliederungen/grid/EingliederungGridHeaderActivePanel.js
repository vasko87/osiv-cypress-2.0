class EingliederungGridHeaderActivePanel {
  constructor() {
    this.elements = {
      listeDerEingliederungenTxt : () => cy.get("[class='dhx_cell_hdr_text dhx_cell_hdr_text_chrome']").contains("Liste der Eingliederungen"),
      refreshBtn: () => this.elements.listeDerEingliederungenTxt().parent().find("[title='Refresh']")
    };
  }

  clickRefreshBtn() {
    this.elements.refreshBtn().should("be.visible").click();
  }
}
export default EingliederungGridHeaderActivePanel;
