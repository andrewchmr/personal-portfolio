import React from "react";

export const AwardCSSDA = () => {
    const awardLink = 'https://www.cssdesignawards.com/sites/andriy-chemerynskiy-portfolio/37283/';

    return (
        <a href={awardLink}
           rel="noopener"
           target='_blank'>
            <img className={'AwardCSSDA'}
                 src="/static/cssda-special-kudos-black.png"
                 width="110"
                 alt="CSSDA WOTD Award Nominee"/>
        </a>
    )
};