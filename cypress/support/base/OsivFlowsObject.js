import EntscheidFlows from "../flows/EntscheidFlows";
import ModalPopupFlows from "../flows/ModalPopupFlows";
import GesucheFlows from "../flows/GesucheFlows";
import PosteingangFlows from "../flows/PosteingangFlows";
import VersicherteFlows from "../flows/VersicherteFlows";
import EingliederungFlows from "../flows/EingliederungFlows";
import SendungenFlows from "../flows/SendungenFlows";

class OsivFlowsObject {
  constructor() {
    this.entscheid = new EntscheidFlows();
    this.eingliederung = new EingliederungFlows();
    this.gesuche = new GesucheFlows();
    this.posteingang = new PosteingangFlows();
    this.versicherte = new VersicherteFlows();
    this.sendungen = new SendungenFlows();
    this.modalPopup = new ModalPopupFlows();
  }
}

export default new OsivFlowsObject();

