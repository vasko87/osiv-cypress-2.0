import constants from "../helpers/Constants";

class DetailWindowHeader {
  constructor() {
    this.elements = {
      windowHeader: () => cy.get(`${constants.CSS_ACTIVE_FORM} [class='dhxwin_hdr']`),
      configureBtn: () => this.elements.windowHeader().find("[title='Configure']"),
      settingsBtn : () => this.elements.windowHeader().find("[title='Settings']"),
      stickBtn    : () => this.elements.windowHeader().find("[title='Stick']"),
      parkBtn     : () => this.elements.windowHeader().find("[title='Park']"),
      minMaxBtn   : () => this.elements.windowHeader().find("[title='Min/Max']"),
      closeBtn    : () => this.elements.windowHeader().find("[title='Close']"),
      subMenu : () => cy.get("[class='dhtmlxMenu_material_SubLevelArea_Polygon ']:not([style='display: none;'])")
    };

    this.configureSubMenu = {
      openDesignerBtn: () => this.elements.subMenu().contains("Open Designer"),
      positionDesignerInExternalScreenBtn: () => this.elements.subMenu().contains("Position Designer In External Screen"),
      openDesignerInExternalScreenBtn: () => this.elements.subMenu().contains("Open Designer In External Screen"),
      enableAllRibbonItemsBtn: () => this.elements.subMenu().contains("Enable All Ribbon Items"),

      clickEnableAllRibbonItemsBtn() {
        this.enableAllRibbonItemsBtn().should("be.visible").click();
        return this;
      }
    };
  }

  clickCloseBtn() {
    this.elements.closeBtn().should("be.visible").click();
  }

  clickConfigureBtn() {
    this.elements.configureBtn().should("be.visible").click();
    return this;
  }
  clickConfigureBtn_clickEnableAllRibbonItemsBtn() {
    this.clickConfigureBtn();
    this.configureSubMenu.clickEnableAllRibbonItemsBtn();
    return this;
  }

}

export default DetailWindowHeader;
