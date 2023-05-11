import constants from "../helpers/Constants";
import pageBase from "./PageBase";
class RibbonBase {
  constructor() {
    this.elements = {
      ribbonBlock : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatRibbon'] [class='dhxrb_block_base ribbonBlock']`),
      speichernBtn : () => this.elements.ribbonBlock().find("[title='Speichern']"),
      neuBtn : () => this.elements.ribbonBlock().find("[title='Neu']"),
      loschenBtn : () => this.elements.ribbonBlock().find("[title='Löschen']"),
      subMenu : () => cy.get("[class='dhtmlxMenu_material_SubLevelArea_Polygon ']:not([style='display: none;'])")
    };
  }

  clickSpeichernBtn() {
    this.elements.speichernBtn().should("be.visible").click();
    return this;
  }

  checkSpeichernBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.speichernBtn(), isDisabled);
    return this;
  }

  clickNeuBtn() {
    this.elements.neuBtn().should("be.visible").click();
    return this;
  }

  clickLoschenBtn() {
    this.elements.loschenBtn().should("be.visible").click();
    return this;
  }

  selectInMenu(value) {
    this.elements.subMenu().get(`[class='dhtmlxMebu_SubLevelArea_Tbl'] div:contains('${value}')`);
    return this;
  }

  checkMenuItemDisable(element, isDisabled) {
    if (isDisabled === true) {
      element.invoke("attr", "class").should("contain", "item_dis");
    } else {
      element.invoke("attr", "class").should("not.contain", "item_dis");
    }
    return this;
  }

  clickSubMenuMenuItem(name){
    this.elements.subMenu().get(`[id*='${name}']`).click();
    return this;
  }


}
export default RibbonBase;
