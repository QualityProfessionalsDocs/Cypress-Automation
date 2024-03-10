describe("Automate Web Interactions", function () {
  it("Fill and submit a form", function () {
    // Visit the webpage
    cy.visit("https://demo.automationtesting.in/Register.html");

    // Maximize the window
    cy.viewport("macbook-15");

    // Fill in the form fields
    cy.get('[placeholder="First Name"]').type("Madhuri");
    cy.get('[placeholder="Last Name"]').type("Dharrao");
    cy.get('textarea[rows="3"]').type("Pune");
    cy.get('input[type="email"]').type("madhuri@gmail.com");
    cy.get('#basicBootstrapForm input[type="text"]').eq(1).type("11111111");

    // Select radio buttons
    cy.get('input[value="Female"]').check();
    cy.get("#checkbox2").check();
    cy.get("#checkbox1").check();

    // Open the dropdown and select values
    cy.get("#msdd").click();
    cy.contains("English").click();
    cy.contains("Arabic").click();

    cy.get("#Skills").select("C");

    // Select items from another dropdown
    cy.get(".select2-selection__arrow").click();
    cy.get(".select2-search__field").type("In");
    cy.get(".select2-results__option--highlighted").click();

    cy.get('[placeholder="Year"]').select("1998");
    cy.get('[placeholder="Month"]').select("January");
    cy.get('[placeholder="Day"]').select("2");

    // Set passwords
    cy.get("#firstpassword").type("madhuri");
    cy.get("#secondpassword").type("madhuri");

    // Submit the form
    cy.get("#submitbtn").click();

    // Wait for a moment
    cy.wait(1000);

    // Click a button
    cy.get("#Button1").click();

    // Wait for 2 seconds
    cy.wait(2000);
  });
});
