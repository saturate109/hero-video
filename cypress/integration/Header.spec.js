describe('Header', () => {
  before(() => {
    cy.visit('/');
  });

  it('is transparent when page first loads', () => {
    cy.get('video').should('exist');
  });

  it('is black when page has been scrolled', () => {
    cy.scrollTo(0, 500);
    cy.get('div.scrolled').should(
      'have.css',
      'background-color',
      'rgb(0, 0, 0)'
    );
  });
});
