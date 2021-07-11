import cx from 'classnames';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  animateIn: string;
  delay?: number;
  className?: string;
}

export const ScrollAnimation: React.FC<Props> = ({ delay = 400, animateIn, className, children }) => {
  const [ref, inView] = useInView({
    delay,
  });

  return (
    <div
      ref={ref}
      className={cx(className, { [animateIn]: inView })}
    >
      {children}
    </div>
  );
};
