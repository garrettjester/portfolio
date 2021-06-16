import { useContext } from "react";
import { MenuContext } from "components/menu-drawer/MenuContext";

const useMenuContext = () => {
  const { state: { isOpen }, dispatch} = useContext(MenuContext);
  const openMenu = () => dispatch({ type: "OPEN_MENU" });
  const closeMenu = () => {
    console.log('CLosing menu dispatch')
    dispatch({ type: "CLOSE_MENU" })
  }

  return {
    isOpen,
    openMenu,
    closeMenu,
  };
};

export default useMenuContext;