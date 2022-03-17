import { createContext } from "react";
import { IContext } from "./Interfaces";

const FlightDataContext = createContext<IContext>(null!);

export default FlightDataContext;
