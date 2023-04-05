import AdressenPageBase from "../AdressenPageBase";
import DetailWindowHeader from "../../../base/DetailWindowHeader";

class AdressenDetail extends AdressenPageBase {
  constructor() {
    const detailOrPreviewFormCSS = "[akid='sAdresseDetailsForm']";

    super(detailOrPreviewFormCSS);
    this.windowHeader = new DetailWindowHeader();
    super.elements = {
      ...this.elements,
      adresseNewBtn: () => cy.get("[akid='AdresseQueryGrid-AdresseNew']")
    };
  }

}

export default AdressenDetail;
