import AdressenAddDialog from "../popup/AdressenAddDialog";
import GridBase from "../../../base/GridBase";
class AdressenGrid extends GridBase{
  constructor() {
    super("[style*='opacity: 1']");
    super.elements = {
      ...this.elements,
      adresseNewBtn: () => cy.get("[akid='AdresseQueryGrid-AdresseNew']")
    };
  }

  clickAdressenNewBtn() {
    this.elements.adresseNewBtn().click();
    return new AdressenAddDialog();
  }
}

export default AdressenGrid;
