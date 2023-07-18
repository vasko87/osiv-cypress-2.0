import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";
import GridBase from "../../../../base/GridBase";
import constants from "../../../../helpers/Constants";
import IvStellenWahlenPopup from "./ivStellenWahlenPopup/IvStellenWahlenPopup";

class DossierErhaltRegistrierenPopup extends ModalWindowBase {
  constructor() {
    super();
    this.ivStellenWahlenPopup = new IvStellenWahlenPopup();
    super.elements = {
      ...this.elements,
      dossierEreignisDropdown : () => this.elements.modalWindow().find("[akid='DossierErhaltRegistrierenForm-osivdossierereignisdynselect']"),
      dosseirErhaltVonDropdown: () => this.elements.modalWindow().find("[akid='DossierErhaltRegistrierenForm-osivivstelledynselect']"),
      erhaltenAmDate          : () => this.elements.modalWindow().find("[akid='DossierErhaltRegistrierenForm-ereignis_dat'] input")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.elements.dossierEreignisDropdown().should("be.visible");
    return this;
  }

  checkDossierEreignisDropdownVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.dossierEreignisDropdown(), isVisible);
    return this;
  }

  checkDossierEreignisDropdownValidationErrorVisible(text, isVisible) {
    pageBase.checkElementValidationError(this.elements.dossierEreignisDropdown(), text, isVisible);
    return this;
  }

  selectDossierEreignisDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.dossierEreignisDropdown(), value);
    return this;
  }

  checkDosseirErhaltVonDropdownVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.dosseirErhaltVonDropdown(), isVisible);
    return this;
  }

  selectDosseirErhaltVonDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.dosseirErhaltVonDropdown(), value);
    return this;
  }

  checkErhaltenAmDateVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.erhaltenAmDate(), isVisible);
    return this;
  }

  checkDossierEreignisDropdownValueList(expectedValues) {
    pageBase.checkDropdownValuesList(this.elements.dossierEreignisDropdown(), expectedValues);
    return this;
  }

  checkDosseirErhaltVonDropdownCodesValues(expectedCodes, expectedValues) {
    pageBase.checkDropdownCodeValueList(this.elements.dosseirErhaltVonDropdown(), expectedCodes, expectedValues);
    return this;
  }

  clickDosseirErhaltVonDropdownArrow() {
    this.elements.dosseirErhaltVonDropdown().find("[class='select2-selection__arrow']").click();
    return this;
  }

  checkDosseirErhaltVonDropdownContains(value) {
    pageBase.checkDropdownContainsValue(this.elements.dosseirErhaltVonDropdown(), value);
    return this;
  }

  lookupDosseirErhaltVonDropdown(value) {
    this.elements.dosseirErhaltVonDropdown().find("[class='select2-selection__lookup']").click();
    this.ivStellenWahlenPopup.waitForLoaded()
        .sIVStelleGrid.waitGridViewLoaded()
        .dblClickRowWithText(value);
    return this;
  }
}

export default DossierErhaltRegistrierenPopup;
