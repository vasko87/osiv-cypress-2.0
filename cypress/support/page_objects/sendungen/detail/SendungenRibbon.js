import RibbonBase from "./../../../base/RibbonBase";

class EntscheidRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      abschliessenBtn : () => this.elements.ribbonBlock().find("[title='Abschliessen']"),
      adressatOffnenBtn : () => this.elements.ribbonBlock().find("[title='Adressat öffnen']")
    };
  }

  clickAbschliessenBtn() {
    this.elements.abschliessenBtn().click();
    return this;
  }
  clickAdressatOffnenBtn() {
    this.elements.adressatOffnenBtn().click();
    return this;
  }
}
export default EntscheidRibbon;
