import PosteingangGrid from "./grid/PosteingangGrid";
import ZuordnungPage from "./ZuordnungPage";
import constants from "../../helpers/Constants";

class PosteingangPageObject {
  constructor() {
    this.grid = new PosteingangGrid(`${constants.CSS_ACTIVE_FORM} [akid='PosteingangQueryGrid']`);
    this.zuordnung = new ZuordnungPage();
  }
}

export default PosteingangPageObject;
