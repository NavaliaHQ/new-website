import { useContext } from 'react';

import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ThemeContext } from 'src/contexts/ThemeContext';
import NavaliaLogo from 'src/components/NavaliaLogo';
import ScrollLink from 'src/components/ScrollLink';

const Navbar = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const { themeName, toggleTheme } = useContext(ThemeContext);

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
      <ScrollLink to="home">
        <IconButton>
          <NavaliaLogo />
        </IconButton>
      </ScrollLink>
      <Grid
        container
        columnGap={isXs ? 1 : 3}
        flexDirection="row"
        width={isXs ? '100%' : 'auto'}
        alignItems="center"
        justifyContent={isXs ? 'space-between' : 'initial'}
      >
        <ScrollLink to="about">About us</ScrollLink>
        <ScrollLink to="contact">Contact</ScrollLink>
        <ScrollLink to="careers">Careers</ScrollLink>
        <ScrollLink to="news">News</ScrollLink>
        <IconButton onClick={toggleTheme}>
          {themeName === 'light' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Navbar;
