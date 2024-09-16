describe('Immorta Login', function () {
    beforeEach(() => {
    cy.visit('https://immorta.codebuddy.review/login')
     });
    // TC-T1 Enter the invalid email to check email validation
    // TC-T2 Enter the valid email but invalid password
    // TC-T3 Enter the Valid Email & Valid password it will redirect to dashboard within 3 Seconds
//--------------------------------------------------------------------------------------------------

    it('TC-1-> Enter the invalid email to check email validation', function () {
          cy.get('#text-input-email').type('nitin @codebuddy .co')
          cy.get ('#sign-in-btn').click()
          cy.get('#text-input-email-error').should('contain', 'Must be a valid email');
          cy.get('#text-input-email').clear() 
          //Note - We can add another confirmation by adding the API Code like 404 I will add later 
      });
    it('TC-2-> Enter the valid email but invalid password', function () {
        cy.get('#text-input-email').type('nitin@codebuddy.co')
        cy.get('#password-input-password').type('wrongpassword')
        cy.get ('#sign-in-btn').click()
        //cy.get('.toast-message').should('be.visible').and('contain', 'Invalid credential');
        cy.intercept('POST', 'https://api-immorta.codebuddy.review/auth/user/me', (req) => {
             cy.wait('@loginRequest').then((intercept) => {
                  expect(intercept.response.statusCode).to.equal(401);
                  const errorMessage = intercept.response.body.message;
                  expect(errorMessage).to.contain('Invalid credentials');
                  
                  }).as('loginRequest');      
            });

            
    })
    it('TC-3-> Enter the valid Email with Valid Password', function () {
      cy.get('#password-input-password').clear()
      cy.get('#text-input-email').clear() 
      cy.get('#text-input-email').type('nitin@codebuddy.co')
      cy.get('#password-input-password').type('PPass@123')
      cy.get ('#sign-in-btn').click()
      cy.wait(2000)
      cy.url().should('eq','https://immorta.codebuddy.review/dashboard/constellations')
})  
});
    


