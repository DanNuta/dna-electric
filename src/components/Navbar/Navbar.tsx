import React, { PropsWithChildren } from "react";

import { NavbarView } from "./Navbar.view";

import { useState, useEffect } from "react";
import { NavbarType } from "../../models/navbar.model";

import { collection, FirestoreError, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";

type Props = {
  bg: string;
};

export const Navbar: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
 

  const [toggleState, setToggleState] = useState<boolean>(false);
  const [wishlistToggle, setWishList] = useState<boolean>(false)

  
  const checkToggleFn = () => {
    setToggleState((prev) => !prev);
  };


  const wishlist = () =>{

      setWishList(prev => !prev)
  }


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
