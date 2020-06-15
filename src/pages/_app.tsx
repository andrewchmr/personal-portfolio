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
import ReactGA from 'react-ga';

const OverlayMenu = dynamic(
    () => import('../components/OverlayMenu'),
    {ssr: false});

function MyApp({Component, pageProps}: AppProps) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    useBodyClass(`${menuOpen ? 'menu--open' : ''}`);

    useEffect(() => {
        initializeReactGA()
    }, []);

    const initializeReactGA = () => {
        ReactGA.initialize('UA-150290652-3');
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