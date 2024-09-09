import React, { createContext, PropsWithChildren } from "react";

import { useGetDocs } from "hooks";
import { DOCS_FIRESTORE_IDS } from "app-constants";

import { ProduseContextModel } from "../models/produseContext.model";

export const ProductsProvider = createContext<ProduseContextModel | null>(null);

export const ProductsContext: React.FC<PropsWithChildren> = ({ children }) => {
  const impamantare = useGetDocs(DOCS_FIRESTORE_IDS.EARTH);
  const supratensiune = useGetDocs(DOCS_FIRESTORE_IDS.OVERVOLTAGES);
  const paratrasnet = useGetDocs(DOCS_FIRESTORE_IDS.LIGHTNING_ROD);

  return (
    <ProductsProvider.Provider
      value={{ impamantare, supratensiune, paratrasnet }}>
      {children}
    </ProductsProvider.Provider>
  );
};
