import React, { PropsWithChildren, useEffect, useState } from "react";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";

import { db } from "../../../firebase/config";
import { PersonalModel } from "../../../models/personal.model";
import { PersonalView } from "./Personal.view";

type contact = {
  img?: string;
  contact?: string;
};

export const Personal: React.FC<PropsWithChildren<PersonalModel>> = (
  props: PropsWithChildren<PersonalModel>
) => {
  const [dataState, setDataState] = useState<PersonalModel[]>([]);
  const [contactState, setContactState] = useState<contact>({
    img: "",
    contact: ""
  });

  const [, setIsPendingState] = useState<boolean>(false);
  const [, setErrorState] = useState<FirestoreError | null>(null);

  useEffect(() => {
    setIsPendingState(true);
    const ref = collection(db, "Personal");

    const data: PersonalModel[] = [];
    let elementOther: contact;

    const onSubscribe = onSnapshot(ref, (snapshopt) => {
      snapshopt.docs.forEach(
        (item) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          item.id === "Contact_img"
            ? (elementOther = {
                img: item.data().img,
                contact: item.data().contact
              })
            : data.push({
                title: item.data().title,
                description: item.data().description,
                img: item.data().img
              });

          setDataState(data);
          setContactState(elementOther);

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
    <PersonalView data={dataState} contact={contactState}>
      {props.children}
    </PersonalView>
  );
};
