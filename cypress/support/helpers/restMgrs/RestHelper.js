import EingliederungQuery from "./EingliederungQuery";
import SendungenQuery from "./SendungenQuery";
import restConstants from "./RestConstants";

class RestHelper {
  constructor() {
    this.EIN = EingliederungQuery;
  }
}

export default new RestHelper();
