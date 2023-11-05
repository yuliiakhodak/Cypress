/// <reference types="cypress" />


describe(" Cypress Action", () => {
    it("Click Action", () => {
        cy.visit("https://techglobal-training.com/frontend")
        cy.get(".cards").contains("Html Elements").click()
        cy.get("#register_button").click()
        cy.get(".mt-1.is-block").should("have.text", "You clicked on “Register”")
        cy.get("#signin_button").click()
        cy.get(".mt-1.is-block").should("have.text", "You clicked on “Sign in”")
    })
    it("Checkbox & Radio buttons", () => {
        cy.visit('https://techglobal-training.com/frontend')

        cy.get('.cards').contains('Html Elements').click()

        // This assertion will not work, because "#apple_check" targets <label> web element
        // and this element is not the input itself, and its not possible to get input information from it.
        // cy.get('#apple_check').click().should('be.checked')

        cy.get("#checkbox_1").check().should('be.checked').uncheck().should('be.not.checked')

        cy.get("#radio_1_option_1").should('be.not.checked')
            .check().should('be.checked')
    })

    it("Text input", () => {
        cy.visit('https://techglobal-training.com/frontend')

        cy.get('.cards').contains('Html Elements').click()

        cy.get("#text_input1").type("TechGlobal").clear()
        cy.get("#text_input2").type("TechGlobal").clear()
    })

    it('Calender input', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.get('.cards').contains('Html Elements').click()
        cy.get("#date_input1").type("11/11/1990{enter}")
        cy.get("#date_input2").clear().type("11/11/1990{enter}")

    })
    it('Dropdown input', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()
        cy.get("")
        

    })
})