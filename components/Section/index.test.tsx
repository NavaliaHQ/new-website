import { ReactNode } from 'react';

import { render } from '@testing-library/react';

import Section, { SectionProps } from '.';

const renderSection = (
  props: SectionProps = { name: 'About us' },
  children: ReactNode | undefined = 'About us',
) => render(<Section {...props}>{children}</Section>);

describe('<Section />', () => {
  it('renders children', () => {
    const { getByText } = renderSection();
    expect(getByText('About us')).toBeInTheDocument();
  });

  it('renders a section with a given name as ID', () => {
    const { getByTestId } = renderSection();
    expect(getByTestId('section')).toHaveAttribute('id', 'About us');
  });
});
