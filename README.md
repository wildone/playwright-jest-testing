# playwright-jest-testing
A skeleton repository of the Playwright automation testing framework, integrated with Jest

This is for a POC for replacing the ageing groovy/geb/spock/selenium framework used by AEMDesign

### Styleguide
By default this project should follow the [AirBnB Styleguide](https://github.com/airbnb/javascript) and conventions

### ToDo task list for POC
- [x] Create POC git repo and project
- [ ] Create initial app to take screenshots of components on AEM PageDetails showcase page
- [ ] Integrate with ImageMagik and get screenshot comparisons generating
- [ ] Integrate with Jest testing report framework
- [ ] Duplicate the existing AEMDesign PageDetailsScreenshot test and compare running time
- [ ] Speed up tests by getting them to run in parrallel. See something like [puppeteer cluster](https://github.com/thomasdondorf/puppeteer-cluster) as an example.
- [ ] Refactor the project structure for eventual integration into AEMDesign
- [ ] Integrate into `mvn`
- [ ] Create a docker container for running the tests.