import RibbonBase from "../../../base/RibbonBase";

class TermineRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      erledigenBtn : () => this.elements.ribbonBlock().find("[title='Termin erledigen'],[title='Erledigen']")
    };
  }

  clickErledigenBtn() {
    this.elements.erledigenBtn().should("be.visible").click();
    return this;
  }

}

export default TermineRibbon;
