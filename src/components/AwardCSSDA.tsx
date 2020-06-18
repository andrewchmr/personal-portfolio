import React from "react";

export const AwardCSSDA = () => {
    const awardLink = 'https://www.cssdesignawards.com/sites/andriy-chemerynskiy-portfolio/37283/';

    return (
        <a href={awardLink}
           rel="noopener"
           target='_blank'>
            <img className={'AwardCSSDA'}
                 src="https://www.cssdesignawards.com/images/2017/monogram/cssda-nominee-black.png"
                 width="110"
                 alt="CSSDA WOTD Award Nominee"/>
        </a>
    )
};