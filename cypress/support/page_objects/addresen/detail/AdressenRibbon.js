import RibbonBase from "../../../base/RibbonBase";
import AdressenZusammenfuehrenpPopup from "./popups/AdressenZusammenfuehrenpPopup";

class AdressenRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      adressenZusammenfuhrenBtn: () => this.elements.ribbonBlock().find("[title='Adressen zusammenführen']")
    };

  }

  clickAdressenZusammenfuhrenBtn() {
    this.elements.adressenZusammenfuhrenBtn().should("be.visible").click();
    return new AdressenZusammenfuehrenpPopup();
  }
}

export default AdressenRibbon;
