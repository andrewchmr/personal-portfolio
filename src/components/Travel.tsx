import React from "react";
import { TravelLocation } from "../types";
import { Layout } from "./Layout";
import { ScrollAnimation } from "./ScrollAnimation";
import pluralize from 'pluralize';

interface Props {
  location: TravelLocation;
}

export const Travel: React.FC<Props> = ({ location }) => {

  const diffInDays = React.useMemo(() => {
    if (!location?.next) {
      return;
    }
    const nextStartDate = location.next.date_start;
    const diffInMs = +(new Date(nextStartDate)) - +(Date.now());
    return +(diffInMs / (1000 * 60 * 60 * 24)).toFixed();
  }, [location]);

  return (
    <Layout contentClassName="Travel">
      <ScrollAnimation animateIn="animateStripfromLeft">
        {location?.now?.city && <><strong>{location.now.city}</strong> now </>}
        {location?.next?.city && <>👉 <strong>{location.next.city}</strong> in {diffInDays} {pluralize('day', diffInDays)}</>}
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" className="Travel__iframeWrapper">
        <iframe title="Map" src="https://nomadlist.com/@andrewchmr/embed?dark=true" scrolling="no" frameBorder="0" allowFullScreen />
      </ScrollAnimation>
    </Layout>);
};
