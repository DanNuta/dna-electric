import React, { PropsWithChildren, useContext } from "react";

import { VWishListItemView } from "./VWishListItem.view";
import { dataProductModel } from "../../models/dataProduct.model";
import { WishlistContext } from "../../context/Context.wishlist";

import { Wishlist } from "../../models/WislistContext.model";

type Props = {
  data: dataProductModel;
  onClick: () => void;
};

export const VWishListItem: React.FC<PropsWithChildren<Props>> = (props) => {
  const { deleteItem } = useContext(WishlistContext) as Wishlist;

  return (
    <VWishListItemView
      onClick={props.onClick}
      delete={deleteItem}
      data={props.data}>
      {props.children}
    </VWishListItemView>
  );
};
