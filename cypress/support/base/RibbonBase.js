import PageBase from "./PageBase";

class RibbonBase extends PageBase {
  constructor() {
    super();
    this.elements = {
      ribbonBlock : () => cy.get("[class='dhxwin_active'] [akid='SimpleSwatRibbon'] [class='dhxrb_block_base ribbonBlock']"),
      speichernBtn : () => this.elements.ribbonBlock().find("[title='Speichern']"),
      subMenu : () => cy.get("[class='dhtmlxMebu_SubLevelArea_Tbl']")
    };
  }

  clickSpeichernBtn() {
    this.elements.speichernBtn().should("be.visible").click();
    return this;
  }

  selectInMenu(value) {
    this.elements.subMenu().get(`[class='dhtmlxMebu_SubLevelArea_Tbl'] div:contains('${value}')`);
    return this;
  }

  checkMenuItemEnable(menuItem, isEnable) {
    if (isEnable) {
      this.elements.subMenu().get(`[id*='${menuItem}']`).should("have.class", "sub_item");
    } else {
      this.elements.subMenu().get(`[id*='${menuItem}']`).should("have.class", "sub_item_dis");
    }
    return this;
  }

  clickSubMenuMenuItem(item){
    this.elements.subMenu().get(`[id*='${item}']`).click();
    return this;
  }


}
export default RibbonBase;
