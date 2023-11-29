import constants from "../../../../helpers/Constants";
import EntscheidGrid from "../../../entscheid/grid/EntscheidGrid";

class EntscheidTab_Versicherte {
  constructor() {
    this.grid = new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='Entscheide'] [akid='EntscheidQueryStammGrid']`);
  }
}

export default EntscheidTab_Versicherte;
