/// <reference types="cypress" />

describe("iFrames in Cypress", () => {
    it("iFrames", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("IFrames")

        cy.get("#form_frame").its("0.contentDocument.body")
            .should("not.be.empty")
            .find("#name_form > p").should("have.text", "Please fill out your information below")
    })

    it("iFrames validate login", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("IFrames")

        const arr = ["Joe", "Doe"]

        cy.get("#form_frame").its("0.contentDocument.body")
            .find("#first_name, #last_name").each(($el, index) => {
                cy.wrap($el).type(arr[index])
            })
        cy.get("#form_frame").its("0.contentDocument.body")
            .find("#submit").click()
        cy.get("#result").should("have.text", `You entered: ${arr.join(" ")}`)

    })
})