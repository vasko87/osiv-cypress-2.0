import LoginPage from "../standalone/LoginPage";
import DesktopMenu from "../standalone/navigation/DesktopMenu";
import ModalWindowBase from "../standalone/popup/ModalWindowBase";
import WarningPopup from "../standalone/popup/WarningPopup";
import Notifications from "../standalone/Notifications";
import EntscheidPageObject from "../page_objects/entscheid/EntscheidPageObject";
import AdressenPageObject from "../page_objects/addresen/AdressenPageObject";
import InformationPopup from "../standalone/popup/InformationPopup";
import SendungenPageObject from "../page_objects/sendungen/SendungenPageObject";
import Navigation from "../standalone/navigation/Navigation";
import VersichertePageObject from "../page_objects/versicherte/VersichertePageObject";
import ConfirmPopup from "../standalone/popup/ConfirmationPopup";
import constants from "../helpers/Constants";
import pageBase from "./PageBase";

class OsivPageObject {
  constructor() {
    this.nav = new Navigation();
    this.loginPage = new LoginPage();
    this.desktopMenu = new DesktopMenu();
    this.modalWindow = new ModalWindowBase();
    this.warningPopup = new WarningPopup();
    this.infoPopup = new InformationPopup();
    this.confirmPopup = new ConfirmPopup();
    this.notification = new Notifications();
    this.versicherte = new VersichertePageObject();
    this.entscheid = new EntscheidPageObject();
    this.adressen = new AdressenPageObject();
    this.sendungen = new SendungenPageObject();
  }

  checkMsgOnThePage(msg, isExist) {
    if (isExist) {
      cy.contains(msg).should("exist");
    } else {
      cy.contains(msg).should("not.exist");
    }
    return this;
  }

  waitForLoadingDisappears() {
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default new OsivPageObject();
