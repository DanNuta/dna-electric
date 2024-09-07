import React, { PropsWithChildren, useState } from "react";

import { VWhatWeOfferCardWithModalView } from "./VWhatWeOfferCardWithModal.view";
import { WhatWeOffer } from "models";

type Props = {
  item: WhatWeOffer;
};
export const VWhatWeOfferCardWithModal: React.FC<PropsWithChildren<Props>> = ({
  item,
  children
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <VWhatWeOfferCardWithModalView
      state={openModal}
      onClick={() => setOpenModal((prev) => !prev)}
      item={item}>
      {children}
    </VWhatWeOfferCardWithModalView>
  );
};
