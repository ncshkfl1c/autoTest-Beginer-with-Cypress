import {
  USER_NAME,
  PASSWORD,
  API_KEY,
  PHONE_NUMBER_FORM,
  PHONE_NUMBER_TO,
  VIN,
  FIRST_NAME,
  LAST_NAME,
  LANGUAGE,
} from "../../variable";

describe("Pave DashBoard", function () {
  it("Visit DashBoard and Login", function () {
    cy.visit("https://dashboard-dev.paveapi.com/");
    cy.contains("PAVE");
    cy.get("#username")
      .type(`${USER_NAME}`)
      .should("have.value", `${USER_NAME}`);
    cy.get("#password").type(`${PASSWORD}`).should("have.value", `${PASSWORD}`);
    cy.get("button").click();
  });

  it("Gen ID with send Default", function () {
    cy.url().should("include", "/dashboard");
    // cy.get('[placeholder="Search sessions by keywords"]').type("TMV")
    // cy.wait(5000)
    cy.contains("Send Inspection").click();
    cy.get('[name="launch_api_key"]').select(`${API_KEY}`);

    //required Data
    cy.get('[name="launch_to"]')
      .type(`${PHONE_NUMBER_FORM}`)
      .should("have.value", `${PHONE_NUMBER_FORM}`);
    cy.get('[name="launch_from"]')
      .type(`${PHONE_NUMBER_TO}`)
      .should("have.value", `${PHONE_NUMBER_TO}`);
    cy.get('[name="vin"]').type(`${VIN}`).should("have.value", `${VIN}`);
    
    cy.get('[name="launch_first_name"]')
      .type(`${FIRST_NAME}`)
      .should("have.value", `${FIRST_NAME}`);
    cy.get('[name="launch_last_name"]')
      .type(`${LAST_NAME}`)
      .should("have.value", `${LAST_NAME}`);

    cy.get("div>button.btn-tiny>span").contains(`${LANGUAGE}`).click();
    cy.wait(3000);
    //nut confirm
    cy.get(".modal-footer>button.btn-success.text-head").click();
  });
});
