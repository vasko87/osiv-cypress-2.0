import constants from "../../helpers/Constants";

class ModalWindowBase {
  static css = "[class='dhxwin_active'][modalwindow='true']";

  constructor() {
    this.elements = {
      modalWindow : () => cy.get(ModalWindowBase.css, {timeout:constants.DEFAULT_TIMEOUT}),
      okBtn: () => this.elements.modalWindow().find('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]'),
      bestatigenBtn: () => this.elements.modalWindow().find('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Bestätigen"]'),
      abbrechenBtn: () => this.elements.modalWindow().find('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Abbrechen"]'),
      speichernBtn: () => this.elements.modalWindow().find('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Speichern"]'),
      toolbar: () => cy.get(ModalWindowBase.css).find("[class='dhx_cell_toolbar_def']")
    };
  }

  waitForLoaded() {
    this.elements.modalWindow().should("be.visible");
    return this;
  }

  clickOkBtn() {
    this.waitForLoaded();
    this.elements.okBtn().should("be.visible").click();
    return this;
  }

  clickBestatigenBtn() {
    this.waitForLoaded();
    this.elements.bestatigenBtn().should("be.visible").click();
    return this;
  }

  clickAbbrechenBtn() {
    this.waitForLoaded();
    this.elements.abbrechenBtn().should("be.visible").click();
    return this;
  }

  clickSpeichernBtn() {
    this.waitForLoaded();
    this.elements.speichernBtn().should("be.visible").click();
    return this;
  }

  focusToolbar() {
    this.elements.toolbar().should("be.visible").click();
    return this;
  }
}

export default ModalWindowBase;
