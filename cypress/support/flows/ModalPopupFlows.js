import pages from "../base/OsivPageObject";

class ModalPopupFlows {
  clickOkBtn_CheckSuccessMsg() {
    pages.modalWindow.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
  }

  clickOkBtn_warningOk_CheckSuccessMsg(){
    pages.modalWindow.clickOkBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
  }
}
export default ModalPopupFlows;

