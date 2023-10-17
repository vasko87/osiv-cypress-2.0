import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import AdressenGrid from "../../grid/AdressenGrid";
import constants from "../../../../helpers/Constants";

class AdressenZusammenfuehrenpPopup extends ModalWindowBase {
  constructor() {
    super();
    this.grid = new AdressenGrid(`${constants.CSS_ACTIVE_FORM} [akid='AdressenZusammenfuehrenQueryGrid']`);
    super.elements = {
      ...this.elements,
      adressenZusammenfuehrenHauptAdressenForm: () => this.elements.modalWindow().find("[akid='AdressenZusammenfuehrenHauptAdressenForm']"),
      zusammenfuhrenBtn: () => this.elements.modalWindow().find("[title='Zusammenführen']")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.elements.adressenZusammenfuehrenHauptAdressenForm().should("be.visible");
    return this;
  }

  clickZusammenfuhrenBtn() {
    this.elements.zusammenfuhrenBtn().should("be.visible").click();
    return this;
  }
}
export default AdressenZusammenfuehrenpPopup;
