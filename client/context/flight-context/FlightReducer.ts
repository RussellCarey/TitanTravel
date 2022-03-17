import {
  SET_DEPARTURE_HUB,
  SET_DESTINATION,
  SET_OUTBOUNG_DATE,
  SET_RETURN_DATE,
  SET_PASSENGER_NO,
  SET_PARTIAL_HUBS,
  SET_FLEXIBLE_NUMBER,
} from "./Types";

import { SearchDataInterface } from "./Interfaces";

export default (state: SearchDataInterface, action: any) => {
  switch (action.type) {
    // Set the new survey title of building survey
    case SET_DEPARTURE_HUB:
      return { ...state, departureHub: action.payload };

    case SET_DESTINATION:
      return { ...state, destinationHub: action.payload };

    case SET_OUTBOUNG_DATE:
      return { ...state, departureDate: action.payload };

    case SET_RETURN_DATE:
      return { ...state, returnDate: action.payload };

    case SET_PASSENGER_NO:
      return { ...state, passengers: action.payload };

    case SET_PARTIAL_HUBS:
      return { ...state, partialLocations: action.payload };

    case SET_FLEXIBLE_NUMBER:
      return { ...state, flexible: action.payload };

    default:
      return state;
  }
};
