describe('front_end_subscandpassorg',()=>{


    

    it('Has a navbar that has the Login/Sign Up/About links', () => {
        cy.visit('/')
        cy.get('#sub-navbar').should('contain', "Subscription and password organiser")
        cy.get('#sub-navbar').should('contain', "Sign in")
        cy.get('#sub-navbar').should('contain', "Sign up")
        cy.get('#sub-navbar').should('contain', "About")
        cy.contains('About').click()
        cy.contains('Sign in').click()
        cy.contains('Sign up').click()

    });





})