import { FC, PropsWithChildren } from 'react';

import Container from '@mui/material/Container';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export interface SectionProps {
  name: string;
  sx?: SxProps<Theme>;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  name,
  sx,
}) => (
  <Container
    data-testid="section"
    component="section"
    id={name}
    sx={{
      minHeight: '100vh',
      scrollMarginTop: 144,
      marginTop: 10,
      ...sx,
    }}
    disableGutters
  >
    {children}
  </Container>
);

export default Section;
