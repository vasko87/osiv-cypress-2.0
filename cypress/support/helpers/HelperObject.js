import DateHelper from "./DateHelper";
import RandomHelper from "./RandomHelper";

class HelperObject {
  constructor() {
    this.date = DateHelper;
    this.random = RandomHelper;
  }
}

export default new HelperObject();
