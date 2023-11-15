import LoginPage from "../../pages/LoginPage";
// fixture - make sure to use function callback instead of error function.

describe('Login page test', () => {
    beforeEach(() => {
        cy.fixture("example").then(function (data) {
            this.username = data.username
            this.password = data.password
        })
    })

    it('Login without POM', () => {
        cy.clickCard("Project - Login Function");

        cy.get('#username').type('TechGlobal')

        cy.get('#password').type('Test1234')

        cy.get('#login_btn').click()

        cy.get('#success_lgn').should('be.visible')
    })

    const loginPage = new LoginPage() // define constractor - special method that helps us to create an obj
    // class - we can export all the methods together - to accsess you have to create an obj
    it('Login with POM', {tags: ["@smoke", "@regression"]}, function () {
        cy.clickCard("Project - Login Function");

        loginPage.userLogin(this.username, this.password);

        loginPage.getSuccessMessage().should("be.visible")


    })
})
