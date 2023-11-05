/// <reference types="cypress" />
describe("Alerts", () => {
    it("Handling the Warning and Confirmation Alerts", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("Alerts")
        cy.get("#warning_alert").click()
        cy.on("window:alert", (str) => {
            expect(str).be.eq("You are on TechGlobal Training application.")
        })
        cy.get("#action").should("have.text", "You accepted warning by clicking OK.")
    })
    it("Handling the Confarmation Alert", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("Alerts")
        cy.get("#confirmation_alert").click()
        cy.on("window:confirm", (str) => {
            expect(str).be.eq("Would you like to stay on TechGlobal Training application?")
            return false
        })
        cy.get("#action").should("have.text", "You rejected the alert by clicking Cancel.")
    })
    it('Handling alerts - Prompt alert', () => {

        cy.visit("https://techglobal-training.com/frontend");
    
        cy.clickCard("Alerts");
    
    
        // Clicking the "Cancel" in prompt Alert
        // cy.window().then((win) => {
        //   cy.stub(win, 'prompt').returns(null)
        // })
    
        //Another way of Clicking the "Cancel" in prompt Alert
        // cy.window().then((win) => {
        //   cy.stub(win, 'prompt')
    
        //   return false
        // })
    
        // Clicking the "Okay" by entering text in prompt Alert
        // cy.window().then((win) => {
        //   cy.stub(win, 'prompt').returns('TechGlobal my Text here')
        // })
    
    
        cy.window().then((win) => {
          cy.stub(win, 'prompt').callsFake((message) => {
            console.log(message)
            return message
          })
        })
    
        cy.get('#prompt_alert').click()

      })
})