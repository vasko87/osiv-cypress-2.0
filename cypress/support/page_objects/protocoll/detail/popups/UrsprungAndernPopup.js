import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import ProtocollPageBase from "../../ProtocollPageBase";

class UrsprungAndernPopup extends ProtocollPageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }

}

export default UrsprungAndernPopup;
