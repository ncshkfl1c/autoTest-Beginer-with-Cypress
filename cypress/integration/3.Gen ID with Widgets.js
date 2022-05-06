import {
  USER_NAME,
  PASSWORD,
  WIDGET_NAME,
  FIRST_NAME,
  LAST_NAME,
  PHONE_NUMBER_TO,
} from "../../variable";

describe("Widgets Creation", () => {
  afterEach(() => {
    //code for cookie not clear
    let str = [];
    cy.getCookies().then((cook) => {
      cy.log(cook);
      for (let l = 0; l < cook.length; l++) {
        if (cook.length > 0 && l == 0) {
          str[l] = cook[l].name;
          Cypress.Cookies.preserveOnce(str[l]);
        } else if (cook.length > 1 && l > 1) {
          str[l] = cook[l].name;
          Cypress.Cookies.preserveOnce(str[l]);
        }
      }
    });
  });

  it("login", () => {
    cy.visit("https://dashboard-dev.paveapi.com/");
    cy.contains("PAVE");
    cy.get("#username")
      .type(`${USER_NAME}`)
      .should("have.value", `${USER_NAME}`);
    cy.get("#password").type(`${PASSWORD}`).should("have.value", `${PASSWORD}`);
    cy.get("button").click();
  });

  it("Go to Widgets Tab", () => {
    cy.contains("Setting").click();
    cy.contains("Widgets").click();
    cy.wait(1500);
    cy.contains("Sharable Link").click();
    cy.get('[placeholder="Search keywords"]')
      .type(`${WIDGET_NAME}`)
      .type("{enter}");
    cy.wait(2000);
    cy.get("code")
      .invoke("text")
      .then((link) => {
        cy.visit(link);
      });

    cy.wait(2000);
  });
  it("GenID", () => {
    cy.get("#first_name").type(`${FIRST_NAME}`);
    cy.get("#last_name").type(`${LAST_NAME}`);
    cy.get("#phone_number").type(`${PHONE_NUMBER_TO}`);
    cy.get("div.text-right>button.text-uppercase").click();
  });
});
