import React, { PropsWithChildren, useEffect, useState } from "react";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";

import { db } from "../../../firebase/config";
import { ParatrasnetPdaView } from "./ParatrasnetPda.view";
import { ParatrasnetModel } from "../../../models/paratrasnet.model";

export const ParatrasnetPda: React.FC<PropsWithChildren> = (
  props: PropsWithChildren
) => {
  const [dataState, setDataState] = useState<ParatrasnetModel>({
    description_title: "",
    img: "",
    img_descrition: "",
    img_descrition_title: "",
    title: ""
  });

  const [isPendingState, setIsPendingState] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<FirestoreError | null>(null);

  useEffect(() => {
    setIsPendingState(true);
    const ref = collection(db, "ParatrasnetPda");

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      snapshopt.docs.forEach(
        (item) => {
          setDataState({
            title: item.data().title,
            description_title: item.data().description_title,
            img: item.data().img,
            img_descrition: item.data().img_descrition,
            img_descrition_title: item.data().img_descrition_title
          });

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
    <ParatrasnetPdaView
      data={dataState}
      isPending={isPendingState}
      error={errorState}>
      {props.children}
    </ParatrasnetPdaView>
  );
};
