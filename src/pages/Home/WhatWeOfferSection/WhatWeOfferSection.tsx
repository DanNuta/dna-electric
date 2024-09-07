import React, { PropsWithChildren, useEffect, useState } from "react";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";

import { WhatWeOffer } from "models";
import { db } from "firebase-config";

import { WhatWeOfferSectionView } from "./WhatWeOfferSection.view";

export const WhatWeOfferSection: React.FC<PropsWithChildren> = (props) => {
  const [dataState, setDataState] = useState<WhatWeOffer[]>([]);

  const [isPendingState, setIsPendingState] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<FirestoreError | null>(null);

  useEffect(() => {
    setIsPendingState(true);
    const ref = collection(db, "CeOferim");

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      const dataBD: WhatWeOffer[] = [];

      snapshopt.docs.forEach(
        (item) => {
          dataBD.push({
            title: item.data().title,
            description: item.data().description
          });

          setDataState(dataBD);

          setIsPendingState(false);
        },
        (error: FirestoreError) => {
          setErrorState(error);
          setIsPendingState(false);
        }
      );
    });

    return () => {
      onSubscribe();
    };
  }, []);

  return (
    <WhatWeOfferSectionView
      data={dataState}
      error={errorState}
      isPending={isPendingState}>
      {props.children}
    </WhatWeOfferSectionView>
  );
};
