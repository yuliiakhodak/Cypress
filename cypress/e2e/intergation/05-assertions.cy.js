describe('Cypress Assertions', () => {

    it('Default Assertions', () => {

        // This will fail if the page doesn't send text/html with a 200 status
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        cy
            // there is a default assertion that this
            // button must exist in the DOM before proceeding
            .get('#register_button')
            // since cypress internally checks if the web element on the dom tree or not
            // we dont need to do below assertion
            // .should('be.visible')

            // before issuing the click, this button must be "actioanable"
            // it connat be covered, ordisabled,  hidden from the view.
            .click()

        // This will fail if the element os not typable.
        cy.get('#text_input1').type('TechGlobal')
    })

    it('Implicit Assertions', () => {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        // Any assertion we do using .should() method, is an "Implicit Assertion"



        // This assertion checks if the subjected elements visible text is equal to 'Html Elements'
        cy.get('#main_heading').should('have.text', 'Html Elements')

        // This assertion checks if the subjected elements visible text is contains 'Html Elements'
        cy.get('#main_heading').should('contain.text', 'Elements')
        cy.get('#main_heading').should('include.text', 'Elements')


        cy.url().should('eq', 'https://techglobal-training.com/frontend/html-elements')
        cy.title().should('eq', 'TechGlobal Training | Html Elements')


        // have.attr chainer checks the elements attribute property
        // it can get 2, or 3 arguments, we can validate if element has specific attribute, and the value of it
        cy.get('#main_heading').should('have.attr', 'id')
        cy.get('#main_heading').should('have.attr', 'id', 'main_heading')
        cy.get('#facebook_link').should('have.attr', 'href', 'https://www.facebook.com/techglobaleducation')

        cy.get("#checkbox_1").should("be.enabled")

        it("More explicit asssertions - Validate Multiple elements", () => {

        })


    })
})







