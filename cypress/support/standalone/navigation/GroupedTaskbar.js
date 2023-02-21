
class GroupedTaskbar {
  constructor() {
    this.elements = {
      groupedTaskbarContainer : () => cy.get("[class='taskbar-contain']")
    };
  }

  navigateToTabByTitle(title) {
    this.elements.groupedTaskbarContainer().find(`[title*='${title}']`).click();
  }
}

export default GroupedTaskbar;
