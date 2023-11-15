/// <reference types="cypress" />


describe("Practices", () => {
    it("Assertions Practices", () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('Html Elements')
        // cy.contains("Text Inputs").parent().find("input").as("textInput")
        const arr = ["Yuliia", "Khodak"]
        cy.get("#text_input1, #text_input2").each(($el, index) => {
            cy.wrap($el).type(arr[index]).should("be.enabled").and("have.not.attr", "required")
        })
    })
    it("Assertions Practices", () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('Html Elements')
        const arr2 = ["10/10/2020", "10/10/2020"]
        cy.get("#date_input1, #date_input2").each(($el, index) => {
            cy.wrap($el).clear().type(`${arr2[index]}{enter}`)
                .should("be.enabled")
                .and("have.not.attr", "required")
            cy.wrap($el).should("have.attr", "value", arr2[index])


            cy.get("#company_dropdown1, #company_dropdown2").each(($el, index) => {
                const arr2 = ["Microsoft", "Apple"]
                cy.wrap($el).select(arr2[index]).should("be.enabled").find("option:selected").should("have.text", arr2[index])
            })
        })
    })
})
