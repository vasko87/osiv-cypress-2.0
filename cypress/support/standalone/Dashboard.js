class Dashboard {
  constructor() {
    this.elements = {
      entscheidWidget: () => cy.get("[class='entscheid-widget dashboard-widget standard-widget']"),
      broadcastWidget: () => cy.get("[class='broadcast-widget']")
    };
  }

  waitForLoaded() {
    this.elements.entscheidWidget().should("be.visible");
    this.elements.broadcastWidget().should("be.visible");
    return this;
  }
}

export default Dashboard;
