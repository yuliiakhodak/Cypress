describe("Project - Form Elements", () =>{
    it.only("Validate the Gender radio button", () =>{
        cy.visit("https://techglobal-training.com/frontend/project-1")

        cy.get(".field").contains("Gender").should("have.text", "Gender *")

        const gender = ["Male", "Female", "Prefer not to disclose"]
        
        cy.get(".radio").each(($el, index) =>{
            cy.wrap($el).should("have.text", gender[index])
            cy.wrap($el).find("input").should("be.enabled").and("not.be.checked")
        })
        cy.get(".mr-1").first().check().should("be.checked")
        
        cy.get('.mr-1').each(($radio, index) => {
            
            $radio[index].checked = true;
            $radio[index].checked = false;
          })

    })
})