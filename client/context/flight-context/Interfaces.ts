export interface ContextInterface {
  flightState: Object;
  setDepartureHub: Function;
  setDestinationHub: Function;
  setDepartureDate: Function;
  setReturnDate: Function;
  setPassengernumber: Function;
  searchFlights: Function;
  setFlexiblenumber: Function;
}

export interface SearchDataInterface {
  departureHub: string;
  destinationHub: string;
  departureDate: Date;
  returnDate: Date;
  passengers: number;
  flexible: number;
}

export interface PropsInterface {
  children: React.ReactNode;
}
