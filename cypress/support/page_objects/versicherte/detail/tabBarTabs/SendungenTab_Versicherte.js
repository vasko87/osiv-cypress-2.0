import SendungenGrid from "../../../sendungen/grid/SendungenGrid";
import constants from "../../../../helpers/Constants";
import SendungenDetail from "../../../sendungen/detail/SendungenDetail";
import pageBase from "../../../../base/PageBase";

class SendungenTab_Versicherte {
  constructor() {
    this.grid = new SendungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='Sendungen'] [akid='eSendungQueryVPContextB']`);
    this.detail = new SendungenDetail();
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.grid.waitGridWrapperLoaded();
    return this;
  }
}

export default SendungenTab_Versicherte;
