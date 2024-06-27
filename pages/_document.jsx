// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://codeforcerdev.netlify.app/assets/imgs/portfolio2.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>    <link rel="stylesheet" type="text/css" href="/assets/Css/style.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/Css/responsive.css"/>
        <link rel="icon" href="/assets/Images/portfolio2.png"/>
    
        <link rel="preconnect" href="https://fonts.googleapis.com/"/>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&amp;family=Titan+One&amp;family=Ubuntu:wght@300;500&amp;display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/assets/libs/bootstrap-icons/bootstrap-icons.css"/>
        <script src="/assets/Javascript/main.jsx"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
