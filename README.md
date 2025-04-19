# Mod20 CI/CD


## Description

This application uses Continuous Integration (CI) and Continuous Deployment (CD) quality checks to ensure that consistency, quality, and deployment of latest code once all checks have been met and merged to main.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation

npm install
cd server && npm run build
npm run seed

## Usage

```bash
npm run develop    # Start the application (server + client)
npm run start      # Start just the server
npm run dev-test   # Start both the app and Cypress testing interface
```

Access the application at http://localhost:3000 in your browser.

## License

None

## Contributors



## Tests

The application includes Cypress component tests for the Quiz component. These tests verify:
- Quiz start functionality
- Question answering functionality
- Quiz completion and restart functionality

To run component tests:
```bash
npm run test-component  # Run all component tests headless
npm run test-quiz      # Run just the Quiz component test headless
npm run test-gui       # Open Cypress UI for interactive testing
```

## Questions

If you have any questions about the project, you can reach me at:

- GitHub: [melinanev](https://github.com/melinanev)
- Email: [melina.l.nevarez@gmail.com](mailto:melina.l.nevarez@gmail.com)
- Challenge Video: ()

