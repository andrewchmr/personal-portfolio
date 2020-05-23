import React from 'react'
import {AppProps} from 'next/app'
import {PageBorder} from "../components/PageBorder";
import {SideMenu} from "../components/SideMenu";
import {IconsSocial} from "../components/IconsSocial";
import {AsteroidsBackground} from "../components/AsteroidsBackground/AsteroidsBackground";
import {Header} from "../components/Header/Header";
import '../styles/components/Header/Hamburger/Hamburger.scss';
import '../styles/components/Header/Header.scss';
import '../styles/components/IconsSocial.scss';
import '../styles/components/Layout.scss';
import '../styles/components/PageBorder.scss';
import '../styles/components/SideMenu.scss';
import '../styles/main.scss';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <PageBorder/>
            <SideMenu/>
            <IconsSocial/>
            <AsteroidsBackground/>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp