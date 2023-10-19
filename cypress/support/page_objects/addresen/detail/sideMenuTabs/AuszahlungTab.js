import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";

class AuszahlungTab {
  constructor() {
    this.adresseAuszahlungForm = cy.get(`[akid='sAdresseAuszahlungForm']`);
    this.elements = {
      adresseDropdown          : () => cy.get(`[akid$='-fremdadressekurzadresse']`)
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.adresseAuszahlungForm.should("be.visible");
    return this;
  }

  checkAdresseDropdownContains(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.adresseDropdown(), value, true);
    return this;
  }
}

export default AuszahlungTab;
