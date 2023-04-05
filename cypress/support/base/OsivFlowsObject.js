import EntscheidFlows from "../flows/EntscheidFlows";
import ModalPopupFlows from "../flows/ModalPopupFlows";
import GesucheFlows from "../flows/GesucheFlows";
import PosteingangFlows from "../flows/PosteingangFlows";
import VersicherteFlows from "../flows/VersicherteFlows";

class OsivFlowsObject {
  constructor() {
    this.entscheid = new EntscheidFlows();
    this.gesuche = new GesucheFlows();
    this.posteingang = new PosteingangFlows();
    this.versicherte = new VersicherteFlows();
    this.modalPopup = new ModalPopupFlows();
  }
}

export default new OsivFlowsObject();

