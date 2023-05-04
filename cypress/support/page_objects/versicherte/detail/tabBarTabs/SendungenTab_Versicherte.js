import SendungenGrid from "../../../sendungen/grid/SendungenGrid";
import constants from "../../../../helpers/Constants";
import SendungenDetail from "../../../sendungen/detail/SendungenDetail";

class SendungenTab_Versicherte {constructor() {
    this.grid = new SendungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='sStammDetailWindow'] [akid='eSendungQueryVPContextB']`);
    this.detail = new SendungenDetail();
  }
}

export default SendungenTab_Versicherte;
