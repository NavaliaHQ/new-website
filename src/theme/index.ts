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
    h5: {
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1.2rem',
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
            backgroundColor:
              mode === 'light'
                ? lightPalette.text?.primary
                : darkPalette.text?.primary,
            transition: 'opacity 0.2s ease-in-out',
            opacity: mode === 'light' ? 0.06 : 0.12,
            '&:hover': {
              opacity: mode === 'light' ? 0.1 : 0.15,
              '@media (hover: none)': {
                opacity: mode === 'light' ? 0.1 : 0.15,
              },
            },
            '&:focus': {
              opacity: mode === 'light' ? 0.1 : 0.15,
            },
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
