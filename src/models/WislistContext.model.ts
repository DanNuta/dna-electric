import { ShopList } from "models";
import { dataProductModel } from "./dataProduct.model";

export type Wishlist = {
  wishlistState: dataProductModel[];
  shopList: ShopList[];
  addWishList: (id: dataProductModel) => void;
  deleteItem: (id: string) => void;
  deleteAll: () => void;
  addItemToShopList: (item: dataProductModel) => void;
  deleteItemToShopList: (id: string) => void;
  decrementShopQuantity: (id: string) => void;
  incrementShopQuantity: (id: string) => void;
};
