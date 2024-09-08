import { dataProductModel } from "./dataProduct.model";

export type ShopList = {
  quantity: number;
  total: number;
} & dataProductModel;
