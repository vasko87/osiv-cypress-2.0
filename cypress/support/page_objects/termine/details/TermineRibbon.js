import RibbonBase from "./../../../base/RibbonBase";

class TermineRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      terminErledigenBtn : () => this.elements.ribbonBlock().find("[title='Termin erledigen']")
    };
  }

  clickTerminErledigenBtn() {
    this.elements.terminErledigenBtn().should("be.visible").click();
    return this;
  }

}

export default TermineRibbon;
