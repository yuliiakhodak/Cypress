import TablesPage from "../../pages/TablesPage"
const tablePage = new TablesPage() // create a new obj on class
beforeEach(() => {
    cy.fixture("example").then(function (data) {
        this.headers = data.headers
    })
})

describe("Static Table", function () {

    it("Verify the headers of the table",{tags: ["@smoke", "@regression"]}, function () {
        cy.clickCard("Tables")
        tablePage.getCompanyTableHeaders().each(($el, index) => {
            cy.wrap($el).should("have.text", this.headers[index])
        })
    })
})