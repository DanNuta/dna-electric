import React, { useContext } from "react";
import { Grid } from "@mui/material";

import { HeartBold, HeartOutlineHighlighted } from "icons";

import { WishlistContext } from "../../context/Context.wishlist";
import { Wishlist } from "../../models/WislistContext.model";
import { dataProductModel } from "../../models/dataProduct.model";
import * as Style from "./VSimilarProducts.module";
import { Link, Outlet, useLocation } from "react-router-dom";

type Props = {
  data?: dataProductModel[];
  link?: string;
};

export const VSimilarProductsView: React.FC<Props> = (props: Props) => {
  const location = useLocation();
  const path = (location.pathname = "");

  const { addWishList, wishlistState } = useContext(
    WishlistContext
  ) as Wishlist;

  return (
    <>
      {props.data &&
        props.data.slice(0, 4).map((item, i) => {
          return (
            <Grid xs={6} md={3} key={i} item>
              <Style.ProduseSimilareDiv>
                <Link to={`${path}/${props.link}/${item.id}`}>
                  <div className="img">
                    <img src={item.img[0]} />
                  </div>

                  <div className="text_hover">
                    <div className="desc">
                      <p>{item.title.substring(0, 25)}...</p>
                    </div>
                  </div>
                </Link>

                <div onClick={() => addWishList(item)} className="hoverElement">
                  {wishlistState.includes(item) ? (
                    <HeartBold />
                  ) : (
                    <HeartOutlineHighlighted />
                  )}

                  <h2>In preferinte</h2>
                </div>
              </Style.ProduseSimilareDiv>
            </Grid>
          );
        })}

      <Outlet />
    </>
  );
};
