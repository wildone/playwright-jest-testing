# playwright-jest-testing
A skeleton repository of the Playwright automation testing framework, integrated with Jest

This is for a POC for replacing the ageing groovy/geb/spock/selenium framework used by AEMDesign

### Styleguide
By default this project should follow the [AirBnB Styleguide](https://github.com/airbnb/javascript) and conventions

### ToDo task list for POC
- [x] Create POC git repo and project
- [x] Create initial app to take screenshots of components on AEM PageDetails showcase page
- [x] Integrate screenshot comparisons
- [x] Integrate with Jest testing report framework
- [x] Handle AEM specific requirements like setting `wcmmode=disabled` and login to author instances.
- [x] Duplicate the existing AEMDesign PageDetailsScreenshot test and compare running time
- [x] Add ability to test with multi browser types (chromium, firefox or webkit)
  - ~~WIP. Multi browsers can now be added via the setup Json, but Firefox element height is defaulting to 0 intermitently.~~ Fixed. Caused by in progress login page redirection. 
- [ ] Resolve issue with image quality difference causing failures, possible due to lazy loading. Might require a wait of event listener.
- [ ] Speed up tests by getting them to run in parrallel. See something like [puppeteer cluster](https://github.com/thomasdondorf/puppeteer-cluster) as an example.
- [x] Convert to yarn from npm.
- [ ] Integrate Jests snapshots to test html structure of components. This will remove the need to write tests looking for specific node structures.
- [ ] Refactor the project structure for eventual integration into AEMDesign
- [ ] Integrate into `mvn`
- [ ] Create a docker container for running the tests.

### Usage
On first download, initialise the project with `npm install`

To run the standalone Playwright screenshot sample `node app.js`

To run Jest test for screenshot with Playwright.
Npm: `npm run test -- --testMatch=**/*pagelist*test* --scheme=http --hostname=localhost --port=4502 --username=admin --password=admin --isWcmModeDisabled=true`

Yarn: `yarn test --testMatch=**/*pagelist*test* --scheme=http --hostname=localhost --port=4502 --username=admin --password=admin --isWcmModeDisabled=true`