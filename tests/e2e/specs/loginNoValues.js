// https://docs.cypress.io/api/introduction/api.html

describe("Pressing login without any inputs activates error message", () => {
  it("Shows error message when button clicked", () => {
    cy.visit("/Login");
    cy.get('[test-data-id="Enter-Email"]')
    .should("have.value", "");
    cy.get('[test-data-id="Enter-Password"]')
    .should("have.value", "");
    cy.get('[test-data-id="submitLogin"]').click()
  });
});