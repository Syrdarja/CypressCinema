const admin = require("../fixtures/admin.json");

it("the main page displays Idem v kino", () => {
  cy.visit("/");
  cy.get(".page-header__title").should("be.visible", true);
});

describe("Idem v kino admin ", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("log in to the valid administrator system", () => {
    cy.login(admin.mail, admin.pass);
    cy.contains("Администраторррская").should("be.visible", true);
  });

  it("log in to the invalid administrator system", () => {
    cy.login(admin.mail, "123");
    cy.contains("Ошибка авторизации!").should("be.visible", true);
  });

  it("search for a movie from the admin", () => {
    cy.login(admin.mail, admin.pass);
    cy.get('[draggable="true"][data-film-id="119"] > .conf-step__movie-title ')
      .then(($el) => $el.textContent)
      .should("have.text", "Унесенные ветром.");
    cy.get("[draggable='true'][data-film-id='119'] > .conf-step__movie-title")
      .invoke('text').then((text) => {
        cy.visit("/");
        cy.get(":nth-child(4) > .movie__info > .movie__description > .movie__title").should("have.text", text);
        cy.get("a.page-nav__day:nth-of-type(4)").click();
        cy.contains("17:00").click();
        cy.get(".buying-scheme__wrapper >:nth-child(4) > :nth-child(6)").click();
        cy.get(".acceptin-button").click();
        cy.contains("Вы выбрали билеты:").should("be.visible");
        });
    });
  
})
