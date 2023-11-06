describe("Project - Form Elements", () => {
    it("Validate the Contact Us information", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1")
        const ContactUsText = ["Contact Us", "2860 S River Rd Suite 480, Des Plaines, IL 60018", "info@techglobalschool.com", "(773) 257-3010"]
        cy.get(".mb-5").children().each(($el, index) => {
            cy.wrap($el).should("have.text", ContactUsText[index])
        })
    })
    it("Validate the Full name input box", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1")
        cy.get(".field").first().find("input").should("be.visible").and("have.attr", "placeholder", "Enter your full name").and("have.attr", "required")
        cy.get(".field").first().find("label").should("have.text", "Full name *")
    })
    it("Validate the Gender radio button", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1")

        cy.get('.control > .label').contains('Gender').should("have.text", "Gender *").next()
            .find("input").should("have.attr", "required")

        cy.get('.control > .label').contains('Gender').nextAll().as('options')

        const gender = ["Male", "Female", "Prefer not to disclose"]

        cy.get("@options").each(($el, index) => {
            cy.wrap($el).should("have.text", gender[index])
            cy.wrap($el).find("input").should("be.enabled").and("not.be.checked")

        })

        cy.get("@options").contains("Male").children().check().should("be.checked")
        cy.get("@options").contains("Female").children().should("be.not.checked").check().should("be.checked")
        cy.get("@options").contains("Prefer not to disclose").children().should("be.not.checked")
    })

    const obj1 = {
        name: "Address",
        placeholder: "Enter your address"
    }
    const obj2 = {
        name: "Email *",
        placeholder: "Enter your email"
    }
    const obj3 = {
        name: "Phone",
        placeholder: "Enter your phone number"
    }
    const obj4 = {
        name: "Message",
        placeholder: "Type your message here..."
    }

    const allInfo = [obj1, obj2, obj3, obj4]

    it("Validate the Address input box and Phone input box and the Message text area and Email input box'", () => {

        cy.visit("https://techglobal-training.com/frontend/project-1")
        for (let i = 0; i < allInfo.length; i++) {
            if (allInfo[i].name === "Email *") {
                cy.get(".field").contains(allInfo[i].name).should("have.text", allInfo[i].name)
                cy.get(".field").contains(allInfo[i].name).next().children()
                    .should("be.visible").and("have.attr", "placeholder", allInfo[i].placeholder).and("have.attr", "required")
            }
            else {
                cy.get(".field").contains(allInfo[i].name).should("have.text", allInfo[i].name)
                cy.get(".field").contains(allInfo[i].name).next().children()
                    .should("be.visible").and("have.attr", "placeholder", allInfo[i].placeholder).and("have.not.attr", "required")
            }
        }
    })


    it("Validate the Consent checkbox", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1")
        cy.get(".checkbox").should("have.text", " I give my consent to be contacted.").children()
            .should("be.enabled").and("have.attr", "required")
        cy.get(".checkbox").find("input").click().should("be.checked").click().should("be.not.checked")
    })
    it("Validate the SUBMIT button", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1")
        cy.get(".button.is-link").should("be.visible").and("be.enabled").and("have.text", "SUBMIT")
    })

    const info = ["Yuliia Khodak", "2860 S River Rd Suite 480, Des Plaines, IL 60018", "joe_doe@gmail.com", "333 333 3333", "My message"]
    it("Validate the form submission", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1")
        cy.get(".control > input, .textarea").each(($el, index) => {
            cy.wrap($el).type(info[index])
        })
        cy.get('.control > .label').contains('Gender').nextAll().contains("Female").children().check()
        cy.get(".checkbox").find("input").check()
        cy.get(".button.is-link").click()
        cy.on("uncaught:exception", () => {
            return false
        })
        cy.get(".mt-5").should("have.text", "Thanks for submitting!")

    })


})