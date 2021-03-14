import { CONTENT_JSON_FILE } from '/cypress/support/constants';

describe('The Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('contains the expected <title> tag', () => {
    cy.readFile(CONTENT_JSON_FILE).then((contentData) => {
      cy.title().should('eq', contentData.page.title);
    });
  });
});
