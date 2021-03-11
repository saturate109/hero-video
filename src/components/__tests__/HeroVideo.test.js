import { render, screen } from '@testing-library/react';
import HeroVideo from 'components/HeroVideo';
import content from 'assets/json/content.json';

test('Renders hero text', () => {
  const props = { src: content.hero.video };
  render(<HeroVideo {...props}>{content.hero.title}</HeroVideo>);
  let re = new RegExp(`${content.hero.title}`, 'i');
  const linkElement = screen.getByText(re);
  expect(linkElement).toBeInTheDocument();
});
