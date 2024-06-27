// pages/_app.js
import Head from 'next/head';

export default function IndexPage({ Component, pageProps }) {
  return (
    <> 
    <Head> 
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="website" content="Adewale Temitope Adeleke portfolio site"/>
        <meta name="keywords" content="codeforcer,website,html,css,Javascript,programmer,python,web,website developer"/><meta name="author" content="Adewale Temitope Adeleke"/>
      <title>codeforcer's Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
