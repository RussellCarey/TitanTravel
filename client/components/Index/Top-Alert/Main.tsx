import React, { FunctionComponent } from "react";
import { Container } from "./MainStyled";

const TopAlertMessage: FunctionComponent<{}> = () => {
  return (
    <Container>
      <p>
        Due to the spread of Covid 19, some booking dates or times may change unexpectedly. We apologise for any
        inconvenience.
      </p>
    </Container>
  );
};

export default TopAlertMessage;
