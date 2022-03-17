import { theme } from "../../../styles/theme";
import styled from "styled-components";
import { IProps } from "./Interfaces";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-width: 200px;
  height: 100px;
  padding: ${theme.spacing.small};
  background-color: ${theme.colors.blueOpaque};
  border-radius: 5px;
  grid-column: ${(props: IProps) => (props.col === 1 ? "1/2" : "2/3")};
  outline: ${(props: IProps) => (props.selected === true ? "3px solid red" : "")};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }

  @media (max-width: ${theme.breakpoints.small}) {
    grid-column: 1/-1;
    grid-column: ${(props: IProps) => (props.col === 1 ? "1/2" : "2/3")};
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 100%;
  background-color: orange;
  margin-right: ${theme.spacing.small};
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${theme.colors.yellow};
  margin: 0 ${theme.spacing.small};
`;

export const Text = styled.p`
  color: ${theme.colors.yellow};
  font-size: ${theme.fontsizes.small};
`;

export const Price = styled.p`
  color: ${theme.colors.yellow};
  font-size: ${theme.fontsizes.small};
  position: absolute;
  bottom: ${theme.spacing.small};
  right: ${theme.spacing.small};
`;
