// https://docs.cypress.io/api/introduction/api.html

describe("Should reset password once existing email is entered", () => {
  it("Shows that a button is present for password reset", () => {
    cy.visit("/Forgot");
    cy.contains("Button", "Reset Password");
  });
  it("Resets your password", () => {
    cy.get('[data-test-id="reEmail"]')
      .type("usvmah@gmail.com") //enter EXISTING email
      .should("have.value", "usvmah@gmail.com");

      cy.get('[ data-test-id="reSubmit"]').click(); //click button and notif will give instructions
  });
});
