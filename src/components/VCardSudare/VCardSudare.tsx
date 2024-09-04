import React, { PropsWithChildren, useContext } from "react";

import { VCardSudareView } from "./VCardSudare.view";

import { ProductsProvider } from "../../context/Context.products";
import { ProduseContextModel } from "../../models/produseContext.model";

type Props = {
  link?: string;
};

export const VCardSudare: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { impamantare } = useContext(ProductsProvider) as ProduseContextModel;

  return (
    <VCardSudareView link={props.link} data={impamantare.data}>
      {props.children}
    </VCardSudareView>
  );
};
