import RibbonBase from "./../../../base/RibbonBase";
import DruckUndVersandPopup from "../popup/DruckUndVersandPopup";

class EntscheidRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      abschliessenBtn : () => this.elements.ribbonBlock().find("[title='Abschliessen']"),
      adressatOffnenBtn : () => this.elements.ribbonBlock().find("[title='Adressat öffnen']"),
      variablenSpeichernBtn : () => this.elements.ribbonBlock().find("[title='Variablen speichern']"),
      druckVersandBtn : () => this.elements.ribbonBlock().find("[title='Druck/Versand']")
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

  clickVariablenSpeichernBtn() {
    this.elements.variablenSpeichernBtn().click();
    return this;
  }

  clickDruckVersandBtn() {
    this.elements.druckVersandBtn().click();
    return new DruckUndVersandPopup();
  }
}
export default EntscheidRibbon;
