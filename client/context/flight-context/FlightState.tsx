import { useReducer, createContext, Props } from "react";
import type { AppProps } from "next/app";

import axios from "axios";
import {
  SET_DEPARTURE_HUB,
  SET_DESTINATION,
  SET_OUTBOUNG_DATE,
  SET_RETURN_DATE,
  SET_PASSENGER_NO,
  SET_FLEXIBLE_NUMBER,
} from "./Types";

import FlightContext from "./FlightContext";
import FlightReducer from "./FlightReducer";
import { PropsInterface, SearchDataInterface } from "./Interfaces";

const FlightState = (props: PropsInterface) => {
  const state: SearchDataInterface = {
    departureHub: "",
    destinationHub: "",
    departureDate: new Date(Date.now()),
    returnDate: new Date(Date.now()),
    passengers: 1,
    flexible: 1,
  };

  // When creating a new survey
  const [flightState, dispatch] = useReducer(FlightReducer, state);

  // Set the leaving airport
  const setDepartureHub = (hub: string) => {
    dispatch({ type: SET_DEPARTURE_HUB, payload: hub });
  };

  // Set the destinaryion airport
  const setDestinationHub = (hub: string) => {
    dispatch({ type: SET_DESTINATION, payload: hub });
  };

  // Set the departure date
  const setDepartureDate = (date: Date) => {
    dispatch({ type: SET_OUTBOUNG_DATE, payload: date });
  };

  // Set the return date
  const setReturnDate = (date: string) => {
    dispatch({ type: SET_RETURN_DATE, payload: date });
  };

  // Set passanger Number
  const setPassengerNumber = (number: number) => {
    dispatch({ type: SET_PASSENGER_NO, payload: number });
  };

  // Set passanger Number
  const setFlexibleNumber = (number: number) => {
    dispatch({ type: SET_FLEXIBLE_NUMBER, payload: number });
  };

  const searchFlights = async () => {
    try {
      const result = await axios.request({
        method: "POST",
        url: `http://localhost:2222/api/bookings/search`,
        data: {
          flightState,
        },
      });

      return result;
    } catch (error: any) {
      return error.response;
    }
  };

  return (
    <FlightContext.Provider
      value={{
        flightState,
        setDepartureHub,
        setDestinationHub,
        setDepartureDate,
        setReturnDate,
        setPassengerNumber,
        searchFlights,
        setFlexibleNumber,
      }}
    >
      {props.children}
    </FlightContext.Provider>
  );
};

export default FlightState;
