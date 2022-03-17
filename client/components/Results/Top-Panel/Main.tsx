import React, { FunctionComponent, useContext, useEffect } from "react";
import dayjs from "dayjs";
import FlightContext from "../../../context/flight-context/FlightContext";
import { Container, Section, Text, TextBold } from "./MainStyled";

const TopPanel: FunctionComponent<{}> = () => {
  const flightContext = useContext(FlightContext);
  const { flightState } = flightContext;

  const departureDate = dayjs(flightState.departureDate).$d.toString().slice(4, 15);
  const returnDate = dayjs(flightState.returnDate).$d.toString().slice(4, 15);

  return (
    <Container>
      <Section>
        <TextBold>
          {flightState.departureHub} to {flightState.destinationHub}
        </TextBold>
        <Text>{flightState.passengers} passengers | Economy Class</Text>
      </Section>

      <Section>
        <Text>
          {departureDate} to {returnDate}
        </Text>
      </Section>
    </Container>
  );
};

export default TopPanel;
