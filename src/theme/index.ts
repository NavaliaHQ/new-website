import { PaletteMode, PaletteOptions } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';

const spacing = 8;

const lightPalette: PaletteOptions = {
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#000000',
  },
  primary: {
    main: '#203AF4',
  },
  secondary: {
    main: '#0C064C',
  },
};

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

declare module '@mui/material/styles' {
  interface TypographyVariants {
    comment: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    comment?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    comment: true;
  }
}

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  spacing,
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    h1: {
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'bold',
    },
    comment: {
      fontFamily: 'monospace',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        textTransform: 'uppercase',
        underline: 'none',
        color: 'text.primary',
        fontWeight: 'bold',
      },
    },
    MuiCssBaseline: {},
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
        size: 'small',
        InputProps: { disableUnderline: true },
      },
      styleOverrides: {
        root: {
          '& .MuiFilledInput-root': {
            borderRadius: '4px',
          },
        },
      },
    },
  },
  palette: {
    mode,
    ...(mode === 'light' ? lightPalette : darkPalette),
  },
});
