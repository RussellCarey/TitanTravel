import React, { FunctionComponent } from "react";
import { Button } from "./ButtonStyled";

const FlightSeachButton: FunctionComponent<{ text: string; onClick: Function }> = ({ text, onClick }) => {
  return <Button onClick={() => onClick()}>{text}</Button>;
};

export default FlightSeachButton;
