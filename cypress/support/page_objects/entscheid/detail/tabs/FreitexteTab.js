import DocumentValidator from "../../../../helpers/DocumentValidator";
import pageBase from "../../../../base/PageBase";

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
        pageBase.checkElementColor(this.gesetzlicheGrundlagenTab(), color, shouldHave);
        return this;
      }
    };

    this.begrundungTab = {
      textForm: () => cy.get("[akid='BegruendungHTMLTextForm'] [role='textbox']"),

      setTextForm(value) {
        this.textForm().should("be.visible").type(value);
        return this;
      },

      checkTextForm(value) {
        this.textForm().should("have.text", value);
        return this;
      }
    };

    this.verfugungBeiblattAKTab = {
      docValidator     : () => new DocumentValidator("[akid='VerfuegungBeiblattHTMLtextForm']"),
      bausteinGrid     : () => cy.get("[akid='BausteinlisteIndiVerfuegungBeiblattGrid']"),
      generatedTextForm: () => cy.get("[id='cke_3_contents']"),

      checkBausteinGridHasValue(value, hasValue) {
        if (hasValue === true) {
          this.bausteinGrid().contains(value);
        } else {
          this.bausteinGrid().find('[class="objbox"] tbody td').each(($td) => {
            cy.wrap($td).invoke("text").then(text => {
              expect(text).not.contain(value);
            });
          });
        }
        return this;
      }
    };

    this.gesetzlicheGrundlagenTab = {
      docValidator: () => new DocumentValidator("[akid='GesetzlicheGrundlagenHTMLTextForm']")
    };
  }
}

export default FreitexteTab;
