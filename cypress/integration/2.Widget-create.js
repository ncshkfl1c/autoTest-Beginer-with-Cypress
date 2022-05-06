import {
  USER_NAME,
  PASSWORD,
  WIDGET_NAME,
  API_KEY,
  PHONE_NUMBER_FORM,
  REDIRECT_URL,
  LANGUAGE,
  BACKGROUND_COLOR,
  BUTTON_COLOR,
  TEXT_COLOR,
} from "../../variable";

describe("Widgets Creation", () => {
  afterEach(() => {
    //Code to Handle the Sesssions in cypress.
    //Keep the Session alive when you jump to another test
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
    cy.contains("Create New Widget").click();
    cy.get('[name="widget_name"]').type(`${WIDGET_NAME}`);
    cy.wait(2000);
    cy.get('[name="widget_api_key"]').select(`${API_KEY}`);
    cy.get('[name="widget_phone_number"]').type(`${PHONE_NUMBER_FORM}`);
    cy.log(REDIRECT_URL);
    cy.get('[name="widget_redirect_url"]').type(`${REDIRECT_URL}`);
    cy.get("div>button.btn-tiny>span").contains(`${LANGUAGE}`).click();
    cy.get('[name="widget_style"]').select("Dark");
    cy.get('[name="heading"]').type("hello");
    cy.get('[name="background_color"]').type(`${BACKGROUND_COLOR}`);
    cy.get('[name="button_bg_color"]').type(`${BUTTON_COLOR}`);
    cy.get('[name="button_text_color"]').type(`${TEXT_COLOR}`);
    cy.wait(3000);
    //Confirm click
    // cy.get('.modal-footer>button.btn-success').click();
  });
});
