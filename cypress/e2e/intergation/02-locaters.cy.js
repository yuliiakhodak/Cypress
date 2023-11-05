describe("CSS Locators", () =>{

    it("Understanding CSS Syntax", () =>{
        cy.visit("https://techglobal-training.com/frontend/html-elements")
        cy.get("#hello_paragraph")
        cy.get("#testing_paragraph")
        cy.get("#microsoft_check")
        //cy.get("#c#_radio")
    })
})