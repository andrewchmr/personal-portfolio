import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../styles/main.scss';
import { PageBorder } from "../components/PageBorder";
import { SideMenu } from "../components/SideMenu";
import { IconsSocial } from "../components/IconsSocial";
import { AsteroidsBackground } from "../components/AsteroidsBackground/AsteroidsBackground";
import { Header } from "../components/Header/Header";
import { Cursor } from "../components/Cursor";
import useBodyClass from "../hooks/useBodyClass";
import { AppContext } from '../context/AppContext';
import { pageview } from "../utils/gtag";
import Router from 'next/router';
import { AwardCSSDA } from "../components/AwardCSSDA";

const OverlayMenu = dynamic(
    () => import('../components/OverlayMenu'),
    {ssr: false});

function MyApp({Component, pageProps}: AppProps) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    useBodyClass(`${menuOpen ? 'menu--open' : ''}`);

    useEffect(() => {
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
        setMenuOpen
    };

    return (
        <AppContext.Provider value={contextValue}>
            {/*   <AwardCSSDA/>*/}
            <PageBorder/>
            <SideMenu/>
            <IconsSocial/>
            <AsteroidsBackground/>
            <Header/>
            <Component {...pageProps} />
            <OverlayMenu/>
            <Cursor/>
        </AppContext.Provider>
    )
}

export default MyApp