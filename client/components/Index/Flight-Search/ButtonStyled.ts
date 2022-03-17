import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 45px;
  background-color: ${theme.colors.yellow};
  border-radius: 5px;
  font-size: ${theme.fontsizes.xsmall};
  color: ${theme.colors.blue};
  outline: none;
  border: none;
  grid-column: 6/7;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${theme.breakpoints.ipad}) {
    grid-row: 7/8;
    grid-column: 1/-1;
    margin-top: ${theme.spacing.medium};
  }
`;
