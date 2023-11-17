import SendungenCommonElements from "../../SendungenPageBase";
import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";

class SendungenAbschliessenPopup extends SendungenCommonElements {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    pageBase.waitForLoadingDisappears();
    cy.wait(constants.MIN_TIMEOUT * 2);
    return this;
  }
}

export default SendungenAbschliessenPopup;
