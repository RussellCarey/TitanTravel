import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const FlightSearchArea = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("/images/portimage.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5%;

  border-top: 1px solid ${theme.colors.blueOpaque};
  border-bottom: 1px solid ${theme.colors.blueOpaque};

  box-shadow: 0 10px 10px ${theme.colors.blueShadow};

  @media (max-width: ${theme.breakpoints.ipad}) {
    padding: ${theme.spacing.medium} 0;
    height: max-content;
  }
`;

export const InputArea = styled.div`
  width: 90%;
  height: max-content;
  min-height: 200px;
  border-radius: 5px;
  padding: ${theme.spacing.large} ${theme.spacing.medium};
  margin: 0 50px;
  background-color: ${theme.colors.blueOpaque};
  display: grid;
  grid-row-gap: 20px;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 4fr 4fr 2fr 2fr 1fr 1fr;

  @media (max-width: ${theme.breakpoints.ipad}) {
    grid-auto-flow: column;
    grid-row-gap: ${theme.spacing.small};
    grid-template-rows: repeat(6, max-content);
    grid-template-columns: 1fr;
  }
`;
