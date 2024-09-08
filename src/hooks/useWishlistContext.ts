import { useContext } from "react";

import { WishlistContext } from "context";

export const useWishlistContext = () => {
  const wishList = useContext(WishlistContext);

  if (!wishList) throw Error("wishList must be inside WishlistContextProvider");

  return wishList;
};
