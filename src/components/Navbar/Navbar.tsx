import React, { PropsWithChildren, useState } from "react";

import { NavbarView } from "./Navbar.view";

type Props = {
  bg: string;
};

export const Navbar: React.FC<PropsWithChildren<Props>> = (props) => {
  const [toggleState, setToggleState] = useState<boolean>(false);
  const [wishlistToggle, setWishList] = useState<boolean>(false);

  const checkToggleFn = () => {
    setToggleState((prev) => !prev);
  };

  const wishlist = () => {
    setWishList((prev) => !prev);
  };

  return (
    <NavbarView
      bg={props.bg}
      toggleState={toggleState}
      toggle={checkToggleFn}
      onClick={wishlist}
      wishlist={wishlistToggle}
    >
      {props.children}
    </NavbarView>
  );
};
