import React, {ReactNode} from "react";
import Head from 'next/head';
import classNames from "classnames";

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

    const contentClasses = classNames(
        'Layout__content',
        {
            'Layout__content--fullscreen': fullscreen,
            'Layout__content--center': !fullscreen,
        }
    );

    return <>
        <Head>
            <title>{getPageTitle()}</title>
            <meta name="description" content={description}/>
            <meta name="og:title" property="og:title" content={getPageTitle()}/>
            <meta name="og:description" property="og:description" content={description}/>
        </Head>
        <div className='Layout'>
            <div className='Layout__container'>
                <div className={contentClasses}>
                    {children}
                </div>
            </div>
        </div>
    </>
};