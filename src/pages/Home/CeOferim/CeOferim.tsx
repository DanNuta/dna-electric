import { CeOferimView } from "./CeOferim.view";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";

import { CeOferimModel } from "../../../models/ceOferim.model";

export const CeOferim: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const [dataState, setDataState] = useState<CeOferimModel[]>([]);

  const [isPendingState, setIsPendingState] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<FirestoreError | null>(null);

  useEffect(() => {
    setIsPendingState(true);
    const ref = collection(db, "CeOferim");

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      const dataBD: CeOferimModel[] = [];

      snapshopt.docs.forEach(
        (item) => {
          dataBD.push({
            title: item.data().title,
            descrition: item.data().description
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
    <CeOferimView
      data={dataState}
      error={errorState}
      isPending={isPendingState}>
      {props.children}
    </CeOferimView>
  );
};
