import React from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../styles/main.scss';
import { SideMenu } from "../components/SideMenu";
import { IconsSocial } from "../components/IconsSocial";
import { Cursor } from "../components/Cursor";
import useBodyClass from "../hooks/useBodyClass";
import { AppContext } from '../context/AppContext';
import { GA_TRACKING_ID, pageview } from "../utils/gtag";
import Router from 'next/router';
import { AwardCSSDA } from "../components/AwardCSSDA";
import Head from "next/head";

const image = 'https://andrewchmr.com/static/about';
const title = 'Andriy Chemerynskiy | Web Developer | Frontend Developer | Javascript | React';
const description = 'Hey, I’m Andriy Chemerynskiy, a Software Engineer currently based in Wroclaw, Poland.';

const AsteroidsBackground = dynamic(
  () => import('../components/AsteroidsBackground'),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [linkHovered, setLinkHovered] = React.useState(false);
  useBodyClass(`${menuOpen ? 'menu--open' : ''}`);

  React.useEffect(() => {
    handleGoogleAnalytics();
  }, []);

  const handleGoogleAnalytics = () => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    }
  };

  const contextValue = {
    menuOpen,
    setMenuOpen,
    linkHovered,
    setLinkHovered
  };

  return (
    <AppContext.Provider value={contextValue}>
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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="og:description" property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
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
      <AwardCSSDA />
      <SideMenu />
      <IconsSocial />
      <AsteroidsBackground />
      <Component {...pageProps} />
      <Cursor />
    </AppContext.Provider>
  )
}

export default MyApp