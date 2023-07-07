import RibbonBase from "../../../base/RibbonBase";
import AbgabeRegistrierenPopup from "./popups/AbgabeRegistrierenPopup";

class VersicherteRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      agabeKontrollierenBtn : () => this.elements.ribbonBlock().find("[title='Abgabe kontrollieren']"),
      abgabeRegistrierenBtn : () => this.elements.ribbonBlock().find("[title='Abgabe Registrieren']"),
      abgabeDurchfuhrenBtn : () => this.elements.ribbonBlock().find("[title='Abgabe durchführen']")
    };
  }

  clickAgabeKontrollierenBtn() {
    this.elements.agabeKontrollierenBtn().should("be.visible").click();
    return this;
  }

  checkAgabeKontrollierenBtnDisabled(isDisabled) {
    this.checkMenuItemDisable(this.elements.agabeKontrollierenBtn(), isDisabled);
    return this;
  }

  clickAbgabeRegistrierenBtn() {
    this.elements.abgabeRegistrierenBtn().should("be.visible").click();
    return new AbgabeRegistrierenPopup();
  }

  checkAbgabeRegistrierenBtnDisabled(isDisabled) {
    this.checkMenuItemDisable(this.elements.abgabeRegistrierenBtn(), isDisabled);
    return this;
  }

  clickAbgabeDurchfuhrenBtn() {
    this.elements.abgabeDurchfuhrenBtn().should("be.visible").click();
    return this;
  }

  checkAbgabeDurchfuhrenBtnDisabled(isDisabled) {
    this.checkMenuItemDisable(this.elements.abgabeDurchfuhrenBtn(), isDisabled);
    return this;
  }
}
export default VersicherteRibbon;
