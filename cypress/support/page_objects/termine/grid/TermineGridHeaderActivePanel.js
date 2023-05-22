class TermineGridHeaderActivePanel {
  constructor() {

    this.elements = {
      listeDerTermineTxt : () => cy.get("[class='dhx_cell_hdr_text dhx_cell_hdr_text_chrome']").contains("Liste der Termine"),
      refreshBtn: () => this.elements.listeDerTermineTxt().parent().find("[title='Refresh']")
    };
  }

  clickRefreshBtn() {
    this.elements.refreshBtn().should("be.visible").click();
  }
}

export default TermineGridHeaderActivePanel;
