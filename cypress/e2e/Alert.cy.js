//const { expect } = require("chai")

describe('My first alert test', function(){
it('My first Case' ,function(){
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()
cy.on('window:alert' ,(str)=>
{
expect(str).to.equal('Hello , share this practice page and share your knowledge')
})




})
})
