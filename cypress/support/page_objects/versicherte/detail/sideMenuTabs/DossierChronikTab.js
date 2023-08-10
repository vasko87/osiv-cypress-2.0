import GridBase from "../../../../base/GridBase";
import constants from "../../../../helpers/Constants";
import pageBase from "../../../../base/PageBase";

class DossierChronikTab {
  constructor() {
    this.dossierHistoryGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='sStamm_Doss_HistGrid']`);
    this.dossierAbgabeGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='DossierAbgabeGrid']`);
    this.elements = {
      dossierChronikTab : () => cy.get("[akid='StammDossierChronikTabbar-Dossier-Chronik']"),
      dossierAbgabeTab  : () => cy.get("[akid='StammDossierChronikTabbar-Dossier-Abgabe']")
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
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
