
/// <reference types="cypress" />

describe("My first Test", () => {
    it("Visit TechGlobal training app home page", () => {
        cy.visit("https://techglobal-training.com/")
       // this is induvidual test block
    cy.title().should("eq", "Techglobal Training | Home")
    cy.url().should("eq", "https://techglobal-training.com/")
    cy.url().should("contain", "techglobal-training")
    })
   
    it("Logo", () =>{
        cy.visit("https://techglobal-training.com/")

        cy.get("#logo").should("be.visible").click()
    })

    it ("Dynamic elements test case", () =>{
        cy.visit("https://techglobal-training.com/frontend/dynamic-elements")
        cy.get("[id ^=box_1_]").should("be.visible")
        cy.get("[id ^=box_2_]").should("be.visible")
    })

    it("CSS  Locators - Pseudo-classes", () =>{
        cy.visit("https://techglobal-training.com/frontend/dynamic-elements")
        cy.get("")

    })
})