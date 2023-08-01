import RibbonBase from "../../../base/RibbonBase";
import AbschlussEingliederungPopup from "./popups/AbschlussEingliederungPopup";
import DelegationanIVStellePopup from "./popups/DelegationanIVStellePopup";
import pageBase from "../../../base/PageBase";
import EntscheidDetail from "../../entscheid/detail/EntscheidDetail";
import VersicherteDetail from "../../versicherte/detail/VersicherteDetail";

class EingliederungRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      keinErstgesprachBtn : () => this.elements.ribbonBlock().find("[title='Kein Erstgespräch']"),
      delegationAnBtn : () => this.elements.ribbonBlock().find("[title='Delegation an']"),
      delegationBtn : () => this.elements.ribbonBlock().find("[title='Delegation']"),
      delegationAufhebenBtn : () => this.elements.ribbonBlock().find("[title='Delegation aufheben']"),
      abschlussEingliederungBtn : () => this.elements.ribbonBlock().find("[title='Abschluss Eingliederung']"),
      folgeentscheidOffnenBtn : () => this.elements.ribbonBlock().find("[title='Folgeentscheid öffnen']"),
      resultatAnzeigenBtn : () => this.elements.ribbonBlock().find("[title='Resultat anzeigen']"),
      vPOffnenBtn : () => this.elements.ribbonBlock().find("[title='vP öffnen']")
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

  clickDelegationAnBtn() {
    this.elements.delegationAnBtn().invoke("attr", "class").should("not.contain", "item_dis");
    this.elements.delegationAnBtn().should("be.visible").click();
    return new DelegationanIVStellePopup();
  }

  checkDelegationAnBtnExists(isExist) {
    pageBase.checkElementExists(this.elements.delegationAnBtn(), isExist);
    return this;
  }

  checkDelegationBtnExists(isExist) {
    pageBase.checkElementExists(this.elements.delegationBtn(), isExist);
    return this;
  }

  clickDelegationAufhebenBtn() {
    this.elements.delegationAufhebenBtn().should("be.visible").click();
    return this;
  }
  checkDelegationAufhebenBtnDisabled(isDisabled) {
    this.checkMenuItemDisable(this.elements.delegationAufhebenBtn(), isDisabled);
    return this;
  }

  clickAbschlussEingliederungBtn() {
    this.elements.abschlussEingliederungBtn().should("be.visible").click();
    return new AbschlussEingliederungPopup();
  }

  clickVPOffnenBtn() {
    this.elements.vPOffnenBtn().should("be.visible").click();
    return new VersicherteDetail();
  }

  checkAbschlussEingliederungBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.abschlussEingliederungBtn(), isDisabled);
    return this;
  }

  clickFolgeentscheidOffnenBtn() {
    this.elements.folgeentscheidOffnenBtn().should("be.visible").click();
    return new EntscheidDetail();
  }

  checkFolgeentscheidOffnenBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.folgeentscheidOffnenBtn(), isDisabled);
    return this;
  }

  clickResultatAnzeigenBtn() {
    this.elements.resultatAnzeigenBtn().should("be.visible").click();
    return new AbschlussEingliederungPopup();
  }

  checkResultatAnzeigenBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.resultatAnzeigenBtn(), isDisabled);
    return this;
  }
}

export default EingliederungRibbon;
