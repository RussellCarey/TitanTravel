import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  min-width: 250px !important;
  height: 500px;
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.blueOpaque};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: ${theme.spacing.small};

  @media (max-width: ${theme.breakpoints.ipad}) {
    width: 100%;
    flex-direction: row;
    height: max-content;
    justify-content: space-around;

    margin-bottom: ${theme.spacing.small};
  }
`;
