import { theme } from "../../../styles/theme";
import styled from "styled-components";
import { IDayJSInterface } from "./Interfaces";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.blueOpaque};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: ${theme.breakpoints.ipad}) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Section = styled.div`
  height: 100%;
  width: max-content;
  margin-bottom: ${theme.spacing.small};

  @media (max-width: ${theme.breakpoints.ipad}) {
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.p`
  color: ${theme.colors.yellow};
  font-size: ${theme.fontsizes.small};
`;

export const TextBold = styled.p`
  font-weight: 800;
  color: ${theme.colors.yellow};
  font-size: ${theme.fontsizes.small};
`;
