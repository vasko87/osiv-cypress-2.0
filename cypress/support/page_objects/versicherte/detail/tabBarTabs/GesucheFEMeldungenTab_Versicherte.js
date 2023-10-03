import constants from "../../../../helpers/Constants";
import GesucheGrid from "../../../gesuche/detail/GesucheGrid";

class GesucheFEMeldungenTab_Versicherte {
  constructor() {
    this.grid = new GesucheGrid(`${constants.CSS_ACTIVE_FORM} [akid='sStammDetailWindow'] [akid='GesuchFEMeldungQueryGrid']`);
  }
}

export default GesucheFEMeldungenTab_Versicherte;
