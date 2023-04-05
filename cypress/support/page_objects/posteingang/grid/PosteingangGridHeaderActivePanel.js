import pageBase from "../../../base/PageBase";

class PosteingangGridHeaderActivePanel {
  constructor() {

    this.elements = {
      posteingangQueryGridDropdown: () => cy.get("[akid='panelHeaderDynSelect-PosteingangQueryGrid'] span[class='select2-selection__arrow']")
    };
  }

  selectPosteingangQueryGridDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.posteingangQueryGridDropdown(), value);
  }

  selectPosteingangQueryGridDropdownAll() {
    this.selectPosteingangQueryGridDropdown("Alle");
  }

  selectPosteingangQueryGridDropdownMine() {
    this.selectPosteingangQueryGridDropdown("Meine Posteingänge");
  }
}

export default PosteingangGridHeaderActivePanel;
