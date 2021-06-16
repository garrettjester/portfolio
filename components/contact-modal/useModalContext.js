import { useContext } from "react";
import { ModalContext } from "./ModalContext";

const useModalContext = () => {
  const { state: { modalOpen }, dispatch} = useContext(ModalContext);
  const openModal = () => dispatch({ type: "OPEN_MODAL" });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });

  return {
    modalOpen,
    openModal,
    closeModal,
  };
};

export default useModalContext;