import { arrowLeft, facebookIcon } from "./custom";
export * from "./promotion";
export * from "./card_product_icon";
export * from "./arrow_icon";
export * from "./hover_icon";

const Icons = {
  arrowLeft,
  facebookIcon
};

export type Icons = keyof typeof Icons;
