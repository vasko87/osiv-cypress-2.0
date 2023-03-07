import PageBase from "../../../../base/PageBase";

class HilflosigkeitTab extends PageBase {
  constructor() {
    super();
    const pageBase = this;
    this.elements = {
      artderInvaliditatDropdown : () => cy.get("[akid='EntscheidHilflosigkeitForm-verfahrenbez']"),
      ausgleichskasseDropdown   : () => cy.get("[akid='EntscheidHilflosigkeitForm-akbez']"),
      anAuskleidenDate          : () => cy.get("[akid='EntscheidHilflosigkeitForm-aakvondat'] input"),
      aufstehenAbsitzenDate     : () => cy.get("[akid='EntscheidHilflosigkeitForm-aaavondat'] input"),
      essenDate                 : () => cy.get("[akid='EntscheidHilflosigkeitForm-essvondat'] input"),
      ablaufWartefristDate      : () => cy.get("[akid='EntscheidHilflosigkeitForm-re_ablauf_wf'] input"),
      persUebvondatDate : () => cy.get("[akid='EntscheidHilflosigkeitForm-uebvondat'] input"),
      whnvondatDate : () => cy.get("[akid='EntscheidHilflosigkeitForm-whnvondat'] input")
    };

    this.wartefristBlock = {
      wFGradTxt    : () => cy.get("[akid='EntscheidWartefristForm-augradds'] input"),
      tageTxt      : () => cy.get("[akid='EntscheidWartefristForm-audauer'] input"),
      grenzgradTxt : () => cy.get("[akid='EntscheidWartefristForm-re_au_grenzgrad'] input"),

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
      beginnDate         : () => cy.get("[akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(1)"),
      endeDate           : () => cy.get("[akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(2)"),
      anzahlTageTxt      : () => cy.get("[akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(3)"),
      hEGradinPersentTxt : () => cy.get("[akid='WartefristQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(4)"),

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
      hEGradDropdown : () => cy.get("[akid='EntscheidHEGradBerechnungForm-beginnhebez']"),
      beginnDate     : () => cy.get("[akid='EntscheidHEGradBerechnungForm-beginn_dat'] input"),

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
      hEGradAbTxt : () => cy.get("[akid='HeGradQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(1)"),
      hEAbTxt     : () => cy.get("[akid='HeGradQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(2)"),
      hEGradTxt   : () => cy.get("[akid='HeGradQueryGrid'] tr[class=' ev_material rowselected'] td:nth-child(3)"),

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

  selectArtderInvaliditatDropdown(value) {
    this.selectInDropdownContains(this.alltaglicheLebensverrichtungBlock.artderInvaliditatDropdown(), value);
    return this;
  }

  selectAusgleichskasseDropdown(value) {
    this.selectInDropdownContains(this.alltaglicheLebensverrichtungBlock.ausgleichskasseDropdown(), value);
    return this;
  }

  setAnAuskleidenDate(date) {
    this.alltaglicheLebensverrichtungBlock.anAuskleidenDate().type(date);
    return this;
  }

  setAufstehenAbsitzenDate(date) {
    this.alltaglicheLebensverrichtungBlock.aufstehenAbsitzenDate().type(date);
    return this;
  }

  setEssenDate(date) {
    this.alltaglicheLebensverrichtungBlock.essenDate().type(date);
    return this;
  }

  setPersUebvondatDate(date) {
    this.alltaglicheLebensverrichtungBlock.persUebvondatDate().type(date);
    return this;
  }

  setWhnvondatDate(date) {
    this.alltaglicheLebensverrichtungBlock.whnvondatDate().type(date);
    return this;
  }

  checkAblaufWartefristDate(value) {
    this.ablaufWartefristDate().should("have.value", value);
    return this;
  }

}

export default HilflosigkeitTab;
