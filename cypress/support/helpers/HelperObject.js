import DateHelper from "./DateHelper";
import RandomHelper from "./RandomHelper";
import JiraHelper from "./JiraHelper";
import PerformanceHelper from "./PerformanceHelper";

class HelperObject {
  constructor() {
    this.date = DateHelper;
    this.random = RandomHelper;
    this.jira = JiraHelper;
    this.performance = PerformanceHelper;
  }
}

export default new HelperObject();
