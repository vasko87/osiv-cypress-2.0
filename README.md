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

- browser based run: ```npx cypress open --env ENV=Fr```
- headless run default suite: ```npx cypress run --env ENV=Fr```
- headless run single test: ```cypress run --env ENV=Fr --spec cypress/e2e/[testName.js]```

### Jenkins CI execution

1. Navigate to  [Jenkins](http://w1064-de-test1:8080/view/Automated%20UI%20Tests) and open the job that need to be executed: