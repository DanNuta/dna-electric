import React, { PropsWithChildren, useState, useContext } from "react";

import { useProductsContext } from "hooks";

import { ImpamantareView } from "./Impamantare.view";

import { dataProductModel } from "../../models/dataProduct.model";
import { WishlistContext } from "../../context/Context.wishlist";
import { Wishlist } from "../../models/WislistContext.model";

export const Impamantare: React.FC<PropsWithChildren> = (props) => {
  const { addWishList } = useContext(WishlistContext) as Wishlist;
  const { impamantare } = useProductsContext();

  const [filterActiveState, setFilterActiveState] = useState<boolean>(false);
  const [dataFilterState, setDataFilter] = useState<dataProductModel[]>([]);

  const filterFn = () => {
    setFilterActiveState((prev) => !prev);
  };

  const filterElementFn = (c: string) => {
    setFilterActiveState((prev) => !prev);

    setDataFilter(() => {
      const newArray = impamantare.data.filter((item) => item.categoria === c);

      return newArray;
    });
  };

  const filter = impamantare.data.map((item) => item.categoria);
  const individualstring = [...new Set(filter)];

  return (
    <ImpamantareView
      filterActive={individualstring}
      filterItemFn={filterElementFn}
      filterActiveState={filterActiveState}
      filterFn={filterFn}
      onClick={addWishList}
      data={impamantare.data}
      isPending={impamantare.pending}
      dataFilter={dataFilterState}>
      {props.children}
    </ImpamantareView>
  );
};
