import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './admin/components/layout';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <ThemeProvider theme={theme}>

    <Layout>
      <Component {...pageProps} />
    </Layout>

    </ThemeProvider>

  );
}
