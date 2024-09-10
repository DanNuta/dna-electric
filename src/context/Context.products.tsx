import React, { createContext, PropsWithChildren } from "react";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

import { useGetDocs } from "hooks";
import { DOCS_FIRESTORE_IDS } from "app-constants";
import { ProductsContext as ProductsContextModal } from "models";

import { dataProductModel } from "../models/dataProduct.model";

export const ProductsContext = createContext<ProductsContextModal | null>(null);

const getDocFields = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const docs = doc.data() as Omit<dataProductModel, "id">;

  return {
    id: doc.id,
    title: docs.title,
    categoria: docs.categoria,
    description: docs.description,
    img: docs.img,
    price: Number(docs.price)
  };
};

export const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const impamantare = useGetDocs<dataProductModel>(
    DOCS_FIRESTORE_IDS.EARTH,
    getDocFields
  );
  const supratensiune = useGetDocs(
    DOCS_FIRESTORE_IDS.OVERVOLTAGES,
    getDocFields
  );
  const paratrasnet = useGetDocs(
    DOCS_FIRESTORE_IDS.LIGHTNING_ROD,
    getDocFields
  );

  return (
    <ProductsContext.Provider
      value={{ impamantare, supratensiune, paratrasnet }}>
      {children}
    </ProductsContext.Provider>
  );
};
