import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import { Cancel } from "icons";

import { dataProductModel } from "../../models/dataProduct.model";
import * as Style from "./VWishListItem.model";

type Props = {
  data: dataProductModel;
  // eslint-disable-next-line no-unused-vars
  delete: (id: string) => void;
  onClick: () => void;
};

export const VWishListItemView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Style.WishlistItemDiv>
      <Link to={`${props.data.id}`}>
        <div onClick={props.onClick} className="img_title">
          <div className="img_wl">
            <img src={props.data.img[0]} alt="" />
          </div>

          <div className="title">
            <h4>{props.data.title}</h4>
          </div>
        </div>
      </Link>

      <div onClick={() => props.delete(props.data.id)} className="cancel">
        <Cancel />
      </div>
    </Style.WishlistItemDiv>
  );
};
