import '@/styles/globals.scss'
import Head from 'next/head'
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="LM Group Buve, Būvniecība, RealDeal, Warmotech, ProClima, Lunos, Paroc, Materiāli, Privātmājas"/>
        <meta name="language" content="LV" />
        <meta name="robots" content="index,follow" />
        <meta charset="utf-8"/>
        <meta http-equiv="cache-control" content="no-cache"/>     
        <meta name="og:url" content="https://www.lmgroup.lv"/>
        <meta name="og:site_name" content="LM Group Buve"/>

        <link rel="apple-touch-icon" sizes="180x180" href="/img/fav/apple-touch-icon.png?v=1"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/fav/favicon-32x32.png?v=1"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/fav/favicon-16x16.png?v=1"/>
        <link rel="manifest" href="/site.webmanifest?v=1"/>
        <link rel="mask-icon" href="/img/fav/safari-pinned-tab.svg?v=1" color="#000000"/>
        <link rel="shortcut icon" href="/img/fav/favicon.ico?v=1"/>
        <meta name="msapplication-TileColor" content="#000000"/>
        <meta name="theme-color" content="#ffffff"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>

        {/* Google Tag */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-5WEW18C68L"/>

        <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-5WEW18C68L');
              `,
              }}
          />
      
      </Head>
      <Component {...pageProps} />
    </>
  )
}
