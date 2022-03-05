// https://docs.cypress.io/api/introduction/api.html

describe("Email and password log you in", () => {
    it("Login button is present", () => {
      cy.visit("/Login"); //visit login page
      cy.contains("Button", "Login"); //checks if button and login exist in login page
    });
    it("Logs you in for as long as email and password exist", () => {
      cy.get('[test-data-id="Enter-Email"]')
      .type("usvmah@gmail.com")//input a REGISTERED email
      .should("have.value", "usvmah@gmail.com");
      cy.get('[test-data-id="Enter-Password"]') //input a REGISTERED password
      .type("usamah")
      .should("have.value", "usamah");
      cy.get('[test-data-id="submitLogin"]').click() //logs user in
    });
  });