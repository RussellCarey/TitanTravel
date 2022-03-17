import styled from "styled-components";
import { theme } from "../../../styles/theme";
import DatePicker from "react-datepicker";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: min-content;
  margin: 2px;
  padding: 2px;
`;

export const Text = styled.p`
  font-size: ${theme.fontsizes.xxsmall};
  color: ${theme.colors.yellow};
  margin-bottom: ${theme.spacing.xsmall};
`;

export const InputText = styled.input`
  width: 100%;
  height: 40px;
  color: black;
  padding: 0 ${theme.spacing.small};

  &:focus {
    outline: none !important;
    border: 2px solid ${theme.colors.yellow};
    box-shadow: 0 0 15px ${theme.colors.yellowOpaque};
  }
`;

export const InputDate = styled(DatePicker)`
  width: 100%;
  height: 40px;
  color: black;

  padding: 0 ${theme.spacing.small};
`;

export const LocationBox = styled.div`
  width: 95%;
  height: min-content;
  padding: 0 ${theme.spacing.small};
  background-color: white;
  z-index: 100000;
  position: absolute;
  bottom: calc(100% + height);
`;

export const LocationElement = styled.p`
  font-size: 16px;
  color: black;
  padding: 5px 0;
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;
