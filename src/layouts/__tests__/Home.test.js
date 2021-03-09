import { render, screen } from '@testing-library/react';
import Home from 'layouts/Home';
import content from 'assets/json/content.json';
test('renders hero text', () => {
  render(<Home />);
  let re = new RegExp(`${content.hero.title}`, 'i');
  const linkElement = screen.getByText(re);
  expect(linkElement).toBeInTheDocument();
});
