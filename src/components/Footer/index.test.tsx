import { render } from '@testing-library/react';

import Footer from '.';

describe('<Footer />', () => {
  it('renders the Navalia logo', () => {
    it('renders Navalia logo', () => {
      const { getByAltText } = render(<Footer />);
      const logo = getByAltText('Navalia logo');
      expect(logo).toBeInTheDocument();
    });
  });
});
