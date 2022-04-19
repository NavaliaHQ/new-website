import { FC, PropsWithChildren } from 'react';

import Container from '@mui/material/Container';

import Navbar from 'src/components/Navbar';

export interface LayoutProps {}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => (
  <>
    <Container
      maxWidth="lg"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: 'background.default',
      }}
    >
      <Navbar />
    </Container>
    <Container maxWidth="lg">
      <main>{children}</main>
    </Container>
  </>
);

export default Layout;
