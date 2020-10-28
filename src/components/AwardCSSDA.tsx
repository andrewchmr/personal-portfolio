import React from "react";
import Image from 'next/image';

export const AwardCSSDA = () => {
  const awardLink = 'https://www.cssdesignawards.com/sites/andriy-chemerynskiy-portfolio/37283/';

  return (
    <a href={awardLink}
      rel="noopener"
      target='_blank'>
      <span className={'AwardCSSDA'}>
        <Image
          src="/static/cssda-special-kudos-black.png"
          width="110"
          height="110"
          alt="CSSDA WOTD Award Nominee" />
      </span>
    </a>
  )
};