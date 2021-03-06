import { render } from '@testing-library/react';

import Navbar from '.';

describe('<Navbar />', () => {
  it('renders Navalia logo', () => {
    const { getByAltText } = render(<Navbar />);
    const logo = getByAltText('Navalia logo');
    expect(logo).toBeInTheDocument();
  });

  it("Renders 'About us' section link", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('About us')).toBeInTheDocument();
  });

  it("Renders 'Contact' section link", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it("Renders 'Articles' section link", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Articles')).toBeInTheDocument();
  });
});
