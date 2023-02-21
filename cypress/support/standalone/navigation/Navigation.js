import DesktopMenu from "./DesktopMenu";
import GroupedTaskbar from "./GroupedTaskbar";

class Navigation {
  constructor() {
    this.leftMenu = new DesktopMenu();
    this.groupedTaskbar = new GroupedTaskbar();
    this.elements = {
      homeBtn : () => cy.get("[class*='dhx_toolbar_btn dhxtoolbar_btn']")
    }
  }
}
export default Navigation;
