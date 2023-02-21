import AdressenPageBase from "../AdressenPageBase";

class AdressenDetailPage extends AdressenPageBase {
  constructor() {
    const detailOrPreviewFormCSS = "[akid='sAdresseDetailsForm']";

    super(detailOrPreviewFormCSS);
    super.elements = {
      ...this.elements,
      adresseNewBtn: () => cy.get("[akid='AdresseQueryGrid-AdresseNew']")
    };
  }

}

export default AdressenDetailPage;
