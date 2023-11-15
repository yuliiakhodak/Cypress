/// <reference types="cypress" />

import LoginPage from "../../pages/LoginPage";
const loginPage = new LoginPage()


describe("Project - Login Function", () => {

    it("Test Case 01 - Validate the login form", () => {
        cy.visit("https://techglobal-training.com/frontend/project-2")
        loginPage.getLoginButton().should("be.visible").and("have.not.attr", "required")

    })
})