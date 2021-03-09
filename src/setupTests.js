// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'intersection-observer';

// https://github.com/testing-library/react-testing-library/issues/470#issuecomment-710775040
Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
});
