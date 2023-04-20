import {Version3Client} from "jira.js";

const client = new Version3Client({
  host          : "https://jiraosiv3g.atlassian.net",
  authentication: {
    basic: {
      email   : "osiv3g@web.de",
      apiToken: "FZ1Fie97GCYIKaP029Rc613F"
    }
  }
});

const doneStatuses = ["10001", "10225", "10267", "10288", "6", "10210"];

export default {
  async isJiraDone(issueIdOrKey) {
    const issue = await client.issues.getIssue({issueIdOrKey: issueIdOrKey});
    const isDone = doneStatuses.includes(issue.fields.status.id).valueOf();
    return isDone;
  }
};

