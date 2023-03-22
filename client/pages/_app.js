/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import Head from 'next/head'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-screen'>
      <Head>
          <link rel="shortcut icon" href="/images/lotuslogo.jpg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/lotuslogo.jpg" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/lotuslogo.jpg"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/lotuslogo.jpg"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
