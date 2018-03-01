# PRI Component Library
This repository contains a node module that exports PRI's React components.

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
This project makes use of Jest's snapshot testing utilities. Test files should be located in the same directory as the component the test file is testing. Jest will then create a `__snapshots__` directory, and manage it's snapshots from there.

To run tests: `yarn test`.
To generate snapshots: `yarn snapshot`.

## Contributing
The process around contributing to this codebase and the workflow by which code changes are proposed and accepted into this project are documented [here](./.github/CONTRIBUTING.md).

## Deployment
... coming soon ...
This application is deployed to GitHub pages via a simple command: `yarn deploy`. This will create a new build, and send it up to the gh-pages branch.
