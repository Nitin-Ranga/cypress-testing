describe('Resposive Test', function () {
    beforeEach(() => {
    cy.visit('https://dribbble.com/')
     });
    // TC-1: To check the website in the Mobile Responsive
    // TC-2: To check the website in Ipad Responsive
    // TC-3: To check the website in Mac Book
//--------------------------------------------------------------------------------------------------
      /* ==== Generated with Cypress Studio ==== */
      it('TC-2-> To check the website in I-Pad Responsive', function () {
        cy.viewport('iphone-xr') // 414 x 896
        cy.wait(3000)
      cy.get('.nav-v2-burger').click();
      cy.get('.nav-v2-main__item--divided > a').click();
      cy.get('#login').type('test@test.com');
      cy.get('#password').type('Test');
      cy.get('.auth-form > form > .btn2').click()
      cy.should('contain', "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.")
      cy.get('button').as('btn').click()
>     cy.get('@btn').should('have.class', 'active')
    })
      /* ==== End Cypress Studio ==== */









    });