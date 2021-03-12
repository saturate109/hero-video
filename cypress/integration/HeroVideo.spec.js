import { CONTENT_JSON_FILE } from '/cypress/support/constants';

describe('Hero Video', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has a video element', () => {
    cy.get('video').should('exist');
  });

  it('can play the video file', () => {
    cy.readFile(CONTENT_JSON_FILE).then((contentData) => {
      cy.get('video').should('have.attr', 'src', contentData.hero.video);
    });

    cy.get('video')
      .then((video) => {
        const videoElement = video.get(0);
        return new Cypress.Promise((resolve, reject) => {
          // Resolve if data received is enough to play the video
          if (videoElement.readyState === 4) {
            resolve(true);
          }

          // Resolve if video can play (i.e oncanplay event triggered)
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
