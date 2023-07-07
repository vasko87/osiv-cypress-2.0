import AdressenAddDialog from "../detail/popups/AdressenAddDialog";
import GridBase from "../../../base/GridBase";
import constants from "../../../helpers/Constants";
class AdressenGrid extends GridBase {
  constructor() {
    super(`${constants.CSS_ACTIVE_FORM} [akid='AdresseQueryGrid']`);
    super.elements = {
      ...this.elements,
      adresseNewBtn: () => cy.get("[akid='AdresseQueryGrid-AdresseNew']")
    };
  }

  waitGridViewLoaded() {
    super.waitGridViewLoaded();
    return this;
  }

  clickAdressenNewBtn() {
    this.elements.adresseNewBtn().click();
    return new AdressenAddDialog();
  }
}

export default AdressenGrid;
