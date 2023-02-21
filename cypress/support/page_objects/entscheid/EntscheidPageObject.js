import EntscheidGrid from "./grid/EntscheidGrid";
import EntscheidDetail from "./detail/EntscheidDetail";

class EntscheidPageObject {
  constructor() {
    this.grid = new EntscheidGrid();
    this.detail = new EntscheidDetail();
  }
}

export default EntscheidPageObject;
