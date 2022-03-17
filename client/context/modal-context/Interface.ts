export interface IContext {
  modalState: IModalState;
  showModal: Function;
  hideModal: Function;
  resetModal: Function;
}

export interface IProps {
  children: React.ReactNode;
}

export interface IModalState {
  show: boolean;
  text: string;
  type: string;
}
