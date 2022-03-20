describe('front_end_subscandpassorg',()=>{


    it('Has a navbar that has the Login/Sign Up/About links', () => {
        cy.visit('/')
        cy.get('#sub-navbar').should('contain', "Subscription and password organiser")
    
    });





})