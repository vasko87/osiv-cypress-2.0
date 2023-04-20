import {Version3Client} from "jira.js";

const client = new Version3Client({
  host          : "https://jiraosiv3g.atlassian.net",
  authentication: {
    basic: {
      email   : "osiv3g@web.de",
      apiToken: "ATATT3xFfGF0lUUftqG1CZUlVfpo0IcImKx6r005mLZ_-yBS9wFNaLtjBjOH9NbiDoejmMJCHZz0s112U7LilTcLvWNdD-XKunuFWNrN1lIi1XEJU3_usWhztt0PlGepXkSDO9N3iHzDtodc9WKJxfS8mdw53lCPLChulWj5NcYZIVQNXu8nXlw=43C6FA9D"
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

