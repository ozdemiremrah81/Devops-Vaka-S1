describe("Web site availability", () => {
  const baseUrl = "http://16.16.163.150:32000";

  after(() => {
    // Cleanup action: Deletes the created record
    cy.contains("Delete").click({ force: true });
  });

  it("Sanity check for the web site", () => {
    // Visits the homepage and checks for the existence of "Create Record"
    cy.visit(baseUrl);
    cy.contains("Create Record").should("exist");
  });

  it("Test adding an employee listing", () => {
    // Navigate to the create record page
    cy.visit(`${baseUrl}/create`);

    // Fill out the form
    cy.get("#name").type("Employee1");
    cy.get("#position").type("Position1");
    cy.get("#positionIntern").click({ force: true });

    // Submit the form
    cy.contains("Create person").click({ force: true });

    // Verify the new employee record is displayed on the homepage
    cy.visit(baseUrl);
    cy.contains("Employee1").should("exist");
  });
});