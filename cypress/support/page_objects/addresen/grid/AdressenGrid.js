import AdressenAddDialog from "../popup/AdressenAddDialog";
import GridBase from "../../../base/GridBase";
import constants from "../../../helpers/Constants"
class AdressenGrid extends GridBase{
  constructor() {
    super(constants.cssOpacity);
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
