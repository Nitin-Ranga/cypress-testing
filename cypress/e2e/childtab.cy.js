describe('Child Tab testing', ()=>
{
    it('My first Case' ,function(){
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.origin("https://wwww.qaclickacademy.com",()=>
    {
        cy.get("#navbarSupportedContent a[href*='about']").click();

    })
    

})
})