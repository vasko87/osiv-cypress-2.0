import dateHelper from "../../../../helpers/DateHelper";
import constants from "../../../../helpers/Constants";
import helpes from "../../../../helpers/HelperObject";
import pageBase from "../../../../base/PageBase";

class HilflosigkeitTab {
  constructor() {
    this.allgemeineAngabenBlock = {
      artderInvaliditatDropdown: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-verfahrenbez']`),
      ausgleichskasseDropdown  : () => cy.get(`${constants.CSS_ACTIVE_FORM}  [akid='EntscheidHilflosigkeitForm-akbez']`),
      ablaufWartefristDate     : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-re_ablauf_wf'] input`),
      vorwAufenthaltDropdown   : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid="EntscheidHilflosigkeitForm-aufenthaltbez"]`),
      befristungDate           : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid="EntscheidHilflosigkeitForm-ende_dat"] input`),
      revisionDate             : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid="EntscheidHilflosigkeitForm-revision_dat"] input`),
      bemerkungAKTextarea      : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid="EntscheidHilflosigkeitForm-ak_bem"] textarea`),

      selectArtderInvaliditatDropdown(value) {
        pageBase.selectInDropdownContains(this.artderInvaliditatDropdown(), value);
        return this;
      },

      checkArtderInvaliditatDropdownReadonly(isReadonly) {
        pageBase.checkDropdownReadonly(this.artderInvaliditatDropdown(), isReadonly);
        return this;
      },

      selectAusgleichskasseDropdown(value) {
        pageBase.selectInDropdownContains(this.ausgleichskasseDropdown(), value);
        return this;
      },

      checkAusgleichskasseDropdownReadonly(isReadonly) {
        pageBase.checkDropdownReadonly(this.ausgleichskasseDropdown(), isReadonly);
        return this;
      },

      selectVorwAufenthaltDropdown(value) {
        pageBase.selectInDropdownContains(this.vorwAufenthaltDropdown(), value);
        return this;
      },

      checkVorwAufenthaltDropdownReadonly(isReadonly) {
        pageBase.checkDropdownReadonly(this.vorwAufenthaltDropdown(), isReadonly);
        return this;
      },

      checkAblaufWartefristDate(value) {
        this.ablaufWartefristDate().should("have.value", value);
        return this;
      },

      checkBefristungDateReadonly(isReadonly) {
        pageBase.checkElementReadonly(this.befristungDate(), isReadonly);
        return this;
      },

      checkRevisionDateReadonly(isReadonly) {
        pageBase.checkElementReadonly(this.revisionDate(), isReadonly);
        return this;
      },

      checkBemerkungAKTextareaReadonly(isReadonly) {
        pageBase.checkElementReadonly(this.bemerkungAKTextarea(), isReadonly);
        return this;
      }
    };

    this.alltaglicheLebensverrichtungBlock = {
      anAuskleidenDate     : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-aakvondat'] input`),
      aufstehenAbsitzenDate: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-aaavondat'] input`),
      essenDate            : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-essvondat'] input`),
      korperpflegeDate     : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-kpfvondat'] input`),
      verrichtenDerNDDate  : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-vdnvondat'] input`),
      fortbewegungDate     : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-fbwvondat'] input`),
      medPflegeDate        : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-mpfvondat'] input`),
      persUebvondatDate    : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-uebvondat'] input`),

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

      fillInFieldsBulk(valueList) {
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
      whnvondatDate : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-whnvondat'] input`),
      begleitungDate: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-begvondat'] input`),
      isolationDate : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHilflosigkeitForm-isovondat'] input`),

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

      fillInFieldsBulk(valueList) {
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
      wFGradTxt   : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidWartefristForm-augradds'] input`),
      tageTxt     : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidWartefristForm-audauer'] input`),
      grenzgradTxt: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidWartefristForm-re_au_grenzgrad'] input`),

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
      },

      verifyValuesBulk(data) {
        if (data.wFGradTxt) {
          this.checkWFGradTxt(data.wFGradTxt);
        }
        if (data.tageTxt === "default") {
          this.checkTageTxt(helpes.date.getDaysDiffFromTodayTillSameDayNextYear());
        } else if (data.tageTxt) {
          this.checkTageTxt(data.tageTxt);
        }
        if (data.grenzgradTxt) {
          this.checkGrenzgradTxt(data.grenzgradTxt);
        }
      }
    };

    this.wartefristVerlaufBlock = {
      beginnDate        : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(1)`),
      endeDate          : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(2)`),
      anzahlTageTxt     : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(3)`),
      hEGradinPersentTxt: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(4)`),

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
      },

      verifyValuesBulk(data) {
        if (data.beginnDate) {
          this.checkBeginnDate(data.beginnDate);
        }
        if (data.endeDate) {
          this.checkEndeDate(data.endeDate);
        }
        if (data.anzahlTageTxt) {
          this.checkAnzahlTageTxt(data.anzahlTageTxt);
        }
        if (data.hEGradinPersentTxt) {
          this.checkHEGradinPersentTxt(data.hEGradinPersentTxt);
        }
      }
    };

    this.hEGradBlock = {
      hEGradDropdown: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHEGradBerechnungForm-beginnhebez']`),
      beginnDate    : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidHEGradBerechnungForm-beginn_dat'] input`),

      checkHEGradDropdown(value) {
        pageBase.checkDropdownSelectedValue(this.hEGradDropdown(), value);
        return this;
      },

      checkBeginnDate(value) {
        this.beginnDate().should("have.value", value);
        return this;
      },

      verifyValuesBulk(data) {
        if (data.hEGradDropdown) {
          this.checkHEGradDropdown(data.hEGradDropdown);
        }
        if (data.beginnDate) {
          this.checkBeginnDate(data.beginnDate);
        }
      }
    };

    this.hEGradVerlaufBlock = {
      hEGradAbTxt: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='HeGradQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(1)`),
      hEAbTxt    : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='HeGradQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(2)`),
      hEGradTxt  : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='HeGradQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(3)`),

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
      },

      verifyValuesBulk(data) {
        if (data.hEGradAbTxt) {
          this.checkHEGradAbTxt(data.hEGradAbTxt);
        }
        if (data.hEAbTxt) {
          this.checkHEAbTxt(data.hEAbTxt);
        }
        if (data.hEGradTxt) {
          this.checkHEGradTxt(data.hEGradTxt);
        }
      }
    };
  }
}

export default HilflosigkeitTab;
