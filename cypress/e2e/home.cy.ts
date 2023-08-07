describe('Homa Page', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000')

  })

  context('Hero section', () => {

    it('The h1 contains the right text', () => {
  
      cy.getByData("hero-heading").contains(/testing next.js applications with cypress/i)
  
    })
  
    it('The features on the homepages are correct', () => {
  
      cy.get('dt').eq(0).contains(/4 courses/i)
      cy.get('dt').eq(1).contains("25+ Lessons")
      cy.get('dt').eq(2).contains(/free and open source/i)
  
    })

  })

  context('Course section', () => {

    it.only("Course: Testing Your First Next.js Application", () => {

      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")

    })

    it.only("Course: Testing Foundations", () => {

      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")

    })

    it.only("Course: Cypress Fundamentals", () => {

      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")

    })

  })

})