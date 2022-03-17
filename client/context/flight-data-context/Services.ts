import { SET_SEARCHED_FLIGHTS, SET_OUTBOUND_SELECTED, SET_RETURN_SELECTED } from "./Types";
import { IFlightState, IDataObject } from "./Interfaces";

// Sort bby cost of each flight
export const sortByPriceService = (dispatch: Function, flightDataState: IFlightState) => {
  const currentFlightsState: IFlightState = { ...flightDataState };

  const sortPrice = (first: IDataObject, second: IDataObject): number => {
    return +first.price - +second.price;
  };

  const sortedOutbound = currentFlightsState.outboundOriginal.sort(sortPrice);
  const sortedReturn = currentFlightsState.returnOriginal.sort(sortPrice);

  dispatch({
    type: SET_SEARCHED_FLIGHTS,
    payload: { ...flightDataState, outbound: sortedOutbound, return: sortedReturn },
  });
};

// Sort by Airline Name
export const sortByAirlineService = (dispatch: Function, flightDataState: IFlightState) => {
  const currentFlightsState = { ...flightDataState };

  const sortLetter = (a: IDataObject, b: IDataObject) =>
    a.company_name > b.company_name ? 1 : b.company_name > a.company_name ? -1 : 0;

  const sortedOutbound = currentFlightsState.outboundOriginal.sort(sortLetter);
  const sortedReturn = currentFlightsState.returnOriginal.sort(sortLetter);

  dispatch({
    type: SET_SEARCHED_FLIGHTS,
    payload: { ...flightDataState, outbound: sortedOutbound, return: sortedReturn },
  });
};

// Sort by by flight time..
export const sortByTimeService = (dispatch: Function, flightDataState: IFlightState, start: Number, end: Number) => {
  const currentFlightsState = { ...flightDataState };

  const sortTime = (flight: IDataObject) =>
    Number(flight.start_time.slice(0, 2)) >= start && Number(flight.end_time.slice(0, 2)) <= end;

  const sortedOutbound = currentFlightsState.outboundOriginal.filter(sortTime);
  const sortedReturn = currentFlightsState.returnOriginal.filter(sortTime);

  dispatch({
    type: SET_SEARCHED_FLIGHTS,
    payload: { ...flightDataState, outbound: sortedOutbound, return: sortedReturn },
  });
};

// Sort by  plane leaving time..
export const sortByleavingTimeService = (dispatch: Function, flightDataState: IFlightState) => {
  const currentFlightsState = { ...flightDataState };

  const sortLeaving = (first: IDataObject, second: IDataObject) =>
    Number(first.start_time.slice(0, 2)) - Number(second.start_time.slice(0, 2));

  const sortedOutbound = currentFlightsState.outboundOriginal.sort(sortLeaving);
  const sortedReturn = currentFlightsState.returnOriginal.sort(sortLeaving);

  dispatch({
    type: SET_SEARCHED_FLIGHTS,
    payload: { ...flightDataState, outbound: sortedOutbound, return: sortedReturn },
  });
};
