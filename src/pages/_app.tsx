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
import { Workbox } from "workbox-window";

const OverlayMenu = dynamic(
    () => import('../components/OverlayMenu'),
    {ssr: false});

function MyApp({Component, pageProps}: AppProps) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    useBodyClass(`${menuOpen ? 'menu--open' : ''}`);

    useEffect(() => {
        addServiceWorker();
    }, []);

    const addServiceWorker = () => {
        if (
            !("serviceWorker" in navigator) ||
            process.env.NODE_ENV !== "production"
        ) {
            console.warn("Progressive Web App support is disabled");
            return;
        }
        const wb = new Workbox("sw.js", {scope: "/"});
        wb.register();
    };

    const contextValue = {
        menuOpen,
        setMenuOpen
    };

    return (
        <AppContext.Provider value={contextValue}>
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