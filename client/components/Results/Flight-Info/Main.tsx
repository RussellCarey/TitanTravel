import React, { ChangeEvent, FunctionComponent, useContext, useEffect } from "react";
import { Container, Logo, Text, Line, Price } from "./Styled";
import { IProps } from "./Interfaces";
import { IDataObject } from "../../../context/flight-data-context/Interfaces";

const FlightInfo: FunctionComponent<{
  flight: IDataObject;
  col: number;
  setSelected: Function;
  selectedState: number;
}> = ({ flight, col, setSelected, selectedState }) => {
  const leavingTime = flight.start_time.slice(0, 5);
  const landingTime = flight.end_time.slice(0, 5);

  // Set the new ID for the selected flight..
  const clickHandler = () => {
    setSelected(flight.flight_id);
  };

  return (
    <Container col={col} onClick={() => clickHandler()} selected={selectedState === flight.flight_id ? true : false}>
      <Logo />
      <Text>{flight.company_name}</Text>
      <Text>{leavingTime}</Text>
      <Line />
      <Text>{landingTime}</Text>
      <Price>${flight.price}</Price>
    </Container>
  );
};

export default FlightInfo;
