import FreitexteTab from "./tabs/FreitexteTab";
import HilflosigkeitTab from "./tabs/HilflosigkeitTab";

class EntscheidSideMenu {
  constructor() {
    this.elements = {
      hilflosigkeitTab : () => cy.get("[akid='EntscheidDetailBasisFrameTabbar-Hilflosigkeit']"),
      freitexteTab : () => cy.get("[akid='EntscheidDetailBasisFrameTabbar-Freitexte']")
    };
  }

  navigateToHilflosigkeitTab(){
    this.elements.hilflosigkeitTab().should("be.visible").click();
    return new HilflosigkeitTab();
  }

  navigateToFreitexteTab(){
    this.elements.freitexteTab().should("be.visible").click();
    return new FreitexteTab();
  }
}
export default EntscheidSideMenu;
