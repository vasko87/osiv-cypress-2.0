import ModalWindowBase from "../../../standalone/popup/ModalWindowBase";
import constants from "../../../helpers/Constants";
import pageBase from "../../../base/PageBase";
import VirtualViewer from "../../../standalone/VirtualViewer";

class DruckUndVersandPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      druckauftragCreateDialog: () => this.elements.modalWindow().find("[akid='SimpleSwatTabbar']")
    };

    this.nav = {
      druckVorschauTab: () => this.elements.druckauftragCreateDialog().find("[akid='SimpleSwatTabbar-Druck-Vorschau']"),
      druckVersandTab : () => this.elements.druckauftragCreateDialog().find("[akid='SimpleSwatTabbar-Druck/Versand']"),

      navigateDruckVorschauTab() {
        this.druckVorschauTab().should("be.visible").click();
        return this;
      },

      navigateDruckVersandTab() {
        this.druckVersandTab().should("be.visible").click();
        return this;
      }
    };

    this.druckVersandTab = {
      druckerBenutzerDropdown: () => this.elements.druckauftragCreateDialog().find("[akid='DruckauftragDetailForm-drucker_benutzer']"),
      versandDate: () => this.elements.druckauftragCreateDialog().find("[akid='DruckauftragDetailForm-versand_dat'] input"),

      selectDruckerBenutzerDropdown(value) {
        pageBase.selectInDropdownContains(this.druckerBenutzerDropdown(), value);
        return this;
      },

      setVersandDate(date) {
        this.versandDate().should("be.enabled").click().clear().type(date);
        return this;
      }
    };

    this.druckVorschauTab = {
      virtualViewer: () => new VirtualViewer(super.css)
    };
  }

  waitForLoaded() {
    this.elements.druckauftragCreateDialog().should("be.visible");
    pageBase.waitForLoadingDisappears();
    cy.wait(2000);
    return this;
  }

}

export default DruckUndVersandPopup;
