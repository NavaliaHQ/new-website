import { ReactNode } from 'react';

import { render } from '@testing-library/react';

import Layout, { LayoutProps } from '.';

const renderLayout = (props = {}, children: ReactNode | undefined = 'Layout') =>
  render(<Layout {...props}>{children}</Layout>);

describe('<Layout />', () => {
  it('renders children', () => {
    const { getByText } = renderLayout();
    expect(getByText('Layout')).toBeInTheDocument();
  });

  it('renders Navbar', () => {
    const { getByRole } = renderLayout();
    expect(getByRole('navigation')).toBeInTheDocument();
  });
});
