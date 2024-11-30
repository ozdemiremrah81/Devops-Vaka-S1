describe('Validate API response directly', () => {
  it('Check API response', () => {
    cy.request('GET', '/records').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length(2);
      expect(response.body.data[0]).to.have.property('name', 'John Doe');
    });
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
