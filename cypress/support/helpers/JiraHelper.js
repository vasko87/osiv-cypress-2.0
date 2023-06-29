import {Version3Client} from "jira.js";

const client = new Version3Client({
  host          : "https://jiraosiv3g.atlassian.net",
  authentication: {
    basic: {
      email   : "osiv3g@web.de",
      apiToken: "ATATT3xFfGF09HloKSM_KsvmhCzCX7k54eJnpn6g-79Ci5yCEpiPulg-qZ8VI9DV5Af6OtbpgJMwJzc-ygx5Ve19h7-f_BecLZIeDEYYfcwNk0tAzlVSv1oaAutX6fcAMCXq4uPgBPAhth48ugqnjZz48KcbARMuCi7Cah0HT6hHQopvTE1O5l0=07BDAF7C"
    }
  }
});

// add "10210" for Test status
const doneStatuses = ["10001", "10225", "10267", "10288", "6"];

export default {
  async isJiraDone(issueIdOrKey) {
    const issue = await client.issues.getIssue({issueIdOrKey: issueIdOrKey});
    const isDone = doneStatuses.includes(issue.fields.status.id).valueOf();
    return isDone;
  }
};

