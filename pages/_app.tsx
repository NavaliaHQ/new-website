import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import type { AppProps } from 'next/app';

import Layout from 'components/Layout';
import { getDesignTokens } from 'theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={responsiveFontSizes(createTheme(getDesignTokens('dark')))}
    >
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
