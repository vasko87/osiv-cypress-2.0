import Notifications from "../standalone/Notifications";
import ModalWindowBase from "../standalone/popup/ModalWindowBase";

const modalWindow = new ModalWindowBase();
const notification = new Notifications();
export default {
  clickOkBtn_CheckSuccessMsg() {
    modalWindow.clickOkBtn();
    notification.checkSuccessMessageVisible();
  }
};


