import Head from 'next/head';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MEDILABS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../icon/subtract.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
