import { ShopList } from "models";
import { dataProductModel } from "./dataProduct.model";

export type Wishlist = {
  wishlistState: dataProductModel[];
  shopList: ShopList[];
  addWishList: (id: dataProductModel) => void;
  deleteItem: (id: string) => void;
  deleteAll: () => void;
  addItemToShipList: (item: dataProductModel) => void;
  deleteItemToShopList: (item: dataProductModel) => void;
};
