import DesktopMenu from "./DesktopMenu";
import GroupedTaskbar from "./GroupedTaskbar";

class Navigation {
  constructor() {
    this.leftMenu = new DesktopMenu();
    this.groupedTaskbar = new GroupedTaskbar();
    this.elements = {
      taskbarPanel : () => cy.get("[class*='taskbar-hdr-panel-container']"),
      homeBtn : () => this.elements.taskbarPanel().find("[class='dhx_cell_toolbar_def']"),
      userInfoTxt : () => cy.get("[class='akUserInfo']")
    };
  }

  clickHomeBtn() {
    this.elements.homeBtn().should("be.visible").click();
  }
}
export default Navigation;
