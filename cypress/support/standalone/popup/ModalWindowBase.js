import constants from "../../helpers/Constants";
import pageBase from "../../base/PageBase";

class ModalWindowBase {
  static css = `${constants.CSS_ACTIVE_FORM}[modalwindow='true']`;

  constructor() {
    this.elements = {
      modalWindow : () => cy.get(ModalWindowBase.css, {timeout:constants.DEFAULT_TIMEOUT}),
      okBtn: () => this.elements.modalWindow().find('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]'),
      bestatigenBtn: () => this.elements.modalWindow().find('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Bestätigen"]'),
      abbrechenBtn: () => this.elements.modalWindow().find('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Abbrechen"]'),
      speichernBtn: () => this.elements.modalWindow().find('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Speichern"]'),
      toolbar: () => cy.get(ModalWindowBase.css).find("[class='dhx_cell_toolbar_def']"),
      minMaxBtn: () => cy.get(ModalWindowBase.css).find("[class='dhxwin_button dhxwin_button_minmax']"),
      headerElement: () => this.elements.modalWindow().find("[class='dhxwin_hdr']")
    };
  }

  waitForLoaded() {
    this.elements.modalWindow().should("be.visible");
    return this;
  }

  clickOkBtn() {
    this.waitForLoaded();
    this.elements.okBtn().click();
    return this;
  }

  checkOkBtnVisible(isVisible) {
    this.waitForLoaded();
    pageBase.checkElementVisible(this.elements.okBtn(), isVisible);
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

  checkAbbrechenBtnVisible(isVisible) {
    this.waitForLoaded();
    pageBase.checkElementVisible(this.elements.abbrechenBtn(), isVisible);
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

  clickMinMaxBtn() {
    this.waitForLoaded();
    this.elements.minMaxBtn().should("be.visible").click();
    return this;
  }

  checkHeaderColor(color, shouldHave) {
    pageBase.checkBackgroundColor(this.elements.headerElement(), color,  shouldHave);
    return this;
  }
}

export default ModalWindowBase;
