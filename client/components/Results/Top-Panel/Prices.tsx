import React, { FunctionComponent, useContext, useEffect } from "react";
import axios from "axios";

import { Container, Text } from "./PricesStyled";

const Prices: FunctionComponent<{ type: string; price: string }> = ({ type, price }) => {
  return (
    <Container>
      <Text>{type}</Text>
      <Text>{price}</Text>
    </Container>
  );
};

export default Prices;
