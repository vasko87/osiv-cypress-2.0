import PageBase from "../../../../base/PageBase";
import dateHelper from "../../../../helpers/DateHelper";

class HilflosigkeitTab extends PageBase {
  constructor() {
    super();
    const pageBase = this;
    const activeFormCss = "[class='dhxwin_active']";
    this.allgemeineAngabenBlock = {
      artderInvaliditatDropdown: () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-verfahrenbez']`),
      ausgleichskasseDropdown  : () => cy.get(`${activeFormCss}  [akid='EntscheidHilflosigkeitForm-akbez']`),
      ablaufWartefristDate     : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-re_ablauf_wf'] input`),

      selectArtderInvaliditatDropdown(value) {
        this.selectInDropdownContains(this.artderInvaliditatDropdown(), value);
        return this;
      },

      selectAusgleichskasseDropdown(value) {
        this.selectInDropdownContains(this.ausgleichskasseDropdown(), value);
        return this;
      },

      checkAblaufWartefristDate(value) {
        this.ablaufWartefristDate().should("have.value", value);
        return this;
      }
    };

    this.alltaglicheLebensverrichtungBlock = {
      anAuskleidenDate     : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-aakvondat'] input`),
      aufstehenAbsitzenDate: () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-aaavondat'] input`),
      essenDate            : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-essvondat'] input`),
      korperpflegeDate     : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-kpfvondat'] input`),
      verrichtenDerNDDate  : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-vdnvondat'] input`),
      fortbewegungDate     : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-fbwvondat'] input`),
      medPflegeDate        : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-mpfvondat'] input`),
      persUebvondatDate    : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-uebvondat'] input`),

      setAnAuskleidenDate(date) {
        this.anAuskleidenDate().should("be.enabled").click().type(date);
        return this;
      },

      clearAnAuskleidenDate() {
        this.anAuskleidenDate().should("be.enabled").clear();
        return this;
      },

      setAufstehenAbsitzenDate(date) {
        this.aufstehenAbsitzenDate().should("be.enabled").click().type(date);
        return this;
      },

      clearAufstehenAbsitzenDate() {
        this.aufstehenAbsitzenDate().should("be.enabled").clear();
        return this;
      },

      setEssenDate(date) {
        this.essenDate().should("be.enabled").click().type(date);
        return this;
      },

      clearEssenDate() {
        this.essenDate().should("be.enabled").clear();
        return this;
      },

      setKorperpflegeDate(date) {
        this.korperpflegeDate().should("be.enabled").click().type(date);
        return this;
      },

      clearKorperpflegeDate() {
        this.korperpflegeDate().should("be.enabled").clear();
        return this;
      },

      setVerrichtenDerNDDate(date) {
        this.verrichtenDerNDDate().should("be.enabled").click().type(date);
        return this;
      },

      clearVerrichtenDerNDDate() {
        this.verrichtenDerNDDate().should("be.enabled").clear();
        return this;
      },

      setFortbewegungDate(date) {
        this.fortbewegungDate().should("be.enabled").click().type(date);
        return this;
      },

      clearFortbewegungDate() {
        this.fortbewegungDate().should("be.enabled").clear();
        return this;
      },

      setMedPflegeDateDate(date) {
        this.medPflegeDate().should("be.enabled").click().type(date);
        return this;
      },

      clearMedPflegeDate() {
        this.medPflegeDate().should("be.enabled").clear();
        return this;
      },

      setPersUebvondatDate(date) {
        this.persUebvondatDate().should("be.enabled").click().type(date);
        return this;
      },

      clearPersUebvondatDate() {
        this.persUebvondatDate().should("be.enabled").clear();
        return this;
      },

      setValuesInFields(valueList) {
        if (valueList.anAuskleidenDate) {
          this.setAnAuskleidenDate(dateHelper.getCurrentDate());
        }
        if (valueList.aufstehenAbsitzenDate) {
          this.setAufstehenAbsitzenDate(dateHelper.getCurrentDate());
        }
        if (valueList.essenDate) {
          this.setEssenDate(dateHelper.getCurrentDate());
        }
        if (valueList.korperpflegeDate) {
          this.setKorperpflegeDate(dateHelper.getCurrentDate());
        }
        if (valueList.verrichtenDerNDDate) {
          this.setVerrichtenDerNDDate(dateHelper.getCurrentDate());
        }
        if (valueList.fortbewegungDate) {
          this.setFortbewegungDate(dateHelper.getCurrentDate());
        }
        if (valueList.medPflegeDate) {
          this.setMedPflegeDateDate(dateHelper.getCurrentDate());
        }
        if (valueList.persUebvondatDate) {
          this.setPersUebvondatDate(dateHelper.getCurrentDate());
        }
      },

      clearFields(valueList) {
        if (valueList.anAuskleidenDate) {
          this.clearAnAuskleidenDate();
        }
        if (valueList.aufstehenAbsitzenDate) {
          this.clearAufstehenAbsitzenDate();
        }
        if (valueList.essenDate) {
          this.clearEssenDate();
        }
        if (valueList.korperpflegeDate) {
          this.clearKorperpflegeDate();
        }
        if (valueList.verrichtenDerNDDate) {
          this.clearVerrichtenDerNDDate();
        }
        if (valueList.fortbewegungDate) {
          this.clearFortbewegungDate();
        }
        if (valueList.medPflegeDate) {
          this.clearMedPflegeDate();
        }
        if (valueList.persUebvondatDate) {
          this.clearPersUebvondatDate();
        }
      }
    };

    this.lebenspraktischeBegleitungBlock = {
      whnvondatDate : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-whnvondat'] input`),
      begleitungDate: () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-begvondat'] input`),
      isolationDate : () => cy.get(`${activeFormCss} [akid='EntscheidHilflosigkeitForm-isovondat'] input`),

      setWhnvondatDate(date) {
        this.whnvondatDate().should("be.enabled").type(date);
        return this;
      },

      clearWhnvondatDate() {
        this.whnvondatDate().should("be.enabled").clear();
        return this;
      },

      setBegleitungDate(date) {
        this.begleitungDate().should("be.enabled").type(date);
        return this;
      },

      clearBegleitungDate() {
        this.begleitungDate().should("be.enabled").clear();
        return this;
      },

      setIsolationDate(date) {
        this.isolationDate().should("be.enabled").type(date);
        return this;
      },

      clearIsolationDate() {
        this.isolationDate().should("be.enabled").clear();
        return this;
      },

      setValuesInFields(valueList) {
        if (valueList.whnvondatDate) {
          this.setWhnvondatDate(dateHelper.getCurrentDate());
        }
        if (valueList.begleitungDate) {
          this.setBegleitungDate(dateHelper.getCurrentDate());
        }
        if (valueList.isolationDate) {
          this.setIsolationDate(dateHelper.getCurrentDate());
        }
      },

      clearFields(valueList) {
        if (valueList.whnvondatDate) {
          this.clearWhnvondatDate();
        }
        if (valueList.begleitungDate) {
          this.clearBegleitungDate();
        }
        if (valueList.isolationDate) {
          this.clearIsolationDate();
        }
      }
    };

    this.wartefristBlock = {
      wFGradTxt   : () => cy.get(`${activeFormCss} [akid='EntscheidWartefristForm-augradds'] input`),
      tageTxt     : () => cy.get(`${activeFormCss} [akid='EntscheidWartefristForm-audauer'] input`),
      grenzgradTxt: () => cy.get(`${activeFormCss} [akid='EntscheidWartefristForm-re_au_grenzgrad'] input`),

      checkWFGradTxt(value) {
        this.wFGradTxt().should("have.value", value);
        return this;
      },

      checkTageTxt(value) {
        this.tageTxt().should("have.value", value);
        return this;
      },

      checkGrenzgradTxt(value) {
        this.grenzgradTxt().should("have.value", value);
        return this;
      }
    };

    this.wartefristVerlaufBlock = {
      beginnDate        : () => cy.get(`${activeFormCss} [akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(1)`),
      endeDate          : () => cy.get(`${activeFormCss} [akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(2)`),
      anzahlTageTxt     : () => cy.get(`${activeFormCss} [akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(3)`),
      hEGradinPersentTxt: () => cy.get(`${activeFormCss} [akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(4)`),

      checkBeginnDate(value) {
        this.beginnDate().should("have.text", value);
        return this;
      },

      checkEndeDate(value) {
        this.endeDate().should("have.text", value);
        return this;
      },

      checkAnzahlTageTxt(value) {
        this.anzahlTageTxt().should("contain.text", value);
        return this;
      },

      checkHEGradinPersentTxt(value) {
        this.hEGradinPersentTxt().should("contain.text", value);
        return this;
      }
    };

    this.hEGradBlock = {
      hEGradDropdown: () => cy.get(`${activeFormCss} [akid='EntscheidHEGradBerechnungForm-beginnhebez']`),
      beginnDate    : () => cy.get(`${activeFormCss} [akid='EntscheidHEGradBerechnungForm-beginn_dat'] input`),

      checkHEGradDropdown(value) {
        pageBase.checkDropdownSelectedValue(this.hEGradDropdown(), value);
        return this;
      },

      checkBeginnDate(value) {
        this.beginnDate().should("have.value", value);
        return this;
      }
    };

    this.hEGradVerlaufBlock = {
      hEGradAbTxt: () => cy.get(`${activeFormCss} [akid='HeGradQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(1)`),
      hEAbTxt    : () => cy.get(`${activeFormCss} [akid='HeGradQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(2)`),
      hEGradTxt  : () => cy.get(`${activeFormCss} [akid='HeGradQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(3)`),

      checkHEGradAbTxt(value) {
        this.hEGradAbTxt().should("have.text", value);
        return this;
      },

      checkHEAbTxt(value) {
        this.hEAbTxt().should("have.text", value);
        return this;
      },

      checkHEGradTxt(value) {
        this.hEGradTxt().should("have.text", value);
        return this;
      }
    };
  }
}

export default HilflosigkeitTab;
