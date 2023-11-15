/// <reference types="cypress" />


describe("Hooks", () => {
    before(() => {
        cy.log("Runs once before all test in the block")
    })
    after(() => {
        cy.log("Runs once after all test in the block")
    })
    beforeEach(() => {
        cy.log("Runs once before each test in the block")
    })
    afterEach(() => {
        cy.log("Runs once after each test in the block")
    })
    it("Example test 1 ", () => {
        cy.log("example test 1")
    })
    it("Example test 2 ", () => {
        cy.log("example test 2")
    })
})
