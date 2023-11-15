/// <reference types="cypress" />


describe("Timeouts", () => {
    it("Explicit and Inplicit Timeout", () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard("Html Elements")
        //cy.get("#randomName", {timeout: 8000})
        cy.get("#main_heading", { timeout: 10000 })
        cy.get("#hello_paragraph", { timeout: 10000 }).click({timeout:7000, forse: true})
    })
    it.only("Explicit and Inplicit Timeout", () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard("Waits")

        cy.get("#red").click()
        cy.get(".Box_c_box__0aavl", {timeout: 11000}).should("be.visible")
        })

})