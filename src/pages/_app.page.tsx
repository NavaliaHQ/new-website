import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';

import Layout from 'src/components/Layout';
import { ThemeProvider } from 'src/contexts/ThemeContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
