import EingliederungQuery from "./EingliederungQuery";
import VersicherteQuery from "./VersicherteQuery";

class RestHelper {
  constructor() {
    this.EIN = EingliederungQuery;
    this.VP = VersicherteQuery;
  }
}

export default new RestHelper();
