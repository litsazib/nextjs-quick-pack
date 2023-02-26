import Layout from './Layout';
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { SSRProvider } from 'react-bootstrap';
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }) {

  // https://www.npmjs.com/package/nextjs-progressbar

  return (
    <>
    <SSRProvider>
      <Layout>
      <NextNProgress options={{ easing: 'ease', speed: 500 }} />
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
    </>
  )
}
