describe('Resposive Test', function () {
    beforeEach(() => {
    cy.visit('https://dribbble.com/')
     });
    // TC-1: To check the website in the Mobile Responsive
    // TC-2: To check the website in Ipad Responsive
    // TC-3: To check the website in Mac Book
//--------------------------------------------------------------------------------------------------

    it('TC-1-> To check the website in Mobile Responsive', function () {
      cy.viewport('iphone-xr') // 414 x 896
      cy.wait(3000)
     
    });//NEW

      it('TC-2-> To check the website in I-Pad Responsive', function () {
        cy.viewport('ipad-2') // 768 x 1024
        cy.wait(3000) 
      })

      it('TC-3-> To check the website in Macbook Responsive', function () {
        cy.viewport('macbook-16') // 1536 x 960
        cy.wait(2000) 
      })

    })