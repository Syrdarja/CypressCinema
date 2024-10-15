Cypress.Commands.add("login", (email, password) => {
    cy.get("[for='email'] > .login__input").type(email);
    cy.get("[for='pwd'] > .login__input").type(password);
    cy.get(".login__button").click();
})