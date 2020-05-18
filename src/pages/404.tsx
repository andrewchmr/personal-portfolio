import React from "react";
import Link from 'next/link';

function NoMatch() {
    return (<>
            <img alt="Sad Baby Yoda - GIF" style={{maxWidth: '100%'}} src='/media/baby_yoda.gif'/>
            <div>Sorry, that page cannot be found</div>
            <div>Try going <Link href={'/'}>
                <a style={{textDecoration: 'underline'}}>here</a>
            </Link> instead, thanks.
            </div>
        </>
    )
}

export default NoMatch;