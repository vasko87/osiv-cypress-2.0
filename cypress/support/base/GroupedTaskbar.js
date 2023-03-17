class GroupedTaskbar {
  constructor() {
    this.elements = {
      groupedTaskbar  : () => cy.get("div[class='vue-taskbar-container']"),
      entscheidHEHETab: () => this.elements.groupedTaskbar().find("[title='Entscheid HE HE']")
    };
  }

  clickEntscheidHEHETab() {
    this.elements.entscheidHEHETab().click();
    return this;
  }
}

export default GroupedTaskbar;
