import DateHelper from "./DateHelper";
import RandomHelper from "./RandomHelper";
import JiraHelper from "./JiraHelper";
import PerformanceHelper from "./PerformanceHelper";
import RestHelper from "./restMgrs/RestHelper";

class HelperObject {
  constructor() {
    this.date = DateHelper;
    this.random = RandomHelper;
    this.jira = JiraHelper;
    this.performance = PerformanceHelper;
    this.rest = RestHelper;
  }
}

export default new HelperObject();
