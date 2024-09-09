import { useState, useEffect } from "react";
import {
  collection,
  FirestoreError,
  onSnapshot,
  QueryDocumentSnapshot,
  DocumentData
} from "firebase/firestore";

import { db } from "firebase-config";
import { DOCS_FIRESTORE_IDS } from "models";

export function useGetDocs<T>(
  id: DOCS_FIRESTORE_IDS,
  callback: (docs: QueryDocumentSnapshot<DocumentData>) => T
) {
  const [pending, setPending] = useState<boolean | null>(null);
  const [error, setError] = useState<FirestoreError | null>(null);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const ref = collection(db, id);

    setPending(true);

    const onSubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const normalizeDocs = snapshot.docs.map(callback);

        setData(normalizeDocs);
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
