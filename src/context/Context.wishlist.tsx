import React, { useState, createContext, PropsWithChildren } from "react";

import { dataProductModel } from "../models/dataProduct.model";
import { Wishlist } from "../models/WislistContext.model";

export const WishlistContext = createContext<Wishlist | null>(null);

export const WislistContext: React.FC<PropsWithChildren> = (props) => {
  const [wishlistState, setWishListState] = useState<dataProductModel[]>([]);

  const addWishList = (item: dataProductModel) => {
    const wishListChecl = wishlistState.some(
      (element) => element.id === item.id
    );

    setWishListState((prev) => {
      if (wishListChecl) {
        const newArray = prev.filter((index) => index.id !== item.id);
        return newArray;
      } else {
        const newArray = [...prev, item];
        return newArray;
      }
    });
  };

  const deleteItem = (id: string) => {
    setWishListState((prev) => {
      const newArray = prev.filter((item) => item.id !== id);
      return newArray;
    });
  };

  const deleteAll = () => {
    setWishListState([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        addWishList,
        deleteItem,
        deleteAll
      }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
