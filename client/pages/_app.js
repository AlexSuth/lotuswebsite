/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });
function MyApp({ Component, pageProps }) {
  return (
    <div className='w-screen'>
      <Head>
        <link rel="shortcut icon" href="/images/lotuslogo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/lotuslogo.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/lotuslogo.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/lotuslogo.jpg" />
      </Head>
      <Layout>
        <main className={lora.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </div>
  );
}

export default MyApp;
