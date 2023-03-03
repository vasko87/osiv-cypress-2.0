import EntscheidGrid from "./grid/EntscheidGrid";
import EntscheidDetail from "./detail/EntscheidDetail";
import AdressenAddDialog from "../addresen/popup/AdressenAddDialog";
import EntscheidNueDialog from "./popup/EntscheidNueDialog";

class EntscheidPageObject {
  constructor() {
    this.grid = new EntscheidGrid();
    this.detail = new EntscheidDetail();
    this.nueDialog = new EntscheidNueDialog();
  }
}

export default EntscheidPageObject;
