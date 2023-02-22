# osiv-cypress-tests

## Features

### Local installation

1. Download project from bitbucket repository
```
$ git clone https://github.com/vasko87/osiv-cypress-tests
```

2. Install [Node.js](https://nodejs.org/en)

3. Install project depandencys: ```npm i```

### Run tests:

- browser based run: ```npx cypress open```
- headless run default suite: ```npx cypress run```
- headless run single test: ```cypress run --spec cypress/e2e/[testName.js]```

Note: Parameters from [cypress.env.json](cypress.env.json) are used by default, if you would like to change them - update this file OR past them as env parameters directly in command line:

Example: ```cypress run --env url=https://osiv3g-m01.ivnet.ch/,username=User1,password=user1 --spec cypress/e2e/0_newAdressTest.js```

### Jenkins CI execution

1. Navigate to  [Jenkins](http://w1064-de-test1:8080/view/Automated%20UI%20Tests) and open the job that need to be executed:
