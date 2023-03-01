import EntscheidGrid from "../entscheid/grid/EntscheidGrid";
import EntscheidDetail from "../entscheid/detail/EntscheidDetail";
import VersicherteGrid from "./grid/VersicherteGrid";
import VersicherteDetail from "./detail/VersicherteDetail";

class VersichertePageObject {
  constructor() {
    this.grid = new VersicherteGrid();
    this.detail = new VersicherteDetail();
  }
}

export default VersichertePageObject;
