import React, { PropsWithChildren, useState, useContext } from "react";

import { ProductsResponse } from "models";

import { SupratensiuniView } from "./Supratensiuni.view";
import { dataProductModel } from "../../models/dataProduct.model";
import { WishlistContext } from "../../context/Context.wishlist";
import { Wishlist } from "../../models/WislistContext.model";

type Props = {
  products: ProductsResponse;
};

export const Supratensiuni: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { addWishList } = useContext(WishlistContext) as Wishlist;

  const [filterActiveState, setFilterActiveState] = useState<boolean>(false);
  const [dataFilterState, setDataFilter] = useState<dataProductModel[]>([]);

  const filterFn = () => {
    setFilterActiveState((prev) => !prev);
  };

  const filterElementFn = (c: string) => {
    setFilterActiveState((prev) => !prev);

    setDataFilter(props.products.data.filter((item) => item.categoria === c));
  };

  const filter = props.products.data.map((item) => item.categoria);
  const individualstring = [...new Set(filter)];

  return (
    <SupratensiuniView
      filterActive={individualstring}
      filterItemFn={filterElementFn}
      filterActiveState={filterActiveState}
      filterFn={filterFn}
      onClick={addWishList}
      data={props.products.data}
      isPending={props.products.pending}
      dataFilter={dataFilterState}>
      {props.children}
    </SupratensiuniView>
  );
};
