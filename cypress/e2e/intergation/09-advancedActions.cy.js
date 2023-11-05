/// <reference types="cypress" />

describe("Keyboard & Mouse Actions", () => {
    it("Keyboard Actions", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("Html Elements")
        cy.get("#text_input1").realClick().realPress("A")
            .realPress("Tab")
            .realPress("KeyB")
    })

    it("Click, Rigth Click and Double Click", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("Actions")
        const labels = ["Click on me", "Right-Click on me", "Double-Click on me"]
        cy.get("#click, #right-click, #double-click").each(($el, index) => {
            cy.wrap($el).should("have.text", labels[index])
        })
        cy.get("#click").realClick()
        cy.get("#right-click").rightclick()
        cy.get("#double-click").dblclick()
        const result = ["You clicked on a button!", "You right-clicked on a button!", "You double-clicked on a button!"]
        cy.get("#click_result, #right_click_result, #double_click_result").each(($el, index) => {
            cy.wrap($el).should("have.text", result[index])
        })
    })
    it.only("Drag and Drop", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("Actions")
        cy.get("#drag_element").should("have.text", "Drag Me").drag("#drop_element")
        cy.get("#drop_element").should("have.text", "Drop Here").parent().next().should("have.text", "An element dropped here!")
       
    })
})