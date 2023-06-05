import GridBase from "../../../../base/GridBase";

class DossierChronikTab {
  constructor() {
    this.elements = {
      dossierChronikTab : () => cy.get("[akid='StammDossierChronikTabbar-Dossier-Chronik']"),
      dossierAbgabeTab  : () => cy.get("[akid='StammDossierChronikTabbar-Dossier-Abgabe']"),
      dossierHistoryGrid: () => new GridBase("[akid='sStamm_Doss_HistGrid']"),
      dossierAbgabeGrid : () => new GridBase("[akid='DossierAbgabeGrid']")
    };
  }

  clickDossierChronikTab() {
    this.elements.dossierChronikTab().should("be.visible").click();
    return this;
  }

  clickDossierAbgabeTab() {
    this.elements.dossierAbgabeTab().should("be.visible").click();
    return this;
  }
}

export default DossierChronikTab;
