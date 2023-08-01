import EingliederungQuery from "./EingliederungQuery";
import SendungenQuery from "./SendungenQuery";

class RestHelper {
  constructor() {
    this.EIN = EingliederungQuery;
  }
}

export default new RestHelper();
