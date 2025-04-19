/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Mount a React component in the test environment
     */
    mount(component: React.ReactNode): Chainable<any>
  }
}
