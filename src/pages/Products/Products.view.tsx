/* eslint-disable max-lines */
import React, { PropsWithChildren, useContext } from "react";
import { Container, Grid, Button, Box } from "@mui/material";

import { Shop, Wishlist as WishlistIcon } from "icons";
import { useWishlistContext } from "hooks";
import { VSimilarProductsView } from "components";

import * as Style from "./Products.model";
import { VPromotionSection } from "./components";

import { dataProductModel } from "../../models/dataProduct.model";
import { NavbarContext } from "../../context/Context.navbar";
import { useLocation } from "react-router-dom";
import { LinkCOmponent } from "../../components/VLink/VLink";
import { VLoaderView } from "../../components/VLoader/VLoader";

type Props = {
  data: dataProductModel;
  isPending: boolean | null;
  next: () => void;
  prev: () => void;
  contor: number;
  // eslint-disable-next-line no-unused-vars
  wishlist: (e: dataProductModel) => void;
  products?: dataProductModel[];
  link?: string;
};

export const ProductsView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { wishlistState, addItemToShopList, shopList } = useWishlistContext();
  const contextNavbar = useContext(NavbarContext);

  const location = useLocation();

  const path = (location.pathname = "");

  const checkItExist = wishlistState.some(
    (item: dataProductModel) => item.id === props.data?.id
  );

  const isProductInShopList = shopList.some(
    (item: dataProductModel) => item.id === props.data?.id
  );

  return (
    <Container maxWidth="xl">
      {props.isPending ? (
        <VLoaderView />
      ) : (
        <Style.ItemProductsDiv>
          <h1 className="title">{props.data?.title}</h1>

          <Style.ImgSlider>
            <img src={props?.data?.img?.[props.contor]} />

            <div className="btn">
              <Style.Button
                display={props.data?.img?.[1] ? "block" : "none"}
                onClick={props.prev}
                className="prev">
                prev
              </Style.Button>
              <Style.Button
                display={props.data?.img?.[1] ? "block" : "none"}
                onClick={props.next}
                className="next">
                next
              </Style.Button>
            </div>
          </Style.ImgSlider>

          <Style.InfoDiv>
            <Style.DescriereDiv>
              <h1 className="title">{props.data?.title}</h1>
              <hr className="hr_element" />
              <h2>Descriere</h2>
              <p>{props.data?.description?.[0]}</p>
              <hr className="hr_element" />
            </Style.DescriereDiv>

            <Style.ContactShoWishlistDiv>
              <LinkCOmponent
                link={`${path}/${contextNavbar?.data.contacte}`}
                color="rgba(39, 39, 39, 1)"
                bg="rgba(255, 214, 0, 1)">
                Contacteaza-ne
              </LinkCOmponent>

              <Box mt="20px" display="flex" gap="20px">
                <Button
                  onClick={() => addItemToShopList(props.data)}
                  sx={(theme) => ({
                    "&:hover": {
                      color: theme.palette.primary.main
                    }
                  })}
                  color={isProductInShopList ? "primary" : "secondary"}
                  startIcon={<Shop />}>
                  Adauga in cos
                </Button>

                <Button
                  sx={(theme) => ({
                    "&:hover": {
                      color: theme.palette.primary.main
                    }
                  })}
                  startIcon={<WishlistIcon />}
                  color={checkItExist ? "primary" : "secondary"}
                  onClick={() => props.wishlist(props.data)}>
                  Adauga in la favorite
                </Button>
              </Box>
            </Style.ContactShoWishlistDiv>
          </Style.InfoDiv>
        </Style.ItemProductsDiv>
      )}

      <Style.ProduseSimilareDiv>
        <h1 className="title">PRODUSE SIMILARE</h1>

        <Grid container spacing={2}>
          <VSimilarProductsView link={props.link} data={props.products} />
        </Grid>
      </Style.ProduseSimilareDiv>

      <VPromotionSection />
    </Container>
  );
};
