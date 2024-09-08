import React, { PropsWithChildren, useContext } from "react";

import { HeartOutlineHighlighted, HeartBold } from "icons";

import * as Style from "./VCardSudare.model";

import { dataProductModel } from "../../models/dataProduct.model";
import search from "../../icons/hover_icon/search.svg";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/Context.wishlist";
import { Wishlist } from "../../models/WislistContext.model";

type Props = {
  data: dataProductModel[];
  link?: string;
};

export const VCardSudareView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { addWishList, wishlistState } = useContext(
    WishlistContext
  ) as Wishlist;

  return (
    <>
      {props.data &&
        props.data.slice(0, 4).map((item) => {
          return (
            <Style.BoxSudare>
              <img src={item.img[0]} />

              <div className="hover_Element">
                <Style.IconElement>
                  <Link to={`${props.link}/${item.id}`}>
                    <Style.Icon>
                      <img src={search} alt="" />
                    </Style.Icon>
                  </Link>

                  <Style.Icon onClick={() => addWishList(item)}>
                    {wishlistState.includes(item) ? (
                      <HeartBold />
                    ) : (
                      <HeartOutlineHighlighted />
                    )}
                  </Style.Icon>
                </Style.IconElement>
              </div>
            </Style.BoxSudare>
          );
        })}
    </>
  );
};
