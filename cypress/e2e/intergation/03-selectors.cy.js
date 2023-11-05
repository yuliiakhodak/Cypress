/// <reference types="cypress" />

describe("Cypress Selectors", () => {
    it("Practice Web Elements using - get and contains", () => {
        cy.visit("https://techglobal-training.com/frontend")
        cy.contains("Waits") // visual text
    })
})