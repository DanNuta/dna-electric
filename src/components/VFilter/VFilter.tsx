import React, { PropsWithChildren } from "react";

import { VFilterView } from "./VFilter.view";

type Props = {
  onClick: () => void;
  item: string;
  display?: string;
};

export const VFilter: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <VFilterView
      display={props.display}
      item={props.item}
      onClick={props.onClick}>
      {props.children}
    </VFilterView>
  );
};
