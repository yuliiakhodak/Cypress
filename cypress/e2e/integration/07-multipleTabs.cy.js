describe("Interacting Mulriple tabs", () => {
    it("Mulpiple tabs", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("Multiple Windows")
        cy.get("#microsoft").should("have.attr", "target", "_blank")
        cy.get("#apple").invoke("removeAttr", "target").click()
        cy.go(-1)

    })
    it("Mulpiple tabs - TEST 1", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("Multiple Windows")
        cy.get("#apple").invoke("removeAttr", "target").click()
        cy.title().should('eq', "Apple")
        cy.go(-1)

        cy.title().then((el) => {
            expect(el.toLowerCase()).to.contains("techglobal")
        })
    })
    it.only("Mulpiple tabs - TEST 2", () => {
            cy.visit("https://techglobal-training.com/frontend/")
            cy.clickCard("Multiple Windows")
            cy.get("#apple, #tesla, #microsoft").each(($el, index) => {
                cy.wrap($el).invoke("removeAttr", "target")
            })
            cy.get("#apple, #tesla, #microsoft").each(($el, index) => {
                cy.wrap($el).click()
            })

            })
        })
