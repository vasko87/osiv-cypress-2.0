import RibbonBase from "../../../base/RibbonBase";
import AbgabeRegistrierenPopup from "./popups/AbgabeRegistrierenPopup";
import DossierErhaltRegistrierenPopup from "./popups/dossierChronikPopup/DossierErhaltRegistrierenPopup";
import pageBase from "../../../base/PageBase";
import DelegationAbschlussRegistrierenPopup from "./popups/dossierChronikPopup/DelegationAbschlussRegistrierenPopup";

class VersicherteRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      agabeKontrollierenBtn : () => this.elements.ribbonBlock().find("[title='Abgabe kontrollieren']"),
      abgabeRegistrierenBtn : () => this.elements.ribbonBlock().find("[title='Abgabe registrieren']"),
      abgabeDurchfuhrenBtn : () => this.elements.ribbonBlock().find("[title='Abgabe durchführen']"),
      erhaltRegistrierenBtn : () => this.elements.ribbonBlock().find("[title='Erhalt registrieren']"),
      delegationAbschlussBtn : () => this.elements.ribbonBlock().find("[title='Delegation Abschluss']")
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

  clickErhaltRegistrierenBtn() {
    this.elements.erhaltRegistrierenBtn().should("be.visible").click();
    return new DossierErhaltRegistrierenPopup();
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

  clickDelegationAbschlussBtn() {
    this.elements.delegationAbschlussBtn().should("be.visible").click();
    return new DelegationAbschlussRegistrierenPopup();
  }

  checkDelegationAbschlussBtnVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.delegationAbschlussBtn(), isVisible);
    return this;
  }
  checkDelegationAbschlussBtnDisabled(isDisabled) {
    this.checkMenuItemDisable(this.elements.delegationAbschlussBtn(), isDisabled);
    return this;
  }
}
export default VersicherteRibbon;
