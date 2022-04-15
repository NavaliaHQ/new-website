import { PaletteMode, PaletteOptions } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';

const spacing = 8;

const lightPalette: PaletteOptions = {};

const darkPalette: PaletteOptions = {
  background: {
    default: '#000000',
    paper: '#000000',
  },
  text: {
    primary: '#FFFFFF',
  },
  primary: {
    main: '#203AF4',
  },
  secondary: {
    main: '#0C064C',
  },
};

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  spacing,
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    h1: {
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'bold',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        textTransform: 'uppercase',
        underline: 'none',
        color: '#fff',
        fontWeight: 'bold',
      },
    },
  },
  palette: {
    mode,
    ...(mode === 'dark' ? darkPalette : lightPalette),
  },
});
