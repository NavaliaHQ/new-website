import React from 'react';

import { render, waitFor } from '@testing-library/react';

import NavaliaLogo from '.';

describe('<NavaliaLogo />', () => {
  it('renders the colored logo when light theme is active', async () => {
    jest.spyOn(React, 'useContext').mockReturnValue({ themeName: 'light' });
    const { getByAltText } = render(<NavaliaLogo />);

    await waitFor(() => {
      expect(getByAltText('Navalia logo')).toHaveAttribute(
        'src',
        '/assets/logo-colored.svg',
      );
    });
  });

  it('renders the white logo when dark theme is active', async () => {
    jest.spyOn(React, 'useContext').mockReturnValue({ themeName: 'dark' });
    const { getByAltText } = render(<NavaliaLogo />);

    await waitFor(() => {
      expect(getByAltText('Navalia logo')).toHaveAttribute(
        'src',
        '/assets/logo-white.svg',
      );
    });
  });
});
