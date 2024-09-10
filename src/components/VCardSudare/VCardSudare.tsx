import React, { PropsWithChildren } from "react";

import { useProductsContext } from "hooks";

import { VCardSudareView } from "./VCardSudare.view";

type Props = {
  link?: string;
};

export const VCardSudare: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { impamantare } = useProductsContext();

  return (
    <VCardSudareView link={props.link} data={impamantare.data}>
      {props.children}
    </VCardSudareView>
  );
};
