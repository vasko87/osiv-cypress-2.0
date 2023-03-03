import FreitexteTab from "./tabs/FreitexteTab";
import HilflosigkeitTab from "./tabs/HilflosigkeitTab";
import PageBase from "../../../base/PageBase";

class EntscheidSideMenu extends PageBase{
  constructor() {
    super();
    this.elements = {
      hilflosigkeitTab: () => cy.get(`[class='dhxwin_active'] [akid='EntscheidDetailBasisFrameTabbar-Hilflosigkeit']`),
      freitexteTab    : () => cy.get(`[class='dhxwin_active'] [akid='EntscheidDetailBasisFrameTabbar-Freitexte']`)
    };
  }

  navigateToHilflosigkeitTab() {
    this.elements.hilflosigkeitTab().should("be.visible").click();
    return new HilflosigkeitTab();
  }

  navigateToFreitexteTab() {
    this.elements.freitexteTab().should("be.visible").click();
    return new FreitexteTab();
  }
}

export default EntscheidSideMenu;
