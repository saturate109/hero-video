describe('Hero Video', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has a video element and it can play the video', () => {
    cy.get('video').should('exist');

    cy.readFile('src/assets/json/content.json').then((contentData) => {
      cy.get('video').should('have.attr', 'src', contentData.hero.video);
    });

    cy.get('video')
      .then((video) => {
        const videoElement = video.get(0);
        return new Cypress.Promise((resolve, reject) => {
          videoElement.oncanplay = () => {
            resolve(true);
          };
        });
      })
      .then((res) => {
        expect(res).to.be.true;
      });
  });
});
