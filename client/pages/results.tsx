import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { useRouter } from "next/router";
import FlightDataContext from "../context/flight-data-context/FlightDataContext";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopPanel from "../components/Results/Top-Panel/Main";
import FlightInfo from "../components/Results/Flight-Info/Main";
import BookNow from "../components/Results/Book-Panel/Main";
import RefineSearch from "../components/Results/Refine-Search/Main";

const Page = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: ${theme.spacing.large};
`;

const MainArea = styled.div`
  width: 100%;
  height: min-content;

  display: flex;

  @media (max-width: ${theme.breakpoints.ipad}) {
    flex-direction: column;
  }
`;

const FlightsArea = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-auto-flow: column;
  gap: ${theme.spacing.small};

  @media (max-width: ${theme.breakpoints.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function Results() {
  const router = useRouter();
  const flightDataContext = useContext(FlightDataContext);
  const { flightDataState } = flightDataContext;

  const [outboundSelected, setOutboundSelected] = useState<number>(0);
  const [returnSelected, setReturnSelected] = useState<number>(0);

  //! Need to check this inside of a server side props before loading..
  //! COuld populate a blank outbound and return array so it loads nothing then show modal error then redirect... ?
  useEffect(() => {
    if (!flightDataState) router.push("/");
  }, []);

  return (
    <Page>
      <TopPanel />
      <MainArea>
        <RefineSearch />
        <FlightsArea>
          {flightDataState
            ? flightDataState.outbound.map((flights) => {
                return (
                  <FlightInfo
                    key={flights.flight_id}
                    flight={flights}
                    col={1}
                    setSelected={setOutboundSelected}
                    selectedState={outboundSelected}
                  />
                );
              })
            : null}

          {flightDataState
            ? flightDataState.return.map((flights) => {
                return (
                  <FlightInfo
                    key={flights.flight_id}
                    flight={flights}
                    col={2}
                    setSelected={setReturnSelected}
                    selectedState={returnSelected}
                  />
                );
              })
            : null}

          <BookNow outboundSelected={outboundSelected} returnSelected={returnSelected} />
        </FlightsArea>
      </MainArea>
    </Page>
  );
}
