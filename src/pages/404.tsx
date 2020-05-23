import React from "react";
import Link from 'next/link';
import {Layout} from "../components/Layout";

function NoMatch() {
    return (
        <Layout
            pageTitlePrefix={`Page not found`}
            description={'Hey, I’m Andriy Chemerynskiy, a Software Engineer currently based in Wroclaw, Poland.'}>
            <img alt="Sad Baby Yoda - GIF" style={{maxWidth: '100%'}} src='/static/baby-yoda.gif'/>
            <div>Sorry, that page cannot be found</div>
            <div>Try going <Link href={'/'}>
                <a style={{textDecoration: 'underline'}}>here</a>
            </Link> instead, thanks.
            </div>
        </Layout>
    )
}

export default NoMatch;