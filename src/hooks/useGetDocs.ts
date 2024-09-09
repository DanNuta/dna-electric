import { useState, useEffect } from "react";
import { collection, FirestoreError, onSnapshot } from "firebase/firestore";

import { db } from "firebase-config";
import { DOCS_FIRESTORE_IDS } from "models";

import { dataProductModel } from "../models/dataProduct.model";

export function useGetDocs(id: DOCS_FIRESTORE_IDS) {
  const [pending, setPending] = useState<boolean | null>(null);
  const [error, setError] = useState<FirestoreError | null>(null);
  const [data, setData] = useState<dataProductModel[]>([]);

  useEffect(() => {
    const ref = collection(db, id);

    setPending(true);

    const onSubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const dataSnapshot: dataProductModel[] = [];

        snapshot.docs.forEach((item) => {
          dataSnapshot.push({
            id: item.id,
            title: item.data().title,
            categoria: item.data().categoria,
            description: item.data().description,
            img: item.data().img,
            price: Number(item.data().price)
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
  }, [id]);

  return { data, error, pending };
}
