import React from "react";

import { useWishlistContext } from "hooks";

import { ShopView } from "./Shop.view";

export const Shop: React.FC = () => {
  const { shopList } = useWishlistContext();

  const totalPrice = shopList
    .map((shop) => shop.total)
    .reduce((a, c) => a + c, 0);

  return <ShopView shopList={shopList} total={totalPrice} />;
};
