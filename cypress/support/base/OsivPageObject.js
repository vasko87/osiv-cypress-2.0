import LoginPage from "../standalone/LoginPage";
import DesktopMenu from "../standalone/navigation/DesktopMenu";
import ModalWindow from "../standalone/popup/ModalWindow";
import WarningPopup from "../standalone/popup/WarningPopup";
import Notifications from "../standalone/Notifications";
import EntscheidPageObject from "../page_objects/entscheid/EntscheidPageObject";
import AdressenPageObject from "../page_objects/addresen/AdressenPageObject";
import InformationPopup from "../standalone/popup/InformationPopup";
import SendungenPageObject from "../page_objects/sendungen/SendungenPageObject";
import Navigation from "../standalone/navigation/Navigation";
import VersichertePageBase from "../page_objects/versicherte/VersichertePageBase";
import VersichertePageObject from "../page_objects/versicherte/VersichertePageObject";

class OsivPageObject {
  constructor() {
    this.nav = new Navigation();
    this.loginPage = new LoginPage();
    this.desktopMenu = new DesktopMenu();
    this.modalWindow = new ModalWindow();
    this.warningPopup = new WarningPopup();
    this.infoPopup = new InformationPopup();
    this.notification = new Notifications();
    this.versicherte = new VersichertePageObject();
    this.entscheid = new EntscheidPageObject();
    this.adressen = new AdressenPageObject();
    this.sendungen = new SendungenPageObject();
  }
}

export default new OsivPageObject();
