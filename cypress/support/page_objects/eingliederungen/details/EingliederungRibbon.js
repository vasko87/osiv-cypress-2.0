import RibbonBase from "./../../../base/RibbonBase";

class EingliederungRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      keinErstgesprachBtn : () => this.elements.ribbonBlock().find("[title='Kein Erstgespräch']")

    };
  }

  clickKeinErstgesprachBtn() {
    this.elements.keinErstgesprachBtn().should("be.visible").click();
    return this;
  }

  checkKeinErstgesprachBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.keinErstgesprachBtn(), isDisabled);
    return this;
  }
}

export default EingliederungRibbon;
