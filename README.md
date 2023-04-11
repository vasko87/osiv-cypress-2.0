# osiv-cypress-2.0


## Local installation

1. Install [Node.js](https://nodejs.org/en)
2. Download project from bitbucket repository
```
$ git clone https://github.com/vasko87/osiv-cypress-2.0
```
3. Install project depandencys: ```npm i```

### Local run tests:

- browser based run: ```npx cypress open```
- headless run default suite: ```npx cypress run```
- headless run single test: ```npx cypress run --spec cypress/e2e/[testName.js]```
- headed run of single test (generates html result): ```npx cypress run --spec .\cypress\e2e\C001_newAdressTest --headed```

Note: Parameters from [cypress.env.json](cypress.env.json) are used by default, if you would like to change them - update this file OR past them as env parameters directly in command line:

Example: ```cypress run --env url=https://osiv3g-m01.ivnet.ch,username=User1,password=user1 --spec cypress/e2e/C001_newAdressTest.js```

## Jenkins CI execution

1. Navigate to  [Jenkins](http://w1064-de-test1:8080/view/Automated%20UI%20Tests/job/OSIV_CYPRESS/) job
2. Click ```Build with Parameters``` and select parameters you would like to use
3. Click ```Build``` button
