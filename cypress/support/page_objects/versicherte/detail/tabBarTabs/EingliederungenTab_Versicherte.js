import constants from "../../../../helpers/Constants";
import EntscheidGrid from "../../../entscheid/grid/EntscheidGrid";

class EingliederungenTab_Versicherte {
  constructor() {
    this.grid = new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='sStammDetailWindow'] [akid='EingliederungQueryStammGrid']`);
  }
}

export default EingliederungenTab_Versicherte;
