import VersicherteGrid from "./grid/VersicherteGrid";
import VersicherteDetail from "./detail/VersicherteDetail";

class VersichertePageObject {
  constructor() {
    this.grid = new VersicherteGrid();
    this.detail = new VersicherteDetail();
  }
}

export default VersichertePageObject;
