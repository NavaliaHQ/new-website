import Grid from '@mui/material/Grid';
import MUILink from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

const Navbar = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  return (
    <Grid
      data-testid="navbar"
      component="nav"
      paddingY={isXs ? 2 : 5}
      container
      direction={isXs ? 'column' : 'row'}
      rowGap={2}
      justifyContent={isXs ? 'center' : 'space-between'}
      alignItems="center"
    >
      <Grid
        item
        role="button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Image
          src="/assets/logo-white.svg"
          alt="Navalia logo"
          width={40}
          height={40}
        />
      </Grid>

      <Grid
        container
        gap={3}
        flexDirection="row"
        width={isXs ? '100%' : 'auto'}
        justifyContent={isXs ? 'space-between' : 'initial'}
      >
        <MUILink href="/#about-us">About us</MUILink>
        <MUILink href="/#contact">Contact</MUILink>
        <MUILink href="/#careers">Careers</MUILink>
        <MUILink href="/#news">News</MUILink>
      </Grid>
    </Grid>
  );
};

export default Navbar;
