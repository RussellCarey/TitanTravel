export interface IDataObject {
  company_name: string;
  date: string;
  end_time: string;
  flight_id: number;
  from_hub_name: string;
  price: number;
  start_time: string;
  to_hub_name: string;
}

export interface IFlightState {
  outbound: Array<IDataObject>;
  return: Array<IDataObject>;
  outboundOriginal: Array<IDataObject>;
  returnOriginal: Array<IDataObject>;
}

export interface IContext {
  flightDataState: IFlightState;
  setSearchedFlights: Function;
  setSelectedOutbound: Function;
  setSelectedReturn: Function;
  sortByPrice: Function;
  sortByAirline: Function;
  sortByTime: Function;
  sortByLeavingTime: Function;
}

export interface IProps {
  children: React.ReactNode;
}
