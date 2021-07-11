import React from "react";
import classNames from "classnames";

interface Props {
  fullscreen?: boolean;
  contentClassName?: string;
}

export const Layout: React.FC<Props> = ({ children, fullscreen, contentClassName }) => {

  const contentClasses = classNames(
    'Layout__content',
    contentClassName,
    {
      'Layout__content--fullscreen': fullscreen,
      'Layout__content--center': !fullscreen,
    }
  );


  return (
    <div className='Layout section'>
      <div className='Layout__container'>
        <div className={contentClasses}>
          {children}
        </div>
      </div>
    </div>)
};