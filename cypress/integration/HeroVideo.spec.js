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
          // Resolve if data from video file has been received
          if (videoElement.readyState > 0) {
            resolve(true);
          }

          // Resolve if video can play (i.e oncanplay event triggered)
          videoElement.oncanplay = () => {
            resolve(true);
          };

          if (videoElement.readyState === 0) {
            reject('No media info available');
          }
        });
      })
      .then(
        (res) => {
          expect(res).to.be.true;
        },
        { timeout: 10000 }
      );
  });
});
