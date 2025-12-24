// describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {

  it('Search for a keyword and verify the search URL contains the keyword & clicks on more button and verifies additional content is shown', () => {

    // Visit Brave Search homepage
    cy.visit('https://search.brave.com/');

    // Type "cypress testing" in the search field and submit
    cy.get('#id-searchbox').type('cypress testing{enter}');

    // Capture the current URL and verify it contains "cypress testing"
    cy.url().should('contain', 'cypress+testing');

    // Wait for 3 seconds to load the page before clicking more button
    cy.wait(3000);

    // Click on More button
    cy.get('#id-ui-show-more-button').click();

    // Verify the text contains Cypress framework description
    cy.get('#id-results')
      .invoke('text')
      .then((results) => {
        expect(results).to.contain(
          'Cypress is a modern, open-source end-to-end (E2E) testing framework'
        );
      });

  }); // end of test

}); // end of describe suite
