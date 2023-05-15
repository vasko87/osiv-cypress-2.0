import RibbonBase from "./../../../base/RibbonBase";
import AbschlussEingliederungPopup from "./popups/AbschlussEingliederungPopup";
import DelegationanIVStellePopup from "./popups/DelegationanIVStellePopup";
import pageBase from "../../../base/PageBase";
import EntscheidDetail from "../../entscheid/detail/EntscheidDetail";
import BasisdatenTab_Ent from "../../entscheid/detail/tabBarTabs/BasisdatenTab_Ent";

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
      folgeentscheidOffnenBtn : () => this.elements.ribbonBlock().find("[title='Folgeentscheid öffnen']")
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

  clickFolgeentscheidOffnenBtn() {
    this.elements.folgeentscheidOffnenBtn().should("be.visible").click();
    return new EntscheidDetail();
  }
}

export default EingliederungRibbon;
