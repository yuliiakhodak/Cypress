/// <reference types="cypress" />

describe("File Dowload and File Upload", () => {
    it("File Dowload", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("File Download & Upload")
        cy.get("#file_download").click()
        cy.readFile("cypress/downloads/SampleText.txt")
    })
    it.only("File Upload", () => {
        cy.visit("https://techglobal-training.com/frontend/")
        cy.clickCard("File Download & Upload")
        cy.get("#file_upload").selectFile("cypress/downloads/SampleText.txt")
        cy.get("#file_submit").realClick()
        cy.get("#result").should("have.text", `You uploaded SampleText.txt`)
    })
   // cy.on("uncaught:exception",() =>{
   //     return false})
})