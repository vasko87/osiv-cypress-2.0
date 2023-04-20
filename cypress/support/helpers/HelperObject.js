import DateHelper from "./DateHelper";
import RandomHelper from "./RandomHelper";
import JiraHelper from "./JiraHelper";

class HelperObject {
  constructor() {
    this.date = DateHelper;
    this.random = RandomHelper;
    this.jira = JiraHelper;
  }
}

export default new HelperObject();
