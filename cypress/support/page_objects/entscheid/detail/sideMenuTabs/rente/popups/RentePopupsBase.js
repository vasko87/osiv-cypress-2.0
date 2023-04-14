import pageBase from "../../../../../../base/PageBase";
import ModalWindowBase from "../../../../../../standalone/popup/ModalWindowBase";

class RentePopupsBase extends ModalWindowBase {
  constructor() {
    const modalWindow = super();
    super.elements = {
      ...this.elements
    };

    this.valideneinkommenBlock = {
      indexierungInFrProJahrTxt     : () => cy.get(ModalWindowBase.css).find("[akid$='-veteuerungjfr'] input"),
      reallohnerhohungInFrProJahrTxt: () => cy.get(ModalWindowBase.css).find("[akid$='-verlzuschlagjfr'] input"),

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
      lohnartDropdown                   : () => cy.get(ModalWindowBase.css).find("[akid$='-lohnarttext']"),
      frInvalideneinkommenTxt           : () => cy.get(ModalWindowBase.css).find("[akid$='-ie_lohn'] input"),
      sLGKInFrProJahrTxt                : () => cy.get(ModalWindowBase.css).find("[akid$='-iesoziallohnjfr'] input"),
      sLGKInFrProMonatTxt               : () => cy.get(ModalWindowBase.css).find("[akid$='-iesoziallohnmfr'] input"),
      abzugInFrProJahrTxt               : () => cy.get(ModalWindowBase.css).find("[akid$='-ieabzugjfr'] input"),
      abzugInFrProMonatTxt              : () => cy.get(ModalWindowBase.css).find("[akid$='-ieabzugmfr'] input"),
      inFrProJahrTxt                    : () => cy.get(ModalWindowBase.css).find("[akid$='-ie_einkommen'] input"),
      jahrDesIEkTxt                     : () => cy.get(ModalWindowBase.css).find("[akid$='-ie_jahr'] input"),
      stundenProTagTxt                  : () => cy.get(ModalWindowBase.css).find("[akid$='-ie_std_pro_tag'] input"),
      tageDieWocheTxt                   : () => cy.get(ModalWindowBase.css).find("[akid$='-ie_tag_pro_woche'] input"),
      monatslohnInFrTxt                 : () => cy.get(ModalWindowBase.css).find("[akid$='-iemonatslohn'] input"),
      anzahlMonathLohneTxt              : () => cy.get(ModalWindowBase.css).find("[akid$='-ie_anzahl_ml'] input"),
      soziallohnGewinnkostenInPersentTxt: () => cy.get(ModalWindowBase.css).find("[akid$='-ie_soziallohn'] input"),
      abzugInPersentTxt                 : () => cy.get(ModalWindowBase.css).find("[akid$='-ie_abzug'] input"),

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

      checkSLGKInFrProJahrTxt(value) {
        this.sLGKInFrProJahrTxt().should("have.value", value);
        return this;
      },

      setSLGKInFrProMonatTxt(value) {
        this.sLGKInFrProMonatTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkSLGKInFrProMonatTxt(value) {
        this.sLGKInFrProMonatTxt().should("have.value", value);
        return this;
      },

      setAbzugInFrProJahrTxt(value) {
        this.abzugInFrProJahrTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkAbzugInFrProJahrTxt(value) {
        this.abzugInFrProJahrTxt().should("have.value", value);
        return this;
      },

      setInFrProJahrTxt(value) {
        this.inFrProJahrTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setJahrDesIEkTxt(value) {
        this.jahrDesIEkTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      setStundenProTagTxt(value) {
        this.stundenProTagTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkStundenProTagTxt(value) {
        this.stundenProTagTxt().should("have.value", value);
        return this;
      },

      checkStundenProTagVisible(isVisible) {
        pageBase.checkElementVisible(this.stundenProTagTxt(), isVisible);
        return this;
      },

      setTageDieWocheTxt(value) {
        this.tageDieWocheTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkTageDieWocheTxt(value) {
        this.tageDieWocheTxt().should("have.value", value);
        return this;
      },

      checkTageDieWocheVisible(isVisible) {
        pageBase.checkElementVisible(this.tageDieWocheTxt(), isVisible);
        return this;
      },

      checkMonatslohnInFrTxt(value) {
        this.monatslohnInFrTxt().should("have.value", value);
        return this;
      },

      checkMonatslohnInFrVisible(isVisible) {
        pageBase.checkElementVisible(this.monatslohnInFrTxt(), isVisible);
        return this;
      },

      setAnzahlMonathLohneTxt(value) {
        this.anzahlMonathLohneTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkAnzahlMonathLohneTxt(value) {
        this.anzahlMonathLohneTxt().should("have.value", value);
        return this;
      },

      setSoziallohnGewinnkostenInPersentTxt(value) {
        this.soziallohnGewinnkostenInPersentTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkSoziallohnGewinnkostenInPersentTxt(value) {
        this.soziallohnGewinnkostenInPersentTxt().should("have.value", value);
        return this;
      },

      setAbzugInPersentTxt(value) {
        this.abzugInPersentTxt().clear().type(value);
        modalWindow.focusToolbar();
        return this;
      },

      checkAbzugInFrProMonatTxt(value) {
        this.abzugInFrProMonatTxt().should("have.value", value);
        return this;
      }
    };

    this.mischrechnungBlock = {
      anteilInGekvTxt        : () => cy.get(ModalWindowBase.css).find("[akid$='-gekv_anteil'] input"),
      invaliditatInPersentTxt: () => cy.get(ModalWindowBase.css).find("[akid$='-gekv_inv_grad'] input"),
      anteilInPersentTxt     : () => cy.get(ModalWindowBase.css).find("[akid$='-gekv_anteil'] input"),
      anteilInPersent1Txt    : () => cy.get(ModalWindowBase.css).find("[akid$='-sa1_anteil'] input"),
      anteilInPersent2Txt    : () => cy.get(ModalWindowBase.css).find("[akid$='-sa2_anteil'] input"),
      invaliditatTxt         : () => cy.get(ModalWindowBase.css).find("[akid$='-gekv_inv_grad'] input"),
      invaliditat1Txt        : () => cy.get(ModalWindowBase.css).find("[akid$='-sa1_inv_grad'] input"),
      invaliditat2Txt        : () => cy.get(ModalWindowBase.css).find("[akid$='-sa2_inv_grad'] input"),
      gewInvTxt              : () => cy.get(ModalWindowBase.css).find("[akid$='-gekvgig'] input"),
      gewInv1Txt             : () => cy.get(ModalWindowBase.css).find("[akid$='-sa1gig'] input"),
      gewInv2Txt             : () => cy.get(ModalWindowBase.css).find("[akid$='-sa2gig'] input"),

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
      invGradTxt: () => cy.get(ModalWindowBase.css).find("[akid$='-inv_grad'] input"),
      renteTxt  : () => cy.get(ModalWindowBase.css).find("[akid$='-rente'] input"),

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
}

export default RentePopupsBase;
