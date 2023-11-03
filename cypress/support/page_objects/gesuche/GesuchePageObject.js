import GesucheGrid from "./detail/GesucheGrid";
import GesucheDetail from "./detail/GesucheDetail";
import constants from "../../helpers/Constants";

class GesuchePageObject {
  constructor() {
    this.grid = new GesucheGrid(`${constants.CSS_ACTIVE_FORM} [akid='GesuchQueryGrid']`);
    this.detail = new GesucheDetail();
  }
}

export default GesuchePageObject;
