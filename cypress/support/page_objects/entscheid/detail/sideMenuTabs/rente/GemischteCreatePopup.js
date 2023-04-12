import ModalWindowBase from "../../../../../standalone/popup/ModalWindowBase";
import RentePageBase from "./RentePageBase";
import pageBase from "../../../../../base/PageBase";

class GemischteCreatePopup extends RentePageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindowObj = new ModalWindowBase()
    const modalWindow = new ModalWindowBase();

    super.elements = {
      ...this.elements
    };

    this.valideneinkommenBlock = {
      indexierungInFrProJahrTxt     : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-veteuerungjfr']"),
      reallohnerhohungInFrProJahrTxt: () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-verlzuschlagjfr']"),

      setIndexierungInFrProJahrTxt(value) {
        this.indexierungInFrProJahrTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setReallohnerhohungInFrProJahrTxt(value) {
        this.reallohnerhohungInFrProJahrTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      }
    };

    this.invalideneinkommenBlock = {
      lohnartDropdown        : () => this.elements.lohnartDropdown(),
      frInvalideneinkommenTxt: () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-ie_lohn']"),
      sLGKInFrProJahrTxt     : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-iesoziallohnjfr']"),
      abzugInFrProJahrTxt    : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-ieabzugjfr']"),
      jahreslohnInFrTxt      : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-ie_einkommen']"),

      selectLohnartDropdown(value) {
        pageBase.selectInDropdownContains(this.lohnartDropdown(), value);
        return this;
      },

      setFrInvalideneinkommenTxt(value) {
        this.frInvalideneinkommenTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setSLGKInFrProJahrTxt(value) {
        this.sLGKInFrProJahrTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setAbzugInFrProJahrTxt(value) {
        this.abzugInFrProJahrTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setJahreslohnInFrTxt(value) {
        this.jahreslohnInFrTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      }
    };

    this.mischrechnungBlock = {
      anteilInGekvTxt        : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-gekv_anteil'] input"),
      invaliditatInPersentTxt: () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-gekv_inv_grad']"),
      anteilInPersentTxt     : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-gekv_anteil']"),
      anteilInPersent1Txt    : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-sa1_anteil']"),
      anteilInPersent2Txt    : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-sa2_anteil']"),
      invaliditatTxt         : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-gekv_inv_grad']"),
      invaliditat1Txt        : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-sa1_inv_grad']"),
      invaliditat2Txt        : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-sa2_inv_grad']"),
      gewInvTxt              : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-gekvgig'] input"),
      gewInv1Txt             : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-sa1gig'] input"),
      gewInv2Txt             : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-sa2gig'] input"),

      setAnteilInGekvTxt(value) {
        this.anteilInGekvTxt().click().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkAnteilGekvTxt(value) {
        this.anteilInGekvTxt().should("have.value", value);
        return this;
      },

      setAnteilInPersentTxt(value) {
        this.anteilInPersentTxt().click().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setAnteilInPersent1Txt(value) {
        this.anteilInPersent1Txt().click().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setAnteilInPersent2Txt(value) {
        this.anteilInPersent2Txt().click().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setInvaliditat1Txt(value) {
        this.invaliditat1Txt().click().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setInvaliditat2Txt(value) {
        this.invaliditat2Txt().click().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkGewInvTxt(value) {
        this.gewInvTxt().should("have.value", value);
        return this;
      },

      checkGewInv1Txt(value) {
        this.gewInv1Txt().should("have.value", value);
        return this;
      },

      checkGewInv2Txt(value) {
        this.gewInv2Txt().should("have.value", value);
        return this;
      }
    };

    this.invalidenGradRenteBlock = {
      invGradTxt: () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-inv_grad']"),
      renteTxt  : () => cy.get(ModalWindowBase.css).find("[akid='RenteGemischteForm-rente']"),

      setInvGradTxt(value) {
        this.invGradTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkInvGradTxt(value) {
        this.invGradTxt().should("have.visible", value);
        return this;
      },

      checkRenteTxt(value) {
        this.renteTxt().should("have.visible", value);
        return this;
      }
    };
  }

  waitForLoaded() {
    this.modalWindowObj.waitForLoaded();
    return this;
  }
}

export default GemischteCreatePopup;
