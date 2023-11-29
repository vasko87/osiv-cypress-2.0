import SendungenGrid from "../../../sendungen/grid/SendungenGrid";
import constants from "../../../../helpers/Constants";

class SendungenTab_Gesuche {
  constructor() {
    this.grid = new SendungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='Sendungen'] [akid='eSendungQueryVPContextB']`);
  }
}

export default SendungenTab_Gesuche;
