
describe('TC1_Geico_Login_Test', () => {

  it('Attempts login with different policy types', () => {

    const policyTypes = ['Auto', 'Homeowners', 'Motorcycle'];

    policyTypes.forEach((policyType) => {

      // navigate to geico.com
      cy.visit('https://www.geico.com/');

      // click on the login button
      cy.get('[data-side-panel-trigger="account"]').click();

      // select the policy type from login dropdown
      cy.get('#manage_select').select(policyType);

      // click on the login button
      cy.get('#manageSubmit').click();

      // log message in Cypress runner
      cy.log(`Successfully attempted to login with ${policyType} policy type`);

    }); // end Action_Item

  }); // end it

}); // end describe
