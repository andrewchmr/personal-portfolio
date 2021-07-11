export interface TravelLocation {
  now?: LocationDetails;
  next?: LocationDetails;
}

export interface LocationDetails {
  city: string;
  date_start: string;
}

export interface Position {
  x: number,
  y: number
}