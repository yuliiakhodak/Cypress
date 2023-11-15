/// <reference types="cypress" />

describe("Debugging", () => {
    it("cy.wait() - hard wait", () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard("Html Elements")
        //cy.wait(10000)
        cy.get("#checkbox_1").check()

    })
    it("Debugging using pause", () =>{

    })
})