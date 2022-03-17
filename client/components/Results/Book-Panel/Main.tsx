import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { Container, Text, Button } from "./Styled";
import FlightDataContext from "../../../context/flight-data-context/FlightDataContext";

const BookNow: FunctionComponent<{ outboundSelected: number; returnSelected: number }> = ({
  outboundSelected,
  returnSelected,
}) => {
  const [price, setPrice] = useState(0);
  const flightDataContext = useContext(FlightDataContext);
  const { flightDataState } = flightDataContext;

  useEffect(() => {
    if (outboundSelected || returnSelected) {
      const outboundFlight = flightDataState.outbound.find((flights) => flights.flight_id === outboundSelected);
      const returnFlight = flightDataState.return.find((flights) => flights.flight_id === returnSelected);
      const outboundPrice = outboundFlight ? outboundFlight.price : 0;
      const returnPrice = returnFlight ? returnFlight.price : 0;
      setPrice(+outboundPrice + +returnPrice);
    } else {
      setPrice(0);
    }
  }, [outboundSelected, returnSelected]);

  return (
    <Container>
      <Text>${price}</Text>
      <Button>Book now</Button>
    </Container>
  );
};

export default BookNow;
