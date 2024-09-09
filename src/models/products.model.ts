import { dataProductModel } from "../models/dataProduct.model";
import { FirebaseError } from "firebase/app";

export type ProductsResponse = {
  data: dataProductModel[];
  error: FirebaseError | null;
  pending: boolean | null;
};
