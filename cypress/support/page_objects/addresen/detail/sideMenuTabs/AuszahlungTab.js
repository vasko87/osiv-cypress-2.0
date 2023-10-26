import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";

class AuszahlungTab {
  constructor() {
    this.elements = {
      adresseAuszahlungForm :() => cy.get(`[akid='sAdresseAuszahlungForm']`),
      adresseDropdown          : () => cy.get(`[akid$='-fremdadressekurzadresse']`)
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.adresseAuszahlungForm().should("be.visible");
    return this;
  }

  checkAdresseDropdownContains(value) {
    pageBase.checkDropdownSelectedValueContains(this.elements.adresseDropdown(), value, true);
    return this;
  }
}

export default AuszahlungTab;
