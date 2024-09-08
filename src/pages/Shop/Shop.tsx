import React from "react";

import { useWishlistContext } from "hooks";

import { ShopView } from "./Shop.view";

export const Shop: React.FC = () => {
  const { shopList } = useWishlistContext();
  return <ShopView shopList={shopList} />;
};
