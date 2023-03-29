import GesucheGrid from "./detail/GesucheGrid";
import GesucheDetail from "./detail/GesucheDetail";

class GesuchePageObject {
  constructor() {
    this.grid = new GesucheGrid();
    this.detail = new GesucheDetail();
  }
}

export default GesuchePageObject;
