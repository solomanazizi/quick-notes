import Button from './Button';
import { render, screen } from '@testing-library/react';

test('renders button label', () => {
  render(<Button label="mock label" onClick={() => {}} />);
  const buttonElement = screen.getByText(/mock label/i);
  expect(buttonElement).toBeInTheDocument();
});
