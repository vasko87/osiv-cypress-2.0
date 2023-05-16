import DocumentValidator from "../../../../standalone/DocumentValidator";
import pageBase from "../../../../base/PageBase";
import GridBase from "../../../../base/GridBase";
import TxtEditor from "../../../../standalone/TxtEditor";

class FreitexteTab {
  constructor() {
    this.navigation = {
      begrundungTab           : () => cy.get("[akid='EntscheidFreitextTabbar-Begründung']"),
      vorbescheidTab          : () => cy.get("[akid='EntscheidFreitextTabbar-Vorbescheid']"),
      verfugungBeiblattAKTab  : () => cy.get("[akid='EntscheidFreitextTabbar-Verfügung / Beiblatt AK']"),
      mitteilungAKTab         : () => cy.get("[akid='EntscheidFreitextTabbar-Mitteilung AK']"),
      gesetzlicheGrundlagenTab: () => cy.get("[akid='EntscheidFreitextTabbar-Gesetzliche Grundlagen']"),

      navigateToBegrundungTab() {
        this.begrundungTab().should("be.visible").click();
        return this;
      },

      navigateToVorbescheidTab() {
        this.vorbescheidTab().should("be.visible").click();
        return this;
      },

      navigateToVerfugungBeiblattAKTab() {
        this.verfugungBeiblattAKTab().should("be.visible").click();
        return this;
      },

      navigateToMitteilungAKTab() {
        this.mitteilungAKTab().should("be.visible").click();
        return this;
      },

      navigateToGesetzlicheGrundlagenTab() {
        this.gesetzlicheGrundlagenTab().should("be.visible").click();
        return this;
      },

      checkGesetzlicheGrundlagenTabColor(color, shouldHave) {
        pageBase.checkElementBorderLeftColor(this.gesetzlicheGrundlagenTab(), color, shouldHave);
        return this;
      }
    };

    this.begrundungTab = {
      txtEditor: new TxtEditor()
    };

    this.verfugungBeiblattAKTab = {
      docValidator     : () => new DocumentValidator("[akid='VerfuegungBeiblattHTMLtextForm']"),
      bausteinGrid     : () => new GridBase("[akid='BausteinlisteIndiVerfuegungBeiblattGrid']"),
      generatedTextForm: () => cy.get("[id='cke_3_contents']"),

      /**
       * Returns a List of all values from the Bezeichnung column
       * @returns {Cypress.Chainable<JQuery<*[] extends ArrayLike<infer T> ? T : never>>}
       */
      getBausteinGridBezeichnungColumnValues() {
        this.bausteinGrid().waitGridViewLoaded();
        return this.bausteinGrid().getAllColumnValues("Bezeichnung");
      },

      checkBausteinGridBezeichnungColumnHasValue(value, shouldHave) {
        this.getBausteinGridBezeichnungColumnValues().then((valList) => {
          expect(valList.some((v) => v === value))
            .to.be.equal(shouldHave, `Assert 'Bezeichnung' column should have value = '${value}'`);
        });
      }
    };

    this.gesetzlicheGrundlagenTab = {
      docValidator: () => new DocumentValidator("[akid='GesetzlicheGrundlagenHTMLTextForm']")
    };
  }
}

export default FreitexteTab;
