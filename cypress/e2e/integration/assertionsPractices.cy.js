/// <reference types="cypress" />


beforeEach(() =>{
    cy.visit('https://techglobal-training.com/frontend')
    cy.clickCard("Html Elements")
})


describe("Practices", () => {
    it("Implicit Assertions Practice", () => {
      
        cy.get("#hello_paragraph").should("be.visible")
            .and("have.text", "Hello World!")
            .and("have.attr", "id", "hello_paragraph")
        cy.get("#testing_paragraph").should("be.visible")
            .and("have.text", "I like automation testing!")
            .and("have.attr", "id", "testing_paragraph")
        cy.get("#register_button").should("be.visible")
            .and("have.text", "Register")
            .and("be.enabled")
        cy.get("#signin_button").should("be.visible")
            .and("have.text", "Sign in")
            .and("be.enabled")
        cy.get("#ordered_list").prev()
            .should("have.text", "Ordered Lists")
        cy.get("#ordered_list_item1").should("be.visible")
            .and("have.text", "Cypress")
            .next().should("be.visible")
            .and("have.text", "Selenium Webdriver")


        cy.get("#facebook_link").prev().should("be.visible")
            .and("have.text", "Links")
        cy.get("#facebook_link").should("be.visible")
            .and("be.not.enabled")
            .and("have.attr", "href", "https://www.facebook.com/techglobaleducation")
            .and("have.text", "Facebook")
        cy.get("#facebook_link").prev().should("be.visible")
            .and("have.text", "Links")
        cy.get("#instagram_link").should("be.visible")
            .and("be.not.enabled")
            .and("have.attr", "href", "https://www.instagram.com/techglobal.school/?hl=en")
            .and("have.text", "Instagram")

        cy.get("#tesla_check").should("have.text", "Tesla").prev()
            .and("be.enabled")
            .and("be.not.checked").check()
            .and("be.checked")
    })
    it("Practice 2", () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.get(".cards").contains("Dropdowns").click();

        const product = 'MacBook Pro 13'
        const color = 'Green'
        const shippingOption = "Delivery"
        const expectedMessage = shippingOption === 'Delivery'
            ? `Your ${color} ${product} will be delivered to you.`
            : `Your ${color} ${product} is ready to be picked up.`

        cy.get('#product_dropdown').select(product)
        cy.get('#color_dropdown').select(color)

        cy.get('.react-dropdown-select-content').click()
        cy.get(`[aria-label="${shippingOption}"]`).click()

        cy.get('#submit').click()

        cy.get('#result').should('have.text', expectedMessage)
    });
});
it('More explicit assertions - Validate Multiple elements', () => {

    // If we want to validate multiple web elements, normally we would do this.
    cy.get('#hello_paragraph').should('be.visible').and('have.text', 'Hello World!')
    cy.get('#testing_paragraph').should('be.visible').and('have.text', 'I like automation testing!')

    // Or, we can locate the above elements in a single locator that we need to validate
    cy.contains('Paragraphs').nextAll().as('paragraphHeader')

    // By indexing, we can validate these elements using eq(), first() or last()
    cy.get('@paragraphHeader').first().should('have.text', 'Hello World!')
    cy.get('@paragraphHeader').last().should('have.text', 'I like automation testing!')

    cy.get('@paragraphHeader').first().should("have.text", "Hello World!").next().should("have.text", "I like automation testing!")

    const arr = ['Hello World!', 'I like automation testing!']

    // And we can loop through using fori loop by their index - NOT A PREFERRED WAY
    for (let i = 0; i < arr.length; i++) {
        cy.get('@paragraphHeader').eq(i).should("have.text", arr[i])
    }

    // We can assert these using each() and validate using explicit assertion
    cy.get('@paragraphHeader').each(($el, index) => {
        cy.log($el.text())
        expect($el.text()).to.equal(arr[index])
    })
    cy.get('@paragraphHeader').each(($el, index) => {
        // To enable further chaining with Cypress commands, re-wrap the element using cy.wrap()
        // This allows for the continuious of implicit assertions
        cy.wrap($el).should("have.text", arr[index]).and("be.visible")
        // Howeever, it is important to note that if he ext is directly retrieved from the element as a string
        // the nature of the content changes from web element to plain STRING
        // In essence, assertions should adapt to use 'eq' instead of 'have.text'
        // Additionally, since the content is no longer a web element
        // furhter chaining with web element-specific commands, such as 'be.visible.' is not gonna work.
        cy.wrap($el.text()).should("eq", arr[index])
    })
    cy.contains('Headings').nextAll().as('Headings')
    const arr2 = ["Programming Languages", "Automation Tools"]
    cy.get("@Headings").each(($el, index) => {
        cy.wrap($el).should("have.text", arr2[index]).and("be.visible")
    })

    cy.contains("Checkboxes").nextAll().as("Checkboxes")
    const boxes = ["Apple", "Microsoft", "Tesla"]
    cy.get("@Checkboxes").each(($el, index) => {
        cy.wrap($el).should("have.text", boxes[index]).and("be.visible")
        cy.get("@Checkboxes").children().should("be.enabled")
    })

    it("Assertions Practices", () => {

        cy.contains("Text Inputs")
    })
    
})

