import { useContext } from "react";

import { NavbarContext } from "context";

export const useNavbarContext = () => {
  const navbar = useContext(NavbarContext);

  if (!navbar) throw Error("products must be inside NavbarContext");

  return navbar;
};
