
import { createContext, useReducer } from "react";

export const ModalContext = createContext();
const INITIAL_STATE = {modalOpen: false};

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modalOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};