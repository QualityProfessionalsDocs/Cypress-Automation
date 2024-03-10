const xlsx = require("xlsx");

describe("User Registration Automation", () => {
  beforeEach(() => {
    // Visit the website before each test
    cy.visit("https://demowebshop.tricentis.com/");
  });

  it("should register users from Excel sheet", () => {
    // Load data from Excel sheet
    const workbook = xlsx.readFile("C:\\ARTemp\\cypress\\Book1.xlsx");
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const users = xlsx.utils.sheet_to_json(sheet);

    // Iterate through each user and register
    users.forEach((user) => {
      cy.get('a[href="/register"]').click(); // Click on register link

      // Fill out registration form
      cy.get("#FirstName").type(user["First Name"]);
      cy.get("#LastName").type(user["Last Name"]);
      cy.get("#Email").type(user["Email"]);
      cy.get("#Password").type(user["Password"]);
      cy.get("#ConfirmPassword").type(user["Password"]);

      // Submit registration form
      cy.get("#register-button").click();

      // Check if registration is successful
      cy.contains("Your registration completed").should("be.visible");

      // Click on continue button
      cy.contains("Continue").click();

      // Check if email ID is correct and logout option is visible
      cy.contains(user["Email"]).should("be.visible");
      cy.contains("Log out").should("be.visible");
    });
  });
});
