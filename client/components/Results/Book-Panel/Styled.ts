import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${theme.colors.blueOpaque};
  border-radius: 5px;
  grid-column: 3/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${theme.breakpoints.small}) {
    grid-row: 1/2;
    grid-column: 1/-1;
  }
`;

export const Text = styled.p`
  color: ${theme.colors.yellow};
  font-size: ${theme.fontsizes.medium};
  margin-bottom: ${theme.spacing.small};
`;

export const Button = styled.button`
  color: ${theme.colors.blue};
  background-color: ${theme.colors.yellow};
  border-radius: 5px;
  width: 50%;
  height: 30px;
  border: none;
`;
