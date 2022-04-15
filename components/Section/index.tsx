import { FC, PropsWithChildren } from 'react';

import Container from '@mui/material/Container';

export interface SectionProps {
  name: string;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({ children, name }) => (
  <Container
    data-testid="section"
    component="section"
    id={name}
    sx={{ height: '100vh' }}
    disableGutters
  >
    {children}
  </Container>
);

export default Section;
