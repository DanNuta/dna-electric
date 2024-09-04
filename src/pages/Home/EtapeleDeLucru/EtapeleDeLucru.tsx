import React, { PropsWithChildren, useEffect, useState } from "react";

import { EtapeleDeLucruView } from "./EtapeleDeLucru.view";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { EtapeleDeLucruModel } from "../../../models/etapeleDeLucru";

export const EtapeleDeLucru: React.FC<
  PropsWithChildren<EtapeleDeLucruModel>
> = (props: PropsWithChildren<EtapeleDeLucruModel>) => {
  const [dataState, setDataState] = useState<EtapeleDeLucruModel[]>([]);

  const [, setIsPendingState] = useState<boolean>(false);
  const [, setErrorState] = useState<FirestoreError | null>(null);

  useEffect(() => {
    setIsPendingState(true);
    const ref = collection(db, "EtapeleDeLucru");

    const data: EtapeleDeLucruModel[] = [];

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      snapshopt.docs.forEach(
        (item) => {
          data.push({ img: item.data().img, title: item.data().title });

          setDataState(data);

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
    <EtapeleDeLucruView data={dataState}>{props.children}</EtapeleDeLucruView>
  );
};
