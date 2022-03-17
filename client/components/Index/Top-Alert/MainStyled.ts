import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.16);

  @media (max-width: ${theme.breakpoints.ipad}) {
    padding: 0 ${theme.spacing.small};
  }
`;
