import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import ModalContext from "../../context/modal-context/ModalContext";

interface IProps {
  type: string;
}

// COntainer for the nav bar
const Container = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9000;
  max-width: 300px;
  height: min-content;
  padding: ${theme.spacing.large};
  background-color: ${(props: IProps) => (props.type === "ok" ? theme.colors.green : theme.colors.red)};
  border: solid 2px ${theme.colors.blue};
  border-radius: 15px;
  padding: ${theme.spacing.medium}${theme.spacing.xxLarge};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: ${theme.spacing.small}${theme.spacing.medium};
  }
`;

// All text
const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default function Modal() {
  const modalContext = useContext(ModalContext);
  const { modalState, hideModal } = modalContext;

  useEffect(() => {
    setTimeout(() => {
      hideModal();
    }, 3000);
  }, []);

  return (
    <Container type={modalState.type}>
      <Text>{modalState.text}</Text>
    </Container>
  );
}
