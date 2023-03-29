
class DetailWindowHeader {
  constructor() {
    this.elements = {
      windowHeader: () => cy.get("[class='dhxwin_active'] [class='dhxwin_hdr']"),
      configureBtn: () => this.elements.windowHeader().find("[title='Configure']"),
      settingsBtn: () => this.elements.windowHeader().find("[title='Settings']"),
      stickBtn: () => this.elements.windowHeader().find("[title='Stick']"),
      parkBtn: () => this.elements.windowHeader().find("[title='Park']"),
      minMaxBtn: () => this.elements.windowHeader().find("[title='Min/Max']"),
      closeBtn: () => this.elements.windowHeader().find("[title='Close']")
    };
  }

  clickCloseBtn() {
    this.elements.closeBtn().should("be.visible").click();
  }

}
export default DetailWindowHeader;
