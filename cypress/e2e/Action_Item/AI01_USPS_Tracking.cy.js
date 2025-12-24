
describe('USPS Tracking - Use Case 1', () => {

  it('should display an error for invalid USPS tracking number', () => {

    // navigate to USPS home page
    cy.visit('https://www.usps.com/');

    // click on Receive
    cy.get('a[role="menuitem"]').contains('Receive').click();

     // enter invalid tracking number
    cy.get('input[id="track-package--input"]').type('1234567890');

    // verify url contains manage
    cy.url().should('contain', 'manage');

    

      // click Track button
     cy.get('[class="track-package--search input--search"]').click();

     cy.wait(2700);

     cy.visit('https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=1234567890', () => {

     // verify USPS invalid tracking error
     cy.get('[class="col-md-12 col-sm-12 col-xs-12 latest-update-banner-wrapper red-banner"]').should('contain', 'Tracking Not Available');

    });
  });

});//end of describe suite 