import { useContext } from "react";

import { ProductsContext } from "context";

export const useProductsContext = () => {
  const products = useContext(ProductsContext);

  if (!products) throw Error("products must be inside ProductsProvider");

  return products;
};
