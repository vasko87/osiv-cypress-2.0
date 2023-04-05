import DesktopMenu from "./DesktopMenu";
import GroupedTaskbar from "./GroupedTaskbar";

class Navigation {
  constructor() {
    this.leftMenu = new DesktopMenu();
    this.groupedTaskbar = new GroupedTaskbar();
    this.elements = {
      taskbarPanel : () => cy.get("[class*='taskbar-hdr-panel-container']"),
      homeBtn : () => this.elements.taskbarPanel().find("[class*='dhx_toolbar_btn dhxtoolbar_btn']"),
      userInfoTxt : () => cy.get("[class='akUserInfo']")
    }
  }
}
export default Navigation;
