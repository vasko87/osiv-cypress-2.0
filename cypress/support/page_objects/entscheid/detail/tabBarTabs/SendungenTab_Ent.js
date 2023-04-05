import SendungenGrid from "../../../sendungen/grid/SendungenGrid";
import constants from "../../../../helpers/Constants";
import SendungenDetail from "../../../sendungen/detail/SendungenDetail";

class SendungenTab_Ent {
  constructor() {
    this.grid = new SendungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailWindow'],[akid='EntscheidDetailBasisFrame'] [akid='eSendungQueryVPContextB']`);
    this.detail = new SendungenDetail();
  }
}

export default SendungenTab_Ent;
