/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// ***********************************************
// Custom commands for portfolio smoke tests
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Check if external link opens correctly
       */
      checkExternalLink(selector: string, expectedUrl?: string): Chainable<Element>;
      
      /**
       * Check if image loads properly
       */
      checkImageLoads(selector: string): Chainable<Element>;
      
      /**
       * Test mobile viewport
       */
      testMobileView(): Chainable<Element>;
    }
  }
}

// Check external links
Cypress.Commands.add('checkExternalLink', (selector: string, expectedUrl?: string) => {
  cy.get(selector).should('be.visible')
    .should('have.attr', 'href')
    .and('not.be.empty');
  
  if (expectedUrl) {
    cy.get(selector).should('have.attr', 'href', expectedUrl);
  }
  
  cy.get(selector).should('have.attr', 'target', '_blank');
});

// Check image loading
Cypress.Commands.add('checkImageLoads', (selector: string) => {
  cy.get(selector)
    .should('be.visible')
    .and(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.complete).to.be.true;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
});

// Test mobile viewport
Cypress.Commands.add('testMobileView', () => {
  cy.viewport(375, 667);
  cy.wait(500); // Allow for responsive adjustments
});

export {};