import { withFronteggApp } from '@frontegg/nextjs/pages';
import type { AppProps } from 'next/app'

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withFronteggApp(CustomApp, 
  {
    hostedLoginBox: true, 
    authOptions: {
    // keepSessionAlive: true // Uncomment this in order to maintain the session alive
    }
});