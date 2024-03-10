describe("Google search", () => {
  it('searches for "what is cypress" by pressing enter', () => {
    cy.visit("https://www.google.com/");
    cy.get('[name="q"]').type("what is cypress{enter}");
    cy.contains("Cypress.io: JavaScript End to End Testing Framework").should(
      "be.visible"
    );
  });
});
