import constants from "../helpers/Constants";
class RibbonBase {
  constructor() {
    this.elements = {
      ribbonBlock : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='SimpleSwatRibbon'] [class='dhxrb_block_base ribbonBlock']`),
      speichernBtn : () => this.elements.ribbonBlock().find("[title='Speichern']"),
      neuBtn : () => this.elements.ribbonBlock().find("[title='Neu']"),
      inDenPapierkorbBtn : () => this.elements.ribbonBlock().find("[title='In den Papierkorb']"),
      subMenu : () => cy.get("[class='dhtmlxMenu_material_SubLevelArea_Polygon ']:not([style='display: none;'])")
    };
  }

  clickSpeichernBtn() {
    this.elements.speichernBtn().should("be.visible").click();
    return this;
  }

  clickNeuBtn() {
    this.elements.neuBtn().should("be.visible").click();
    return this;
  }

  clickInDenPapierkorbBtn() {
    this.elements.inDenPapierkorbBtn().should("be.visible").click();
    return this;
  }

  selectInMenu(value) {
    this.elements.subMenu().get(`[class='dhtmlxMebu_SubLevelArea_Tbl'] div:contains('${value}')`);
    return this;
  }

  checkMenuItemEnable(element, isEnable) {
    if (isEnable) {
      element.should("have.class", "sub_item");
    } else {
      element.should("have.class", "sub_item_dis");
    }
    return this;
  }

  clickSubMenuMenuItem(element){
    this.elements.subMenu().get(`[id*='${item}']`).click();
    return this;
  }


}
export default RibbonBase;
