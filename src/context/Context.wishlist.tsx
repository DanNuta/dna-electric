import React, { useState, createContext, PropsWithChildren } from "react";

import { ShopList } from "models";

import { dataProductModel } from "../models/dataProduct.model";
import { Wishlist } from "../models/WislistContext.model";

export const WishlistContext = createContext<Wishlist | null>(null);

export const WishlistContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [wishlistState, setWishListState] = useState<dataProductModel[]>([]);
  const [shopList, setShopList] = useState<ShopList[]>([]);

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

  const addItemToShipList = (item: dataProductModel) => {
    setShopList((prev) => {
      return prev.some((s) => s.id === item.id)
        ? prev.map((shopItem) => {
            return shopItem.id === item.id
              ? {
                  ...shopItem,
                  quantity: shopItem.quantity + 1,
                  total: shopItem.price * (shopItem.quantity + 1)
                }
              : shopItem;
          })
        : [...prev, { ...item, quantity: 1, total: item.price }];
    });
  };

  const deleteItemToShopList = (id: string) => {
    setShopList((prev) => prev.filter((shipItem) => shipItem.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        shopList,
        wishlistState,
        deleteItemToShopList,
        addItemToShipList,
        addWishList,
        deleteItem,
        deleteAll
      }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
