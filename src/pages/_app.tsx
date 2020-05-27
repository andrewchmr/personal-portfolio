import React from 'react'
import {AppProps} from 'next/app';
import '../styles/main.scss';
import {PageBorder} from "../components/PageBorder";
import {SideMenu} from "../components/SideMenu";
import {IconsSocial} from "../components/IconsSocial";
import {AsteroidsBackground} from "../components/AsteroidsBackground/AsteroidsBackground";
import {Header} from "../components/Header/Header";
import {Cursor} from "../components/Cursor";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <PageBorder/>
            <SideMenu/>
            <IconsSocial/>
            <AsteroidsBackground/>
            <Header/>
            <Component {...pageProps} />
            <Cursor/>
        </>
    )
}

export default MyApp