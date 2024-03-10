describe("Login to Kinetics website", () => {
  it("Login with credentials", () => {
    cy.visit("https://kinetics.sandbox.npsx.com/login/");

    cy.get('input[id="username"]').type("aviva-pension@npsx.com");
    cy.get('input[id="password"]').type("4f$fg6RqN#C%");

    cy.get("button.c89f1057d.c08709d93.cfdf7e7ce.c948a708e.cfbc31414").click();

    cy.contains("View Journey").click();
  });
});
