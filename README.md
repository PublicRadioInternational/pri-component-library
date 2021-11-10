# PRI Component Library
INACTIVE! This repository contains a node module that exports PRI's React components.

The application defined in this codebase is live and available [here](https://publicradiointernational.github.io/pri-component-library/).

## Requirements and Setup
### Requirements
 - Node.JS (>=8.4.0). We recommend installing via [NVM](https://github.com/creationix/nvm).
 - Yarn (>=1.5.0).

### Setup
 - Clone this repository: `git clone git@github.com:PublicRadioInternational/pri-component-library.git`.
 - Run `yarn` in this repository's root directory.

## Developing
This project uses [Storybook](https://github.com/storybooks/storybook) to generate a front end for defined components. Components are located in `/src/components/{ComponentName}`, and then passed to Storybook in `/src/stories/index.js`.

To start Storybook: `yarn start`.

## Testing
This project makes use of Jest's snapshot testing utilities. Test files should be located in the same directory as the component the test file is testing. Jest will then create a `__snapshots__` directory, and manage it's snapshots from there. Also note that this Jest instance is set up to use Enzyme.

For more information about tests on this project, please read this documentation:
 - [Jest Documentation](https://facebook.github.io/jest/).
 - [Enzyme Documentation](https://github.com/airbnb/enzyme).

To run tests: `yarn test`.
To generate snapshots: `yarn snapshot`.

## Contributing
The process around contributing to this codebase and the workflow by which code changes are proposed and accepted into this project are documented [here](./.github/CONTRIBUTING.md).

## Deployment
This application is deployed to GitHub pages via a simple command: `yarn deploy`. This will create a new build, and send it up to the gh-pages branch. You should never need to run this command, as CircleCI is set up to deploy changes when new versions are released.
