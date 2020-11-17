import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe('Home', () => {
  it('should render page heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: 'NextJS Demo' })).toBeInTheDocument();
  });

  it('should display link to login page', () => {
    render(<Home />);
    expect(screen.getByText('login').closest('a')).toHaveAttribute('href', '/login')
  });
});
