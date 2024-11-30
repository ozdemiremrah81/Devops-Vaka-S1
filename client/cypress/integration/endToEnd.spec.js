describe('API Interception Example', () => {
  it('Intercepts API calls', () => {
    // Intercept GET requests to the API endpoint
    cy.intercept('GET', '**/api/*', (req) => {
      req.on('response', (res) => {
        console.log('Intercepted Response:', res);
      });
    });

    // Navigate to the page that triggers the API call
    cy.visit('/dashboard');

    // Perform additional assertions if needed
    cy.contains('Dashboard').should('exist');
  });
});
describe("Web site availability", () => {
  after(() => {
    cy.contains("Delete").click({ force: true });
  });
  it("Sanity listings web site", () => {
    cy.visit("http://16.16.163.150:32000");
    cy.contains("Create Record").should("exist");
  });
  it("Test Adding Employee listings", () => {
    cy.visit("http://16.16.163.150:32000/create");
    cy.get("#name").type("Employee1");
    cy.get("#position").type("Position1");
    cy.get("#positionIntern").click({ force: true });
    cy.contains("Create person").click({ force: true });
    cy.visit("http://16.16.163.150:32000");
    cy.contains("Employee1").should("exist");
  });
});
