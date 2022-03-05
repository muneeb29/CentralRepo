// https://docs.cypress.io/api/introduction/api.html

describe("Error if no values entered", () => {
    it("Should sign up when entering credentials pop up a verify notif", () => {
      cy.visit("/Signup");
      cy.get('[test-data-id="Name"]').type("tester1").should("have.value", "tester1"); //enter new values for account
      cy.get('[test-data-id="Address"]').type("211 tester street").should("have.value", "211 tester street");
      cy.get('[test-data-id="Telephone"]').type("07762735213").should("have.value", "07762735213");
      cy.get('[test-data-id="Ins-Aff"]').type("manchester metropol").should("have.value", "manchester metropol");
      cy.get('[test-data-id="Email"]').type("tester1@gmail.com").should("have.value", "tester1@gmail.com");
      cy.get('[test-data-id="Password"]').type("passport").should("have.value", "passport");
      cy.get('[test-data-id="Confirm-Password"]').type("passport").should("have.value", "passport"); 
      cy.get('[test-data-id="Signup"]').click(); //account is registered, 
                                                //notif will appear
    });
  });