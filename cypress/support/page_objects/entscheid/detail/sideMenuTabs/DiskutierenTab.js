import pageBase from "../../../../base/PageBase";

class DiskutierenTab {
  constructor() {
    this.elements = {
      arztDropdown: () => cy.get("[akid='DiskutierenForm-arztbearbeiter']"),
      juristDropdown: () => cy.get("[akid='DiskutierenForm-juristbearbeiter']"),
      sachbearbeiterDropdown: () => cy.get("[akid='DiskutierenForm-sachbearbeiter']"),
      kaderDropdown: () => cy.get("[akid='DiskutierenForm-kaderbearbeiter']"),
      direktionDropdown: () => cy.get("[akid='DiskutierenForm-direktionbearbeiter']"),
      diskutierenFuerAlleToggleCheckbox: () => cy.get("[akid='DiskutierenForm-EndDiskutierenFuerAlleToggle']"),
      meldungTextarea: () => cy.get("[akid='DiskutierenForm-EndDiskutierenMeldung'] textarea")
    };
  }

  selectArztDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.arztDropdown(), value);
    return this;
  }

  selectJuristDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.juristDropdown(), value);
    return this;
  }

  selectSachbearbeiterDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.sachbearbeiterDropdown(), value);
    return this;
  }

  selectKaderDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.kaderDropdown(), value);
    return this;
  }

  selectDirektionDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.direktionDropdown(), value);
    return this;
  }

  setDiskutierenFuerAlleToggleCheckboxSelected(isSelected) {
    pageBase.setCheckboxChecked(this.elements.diskutierenFuerAlleToggleCheckbox(), isSelected);
    return this;
  }

  setMeldungTextarea(value) {
    this.elements.meldungTextarea().type(value);
    return this;
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
  }
}

export default DiskutierenTab;
