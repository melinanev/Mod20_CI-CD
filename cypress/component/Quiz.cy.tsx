// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react' // React must be in scope for JSX
import Quiz from "../../client/src/components/Quiz"

// Import Cypress component testing commands
import '../support/component.js'

describe('Quiz Component', () => {
  beforeEach(() => {
    // Mock the API response with our fixture
    cy.intercept({
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('getRandomQuestion')
    });

  it('should start the quiz and display the first question', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for questions to load
    cy.wait('@getRandomQuestion');
    
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for questions to load
    cy.wait('@getRandomQuestion');

    // Answer the question (since our fixture only has one question, this will complete the quiz)
    cy.get('button').contains('1').click();

    // Verify the quiz completion
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for questions to load
    cy.wait('@getRandomQuestion');

    // Answer the question to complete the quiz
    cy.get('button').contains('1').click();

    // Restart the quiz
    cy.get('button').contains('Take New Quiz').click();
    
    // Wait for questions to load again
    cy.wait('@getRandomQuestion');

    // Verify the quiz is restarted
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
