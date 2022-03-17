import { IFlightState } from "./Interfaces";
import { SET_SEARCHED_FLIGHTS, SET_OUTBOUND_SELECTED, SET_RETURN_SELECTED } from "./Types";

export default (state: IFlightState, action: any) => {
  switch (action.type) {
    // Set the new survey title of building survey
    case SET_SEARCHED_FLIGHTS:
      return action.payload;

    case SET_OUTBOUND_SELECTED:
      return { ...state, outbound: action.payload };

    case SET_RETURN_SELECTED:
      return { ...state, return: action.payload };

    default:
      return state;
  }
};
