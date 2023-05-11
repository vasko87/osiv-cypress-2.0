import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import TerminePageBase from "../../TerminePageBase";

class TerminErledigenDialog extends TerminePageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }

  clickOkBtn() {
    this.modalWindow.clickOkBtn();
    return this;
  }

}

export default TerminErledigenDialog;
