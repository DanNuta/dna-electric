import React, { PropsWithChildren, useState } from "react";

import { VCeOferimView } from "./VCeoferim.view";
import { WhatWeOffer } from "models";

type Props = {
  item: WhatWeOffer;
};
export const CeOferim: React.FC<PropsWithChildren<Props>> = (props) => {
  const [activateCeOferimState, setActivateCeOferimState] = useState(false);

  return (
    <VCeOferimView
      state={activateCeOferimState}
      onClick={() => setActivateCeOferimState((prev) => !prev)}
      item={props.item}>
      {props.children}
    </VCeOferimView>
  );
};
