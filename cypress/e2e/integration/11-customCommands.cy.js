/// <reference types="cypress" />


describe("Custom Command", () => {
    it("Parent command", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("Html Elements")
        cy.login("Tech", "Global")
        cy.selectDropdownOption("#company_dropdown1", "Apple")
        cy.selectDropdownOption("#company_dropdown2", "Tesla")
    })
    
    it.only("Child Command", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("Html Elements")
        cy.get("#main_heading").logText()
        cy.get("#main_heading").haveText("Html Elements")
        cy.get("#main_heading").assertAttribute("id", "main_heading")
    })

})