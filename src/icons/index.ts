import { arrowLeft, facebookIcon } from "./custom";
export * from "./promotion";
export * from "./card_product_icon";

const Icons = {
  arrowLeft,
  facebookIcon
};

export type Icons = keyof typeof Icons;
