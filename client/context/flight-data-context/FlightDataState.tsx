import { useReducer, createContext } from "react";
import { SET_SEARCHED_FLIGHTS, SET_OUTBOUND_SELECTED, SET_RETURN_SELECTED } from "./Types";
import { sortByPriceService, sortByAirlineService, sortByTimeService, sortByleavingTimeService } from "./Services";
import FlightDataContext from "./FlightDataContext";
import FlightDataReducer from "./FlightDataReducer";
import { IDataObject, IFlightState, IProps } from "./Interfaces";

const FlightDataState = (props: IProps) => {
  const state: IFlightState = {
    outbound: [],
    return: [],
    outboundOriginal: [],
    returnOriginal: [],
  };

  // When creating a new survey
  const [flightDataState, dispatch] = useReducer(FlightDataReducer, state);

  // Set flight to state from users search.. (Original arrays are for keep the original state so we can filter etc).
  const setSearchedFlights = (hub: IDataObject) => {
    dispatch({ type: SET_SEARCHED_FLIGHTS, payload: hub });
  };

  const setSelectedOutbound = (flight: IDataObject) => {
    dispatch({ type: SET_OUTBOUND_SELECTED, payload: flight });
  };

  const setSelectedReturn = (flight: IDataObject) => {
    dispatch({ type: SET_RETURN_SELECTED, payload: flight });
  };

  // Sort by cost of flight..
  const sortByPrice = () => {
    sortByPriceService(dispatch, flightDataState);
  };

  // Sort by airline name
  const sortByAirline = () => {
    sortByAirlineService(dispatch, flightDataState);
  };

  //! Sort Flights by travel time.. NOT WORKING
  const sortByTime = (start: number, end: number) => {
    sortByTimeService(dispatch, flightDataState, start, end);
  };

  //! Sort by play leaving time - earliest to latest..
  const sortByLeavingTime = () => {
    sortByleavingTimeService(dispatch, flightDataState);
  };

  return (
    <FlightDataContext.Provider
      value={{
        flightDataState,
        setSearchedFlights,
        setSelectedOutbound,
        setSelectedReturn,
        sortByPrice,
        sortByAirline,
        sortByTime,
        sortByLeavingTime,
      }}
    >
      {props.children}
    </FlightDataContext.Provider>
  );
};

export default FlightDataState;
