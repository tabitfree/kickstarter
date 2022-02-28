import '../fonts/fonts.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../_utils/theme';
import Layout from '../components/Layout/Layout';
import GlobalStyle from '../_utils/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
