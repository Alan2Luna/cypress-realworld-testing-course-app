describe("Newsletter Subscribe Form", () => {

    beforeEach(() => {

      cy.visit("http://localhost:3000")

    })
  
    it("allows users to subscribe to the email list", () => {

        cy.getByData("email-input").type("alan@luna.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("alan@luna.com")

    })

    it("does NOT allow an invalid email addresses", () => {

        cy.getByData("email-input").type("alan")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")

    })

    it.only("does NOT allow an already subscribed email", () => {

        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("already exists. Please use a different email address.")

    })

})