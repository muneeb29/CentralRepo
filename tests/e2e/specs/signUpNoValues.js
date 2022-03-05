// https://docs.cypress.io/api/introduction/api.html

describe("Error if no values entered", () => {
  it("Should request you to fill in fields", () => {
    cy.visit("/Signup");
    cy.contains("Button", "Signup");
  });
  it("Error if no values are entered", () => {
    cy.visit("/Signup");
    cy.get('[test-data-id="Name"]').should('have.value','') //no fields inputted
    cy.get('[test-data-id="Address"]').should('have.value','')
    cy.get('[test-data-id="Telephone"]').should('have.value','')
    cy.get('[test-data-id="Ins-Aff"]').should('have.value','')
    cy.get('[test-data-id="Email"]').should('have.value','')
    cy.get('[test-data-id="Password"]').should('have.value','')
    cy.get('[test-data-id="Confirm-Password"]').should('have.value','')
    cy.get('[test-data-id="Signup"]').click() //pressing will enable error messages
  });
});