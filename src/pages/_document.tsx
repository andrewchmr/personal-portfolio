import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from "react";
import { GA_TRACKING_ID } from "../utils/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png/" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121212" />
          <meta name="apple-mobile-web-app-title" content="andrewchmr" />
          <meta name="application-name" content="andrewchmr" />
          <meta name="msapplication-TileColor" content="#121212" />
          <meta name="theme-color" content="#121212" />
          <meta name="author" content="Andriy Chemerynskiy" />
          <meta property="og:title" content="Andriy Chemerynskiy Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Andriy Chemerynskiy Portfolio" />
          <meta property="og:url" content="https://andrewchmr.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Andriy Chemerynskiy Portfolio" />
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Fix FOUC for Firefox */}
          <Script>0</Script>
        </body>
      </Html>
    )
  }
}

export default MyDocument