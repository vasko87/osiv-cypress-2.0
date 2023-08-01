import SendungenGrid from "../../../sendungen/grid/SendungenGrid";
import constants from "../../../../helpers/Constants";
import SendungenDetail from "../../../sendungen/detail/SendungenDetail";

class SendungenTab_Ein {
  constructor() {
    this.grid = new SendungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='EingliederungDetailWindow'] [akid='eSendungQueryVPContextB']`);
    this.detail = new SendungenDetail();
  }
}

export default SendungenTab_Ein;
