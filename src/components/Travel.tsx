import React from "react";
import { TravelLocation } from "../types";
import { Layout } from "./Layout";
import { ScrollAnimation } from "./ScrollAnimation";
import pluralize from 'pluralize';

export const Travel = () => {
  const [location, setLocation] = React.useState<TravelLocation>();

  React.useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch('https://nomadlist.com/@andrewchmr.json');
      const { location } = await response.json();
      setLocation(location);
    }

    fetchLocation();
  }, []);

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
      <ScrollAnimation
        className='paragraph Travel__info'
        animateIn="animateStripfromLeft">
        Traveling the world as much as possible
      </ScrollAnimation>
      {(location?.now?.city || location?.next?.city) &&
        (<ScrollAnimation
          className='paragraph Travel__city-info'
          delay={600}
          animateIn="animateStripfromRight">
          {location?.now?.city && <><strong>{location.now.city}</strong> now </>}
          {location?.next?.city && <>👉 <strong>{location.next.city}</strong> in {diffInDays} {pluralize('day', diffInDays)}</>}
        </ScrollAnimation>)}
      <ScrollAnimation
        delay={0}
        animateIn="fadeIn"
        className="Travel__iframeWrapper">
        <iframe title="Map" src="https://nomadlist.com/@andrewchmr/embed?dark=true" scrolling="no" frameBorder="0" allowFullScreen />
      </ScrollAnimation>
    </Layout>);
};
