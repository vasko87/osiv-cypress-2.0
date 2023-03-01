import PageBase from "../../../../base/PageBase";

class FreitexteTab extends PageBase {
  constructor() {
    super();
    const pageBase = this;
    this.elements = {
      bausteinGrid: () => cy.get('[akid="BausteinlisteIndiVerfuegungBeiblattGrid"]')
    }
  }

  checkBausteinGridHasValue(value, hasValue) {
    if (hasValue === true) {
      this.elements.bausteinGrid().contains(value);
    } else {
      this.elements.bausteinGrid().find('[class="objbox"] tbody td').each(($td) => {
        cy.wrap($td).invoke("text").then(text => {
          expect(text).not.contain(value);
        });
      });
    }
  }

}

export default FreitexteTab;
