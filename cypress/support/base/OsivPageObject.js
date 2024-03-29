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
import pageBase from "./PageBase";
import GroupedTaskbar from "./GroupedTaskbar";
import GesuchePageObject from "../page_objects/gesuche/GesuchePageObject";
import PosteingangPageObject from "../page_objects/posteingang/PosteingangPageObject";
import VirtualViewer from "../standalone/VirtualViewer";
import ErrorPopup from "../standalone/popup/ErrorPopup";
import EingliederungPageObject from "../page_objects/eingliederungen/EingliederungPageObject";
import TerminePageObject from "../page_objects/termine/TerminePageObject";
import TxtEditor from "../standalone/TxtEditor";
import Dashboard from "../standalone/Dashboard";
import PopupUniversal from "../standalone/popup/PopupUniversal";
import BeschwerdePageObject from "../page_objects/entscheid/beschwerde/BeschwerdePageObject";

class OsivPageObject {
  constructor() {
    this.nav = new Navigation();
    this.loginPage = new LoginPage();
    this.dashboard = new Dashboard();
    this.desktopMenu = new DesktopMenu();
    this.groupedTaskbar = new GroupedTaskbar();
    this.modalWindow = new ModalWindowBase();
    this.warningPopup = new WarningPopup();
    this.errorPopup = new ErrorPopup();
    this.infoPopup = new InformationPopup();
    this.confirmPopup = new ConfirmPopup();
    this.popupUniversal = new PopupUniversal();
    this.notification = new Notifications();
    this.versicherte = new VersichertePageObject();
    this.gesuche = new GesuchePageObject();
    this.entscheid = new EntscheidPageObject();
    this.eingliederung = new EingliederungPageObject();
    this.posteingang = new PosteingangPageObject();
    this.termine = new TerminePageObject();
    this.adressen = new AdressenPageObject();
    this.sendungen = new SendungenPageObject();
    this.virtualViewer = new VirtualViewer();
    this.txtEditor = new TxtEditor("");
  }

  checkMsgOnThePage(msg, isExist) {
    if (isExist) {
      cy.contains(msg).should("exist");
    } else {
      cy.contains(msg).should("not.exist");
    }
    return this;
  }

  checkMsgWarningContainsText(msg, containsText) {
    if (containsText) {
      cy.get("[class='msg-warning']").contains(msg).should("exist");
    } else {
      cy.get("[class='msg-warning']").contains(msg).should("not.exist");
    }
    return this;
  }

  waitForLoadingDisappears() {
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default new OsivPageObject();
