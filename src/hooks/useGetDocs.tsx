import { useState, useEffect } from "react";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";

import { db } from "../firebase/config";

import { dataProductModel } from "../models/dataProduct.model";

export function getDocsFirestore(idDB: string) {
  const [pending, setPending] = useState<boolean | null>(null);
  const [error, setError] = useState<FirestoreError | null>(null);
  const [data, setData] = useState<dataProductModel[]>([]);

  useEffect(() => {
    const ref = collection(db, idDB);

    setPending(true);

    const onSubscribe = onSnapshot(
      ref,
      (snapshopt) => {
        const dataSnapshot: dataProductModel[] = [];

        snapshopt.docs.forEach((item) => {
          dataSnapshot.push({
            id: item.id,
            title: item.data().title,
            categoria: item.data().categoria,
            description: item.data().description,
            img: item.data().img
          });
        });

        setData(dataSnapshot);
        setPending(false);
      },
      (error) => {
        setError(error);
        setPending(false);
      }
    );

    return () => {
      onSubscribe();
    };
  }, [idDB]);

  return { data, error, pending };
}
