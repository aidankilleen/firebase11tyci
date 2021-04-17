describe('Eleventy Firebase Github Actions Cypress Testing', () => {

    it ('should load the homepage', () => {

        cy.visit("http://localhost:8080/");
        cy.contains('h1', "Eleventy App");
    });

    it ('should have a link to the about page', () => {
        
        cy.visit("http://localhost:8080/");
        cy.contains("a", "About Us");
    });

    it ('should have a link to the contact page', () => {
        
        cy.visit("http://localhost:8080/");
        cy.contains("a", "Contact Us");
    });

    it ('should be able to load the about page', () => {

        cy.visit("http://localhost:8080/");
        cy.contains("a", "About Us").click();
        cy.contains("h1", "About Us");
        
    });

    it ('should be able to load the contact us page', () => {

        cy.visit("http://localhost:8080/");
        cy.contains("a", "Contact Us").click();
        cy.contains("h1", "Contact Us");

    });

    it ('should be able to navigate to every page', () => {

        cy.visit("http://localhost:8080/");
        cy.contains("a", "Contact Us").click();
        cy.contains("h1", "Contact Us");
        cy.contains("a", "About Us").click();
        cy.contains("h1", "About Us");
        cy.contains("a", "Home").click();
        cy.contains("h1", "Eleventy App");
        cy.contains("a", "About Us").click();
        cy.contains("h1", "About Us");
        cy.contains("a", "Contact Us").click();
        cy.contains("h1", "Contact Us");
        cy.contains("a", "Home").click();
        cy.contains("h1", "Eleventy App");
        
    })
});