import React, { FunctionComponent, useContext, useEffect } from "react";
import { Container } from "./Styled";
import FlightDataContext from "../../../context/flight-data-context/FlightDataContext";
import Button from "../../Index/Flight-Search/Button";

const RefineSearch: FunctionComponent<{}> = ({}) => {
  const flightDataContext = useContext(FlightDataContext);
  const { flightDataState, sortByPrice, sortByAirline, sortByTime, sortByLeavingTime } = flightDataContext;

  return (
    <Container>
      <Button text={"Sort by name"} onClick={() => sortByAirline()} />
      <Button text={"Sort by price"} onClick={() => sortByPrice()} />
      <Button text={"Sort by total time"} onClick={() => sortByTime(5, 20)} />
      <Button text={"Sort by leaving time"} onClick={() => sortByLeavingTime()} />
    </Container>
  );
};

export default RefineSearch;
