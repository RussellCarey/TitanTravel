import { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import FlightSearch from "../components/Index/Flight-Search/Main";
import TopAlertMessage from "../components/Index/Top-Alert/Main";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Page = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min(min-content));
  grid-row-gap: ${theme.spacing.large};
`;

export default function Home() {
  return (
    <Page>
      <TopAlertMessage />
      <FlightSearch />;
    </Page>
  );
}
