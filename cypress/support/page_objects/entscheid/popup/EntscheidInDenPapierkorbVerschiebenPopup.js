import ModalWindowBase from "../../../standalone/popup/ModalWindowBase";
import EntscheidPageBase from "../EntscheidPageBase";

class EntscheidInDenPapierkorbVerschiebenPopup {
  constructor() {
    this.modalWindow = new ModalWindowBase();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }


}

export default EntscheidInDenPapierkorbVerschiebenPopup;
