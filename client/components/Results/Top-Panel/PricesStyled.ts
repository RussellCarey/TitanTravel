import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.blueOpaque};
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: ${theme.colors.yellow};
  font-size: ${theme.fontsizes.medium};
`;
