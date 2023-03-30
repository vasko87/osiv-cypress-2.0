import constants from "../../../../helpers/Constants";
import EntscheidGrid from "../../../entscheid/grid/EntscheidGrid";

class EntscheidTab_Gesuche {
  constructor() {
    this.grid = new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='GesuchDetailWindow'] [akid='EntscheidGesuchQueryGrid']`);
  }
}

export default EntscheidTab_Gesuche;
