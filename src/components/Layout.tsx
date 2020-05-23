import React, {ReactNode} from "react";
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    pageTitlePrefix: string;
    description: string;
    fullscreen?: boolean;
}

export const Layout = ({children, pageTitlePrefix, fullscreen, description}: LayoutProps) => {

    const getPageTitle = () => {
        const basePageTitle = 'Andriy Chemerynskiy | Web Developer | Frontend Developer | Javascript | React';
        return pageTitlePrefix ? `${pageTitlePrefix} - ${basePageTitle}` : basePageTitle;
    };

    const getContentClassName = () => {
        return `Layout__content Layout__content--${fullscreen ? 'fullscreen' : 'center'}`;
    };

    return <>
        <Head>
            <title>{getPageTitle()}</title>
            <meta name="description" content={description}/>
            <meta name="og:title" property="og:title" content={getPageTitle()}/>
            <meta name="og:description" property="og:description" content={description}/>
        </Head>
        <div className='Layout'>
            <div className='Layout__container'>
                <div className={getContentClassName()}>
                    {children}
                </div>
            </div>
        </div>
    </>
};