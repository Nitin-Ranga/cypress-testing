describe('Immorta Login', function () {
    beforeEach(() => {
    cy.visit('https://immorta.codebuddy.review/login')
    cy.get('#password-input-password').clear()
        cy.get('#text-input-email').clear() 
        cy.get('#text-input-email').type('nitin@codebuddy.co')
        cy.get('#password-input-password').type('PPass@123')
        cy.get ('#sign-in-btn').click()
        cy.wait(2000)
        cy.viewport('macbook-16')
        cy.wait(2000)
     });
     // TC- 1 -> To check the constellation modal when clicking on button
     // TC- 2 -> To check the validation without entring the input into constellation
     // TC- 3 -> To check the validation by entering the invalid input
     // TC- 4 ->  Create a constellation by entring the valid data & check from dashboard
     // TC- 5 -> 
//-------------------------------------------------------------------------------------------
    
 
    it('TC-1 -> To check the constellation open modal when clicking on button', function(){
        cy.get('#create-constellation-btn').click()
        cy.contains('Constellation is where you save all your stars')
})
    it('TC-2 ->To check the validation without entring the input into constellation', function(){
    cy.get('#create-constellation-btn').click()
    cy.get('.md\\:col-span-5 > #create-constellation-btn > .m_80f1301b > .m_811560b9').click();
    cy.get('#text-input-name-error').should('contain', 'Constellation name is required')
})

    it('TC-4 -> To create constellation', function(){
        cy.get('#create-constellation-btn').click()
        cy.get('#text-input-name').type("Cypress Constellation")
        //type(faker.name.findName()); - Faker library 
        //cy.get('.md\:col-span-5 > #create-constellation-btn > .m_80f1301b > .m_811560b9').click({ force: true })
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#tags-input-tags').clear('c');
        cy.get('#tags-input-tags').type('cypress{enter}');
        cy.get(':nth-child(2) > .px-4').click();
        cy.get('.md\\:col-span-5 > #create-constellation-btn > .m_80f1301b > .m_811560b9').click();
        cy.get('#take-me-to-the-constellation-btn > .m_80f1301b > .m_811560b9').click();
        /* ==== End Cypress Studio ==== */
    })







})