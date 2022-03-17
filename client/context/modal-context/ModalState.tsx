import React, { useReducer } from "react";

import { IProps, IModalState } from "./Interface";

import { SHOW_MODAL, RESET_MODAL, HIDE_MODAL } from "./Types";

import ModalReducer from "./ModalReducer";
import ModalContext from "./ModalContext";

const ModalState = (props: IProps) => {
  const state: IModalState = {
    show: false,
    text: "",
    type: "",
  };

  // When creating a new survey
  const [modalState, dispatch] = useReducer(ModalReducer, state);

  const showModal = (text: string, type: string) => {
    const payload = { text: text, type: type, show: true };
    dispatch({
      type: SHOW_MODAL,
      payload: payload,
    });
  };

  const hideModal = () => {
    const payload = { ...modalState, show: false };
    dispatch({
      type: HIDE_MODAL,
      payload: payload,
    });
  };

  const resetModal = () => {
    const payload = { text: "", type: "", show: false };
    dispatch({
      type: RESET_MODAL,
      payload: payload,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        showModal,
        hideModal,
        resetModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalState;
