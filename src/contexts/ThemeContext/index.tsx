import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

import { getDesignTokens } from 'src/theme';

type ThemeName = 'light' | 'dark';

interface ThemeContextValue {
  themeName: ThemeName;
  toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  themeName: 'light',
  toggleTheme: undefined,
});

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [themeName, setThemeName] = useState('light' as ThemeName);

  const toggleTheme = useCallback(() => {
    setThemeName((currentThemeName) => {
      const newThemeName = currentThemeName === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newThemeName);
      return newThemeName;
    });
  }, []);

  useEffect(() => {
    setThemeName((localStorage.getItem('theme') ?? 'light') as ThemeName);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <MUIThemeProvider
        theme={responsiveFontSizes(createTheme(getDesignTokens(themeName)))}
      >
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
