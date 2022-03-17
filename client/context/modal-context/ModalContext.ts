import { createContext } from "react";
import { IContext } from "./Interface";

const ModalContext = createContext<IContext>(null!);

export default ModalContext;
