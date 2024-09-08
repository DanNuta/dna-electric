import React, { PropsWithChildren, useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton, Box } from "@mui/material";

import { Shop, HeartOutline, HeartOutlineHighlighted } from "icons";

import { dataProductModel } from "../../models/dataProduct.model";
import * as Style from "./VCardItem.model";
import { WishlistContext } from "../../context/Context.wishlist";
import { Wishlist } from "../../models/WislistContext.model";

type Props = {
  data: dataProductModel;
  // eslint-disable-next-line no-unused-vars
  onClick?: (data: dataProductModel) => void;
  localStorege?: string;
};

export const VCardItemView: React.FC<PropsWithChildren<Props>> = (props) => {
  const { wishlistState, shopList, addItemToShopList } = useContext(
    WishlistContext
  ) as Wishlist;
  const checkItExist = wishlistState.some(
    (item: dataProductModel) => item.id === props.data.id
  );

  const isProductInShopList = shopList.some(
    (item: dataProductModel) => item.id === props.data.id
  );

  return (
    <Style.VCardItemDiv>
      <Link to={`${props.data.id}`}>
        <div className="img_div">
          <img src={props.data.img[0]} alt="" />
        </div>
      </Link>

      <div className="title_shop">
        <h1 className="title">{props.data.title.substring(0, 55)}</h1>

        <Box display="flex" gap="8px">
          <IconButton
            color={isProductInShopList ? "primary" : "secondary"}
            onClick={() => addItemToShopList(props.data)}>
            <Shop />
          </IconButton>

          <IconButton onClick={() => props.onClick?.(props.data)}>
            {checkItExist ? <HeartOutlineHighlighted /> : <HeartOutline />}
          </IconButton>
        </Box>
      </div>
    </Style.VCardItemDiv>
  );
};
