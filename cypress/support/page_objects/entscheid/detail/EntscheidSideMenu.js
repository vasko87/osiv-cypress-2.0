import HilflosigkeitTab from "./tabs/HilflosigkeitTab";

class EntscheidSideMenu {
  constructor() {
    this.elements = {
      hilflosigkeitTab : () => cy.get("[akid='EntscheidDetailBasisFrameTabbar-Hilflosigkeit']")
    };
  }

  navigateToHilflosigkeitTab(){
    this.elements.hilflosigkeitTab().should("be.visible").click();
    return new HilflosigkeitTab();
  }
}
export default EntscheidSideMenu;
