import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren
} from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { NavbarType } from "../models/navbar.model";
import { NavbarContextModel } from "../models/NavbarContext.model";

import { db } from "../firebase/config";

export const NavbarContext = createContext<NavbarContextModel | null>(null);

export const NavbarProvider: React.FC<PropsWithChildren> = (props) => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const [data, setData] = useState<NavbarType>({
    Despre: "",
    Produse: "",
    Link_facebook: "",
    Link_youtube: "",
    Nr_telefon: "",
    Servicii: "",
    impamantare: "",
    paratrasnet: "",
    supratensiune: "",
    contacte: "",
    email: "",
    adresa: "",
    map: ""
  });

  useEffect(() => {
    setIsPending(true);
    const ref = collection(db, "Navbar");

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      snapshopt.docs.forEach((item) => {
        setData({
          Despre: item.data().Despre,
          Produse: item.data().Produse,
          Link_facebook: item.data().Link_facebook,
          Link_youtube: item.data().Link_youtube,
          Nr_telefon: item.data().Nr_telefon,
          Servicii: item.data().Servicii,
          impamantare: item.data().impamantare,
          paratrasnet: item.data().paratrasnet,
          supratensiune: item.data().supratensiune,
          contacte: item.data().contacte,
          email: item.data().email,
          adresa: item.data().adresa,
          map: item.data().map
        });

        setIsPending(false);
      });
    });

    return () => {
      onSubscribe();
    };
  }, []);

  return (
    <NavbarContext.Provider value={{ data, isPending }}>
      {props.children}
    </NavbarContext.Provider>
  );
};
