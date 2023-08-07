import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";

class AbschlussEingliederungPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      abschliessenForm                : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm']"),
      resultatDropdown                : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-resultatbez']"),
      artDropdown                     : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-resultatavbez']"),
      artMassnahmeDropdown            : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-artmassnahmebez']"),
      pensumDropdown                  : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-weivvollzeitteilzeitbez']"),
      bearbeiterFolgeEntscheidDropdown: () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-sachbearbeiterbez']"),
      benutzerDropdown                : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-rentenfragebez']"),
      rentenfrageDropdown             : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-rentenfragepruefendynselect']"),
      meldungFolgeEntscheidTextarea   : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-FolgeEntscheidMeldung'] textarea"),
      auftragsText   : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-folgeauftragstext'] input"),
      rentenfrageFieldsSection        : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-rentenfragefieldset']"),
      folgeAuftragAnDropdown                  : () => this.elements.modalWindow().find("[akid='EingliederungAbschliessenForm-folgeauftragbearbeiterbez']")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.elements.abschliessenForm().should("be.visible");
    return this;
  }

  selectResultatDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.resultatDropdown(), value);
    return this;
  }

  selectResultatDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.resultatDropdown(), index);
    return this;
  }

  checkResultatDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.resultatDropdown(), value);
    return this;
  }

  selectArtDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.artDropdown(), value);
    return this;
  }

  checkArtDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.artDropdown(), value);
    return this;
  }

  selectArtDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.artDropdown(), index);
    return this;
  }

  selectArtMassnahmeDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.artMassnahmeDropdown(), value);
    return this;
  }

  checkArtMassnahmeDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.artMassnahmeDropdown(), value);
    return this;
  }

  selectPensumDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.pensumDropdown(), value);
    return this;
  }

  selectPensumDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.pensumDropdown(), index);
    return this;
  }

  checkPensumDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.pensumDropdown(), value);
    return this;
  }

  selectFolgeAuftragAnDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.folgeAuftragAnDropdown(), value);
    return this;
  }

  selectFolgeAuftragAnDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.folgeAuftragAnDropdown(), index);
    return this;
  }

  selectBearbeiterFolgeEntscheidDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.bearbeiterFolgeEntscheidDropdown(), value);
    return this;
  }

  checkBearbeiterFolgeEntscheidDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.bearbeiterFolgeEntscheidDropdown(), value);
    return this;
  }

  selectBenutzerDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.benutzerDropdown(), value);
    return this;
  }

  checkBenutzerDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.benutzerDropdown(), value);
    return this;
  }

  selectRentenfrageDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.rentenfrageDropdown(), value);
    return this;
  }

  selectRentenfrageDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.rentenfrageDropdown(), index);
    return this;
  }

  checkRentenfrageDropdown(value) {
    pageBase.checkDropdownSelectedValue(this.elements.rentenfrageDropdown(), value);
    return this;
  }

  setMeldungFolgeEntscheidTextarea(value) {
    this.elements.meldungFolgeEntscheidTextarea().should("be.visible").type(value);
    return this;
  }

  setAuftragsText(value) {
    this.elements.auftragsText().should("be.visible").type(value);
    return this;
  }

  checkMeldungFolgeEntscheidTextarea(value) {
    this.elements.meldungFolgeEntscheidTextarea().should("have.value", value);
    return this;
  }

  checkRentenfrageFieldsSectionVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.rentenfrageFieldsSection(), isVisible);
    return this;
  }
}

export default AbschlussEingliederungPopup;
