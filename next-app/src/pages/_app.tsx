// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import Layout from './admin/components/layout';
// import theme from '../theme';
// import { ThemeProvider } from '@mui/material/styles';

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return ( 
//     <ThemeProvider theme={theme}>

//     <Layout>
//       <Component {...pageProps} />
//     </Layout>

//     </ThemeProvider>

//   );
// }


import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}