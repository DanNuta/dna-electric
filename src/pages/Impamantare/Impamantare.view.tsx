import React, { PropsWithChildren } from "react";

import { VFilter } from "components";

import { dataProductModel } from "../../models/dataProduct.model";
import * as Styled from "./Impamantare.model";
import { Container, Grid } from "@mui/material";
import { VCardItem } from "../../components/VCardItem/VCardItem";
import filter from "../../icons/card_product_icon/filter.svg";
import { VLoaderView } from "../../components/VLoader/VLoader";

type Props = {
  data: dataProductModel[];
  isPending: boolean | null;
  // eslint-disable-next-line no-unused-vars
  onClick: (item: dataProductModel) => void;
  filterFn: () => void;
  filterActiveState: boolean;
  // eslint-disable-next-line no-unused-vars
  filterItemFn: (c: string) => void;
  filterActive?: string[];
  dataFilter: dataProductModel[];
};

export const ImpamantareView: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <Container maxWidth="xl">
      {props.isPending ? (
        <VLoaderView />
      ) : (
        <Styled.ProductsDiv>
          <h1 className="title_page">PRODUSE SI ACCESORII</h1>

          <Styled.FilterDiv>
            <ul onClick={props.filterFn}>
              <li>
                <img src={filter} alt="filter" />
              </li>
              <li>Filter</li>
            </ul>

            {props.filterActiveState && (
              <div className="filter">
                <h2>Impamantare</h2>
                {props.data && (
                  <VFilter
                    categories={props.filterActive}
                    onClick={(category) => props.filterItemFn(category)}
                  />
                )}
              </div>
            )}
          </Styled.FilterDiv>

          <Grid container spacing={2}>
            <Grid className="filter_item" item lg={3}>
              <Styled.FilterDesktop>
                <h2>Impamantare</h2>
                {props.data && (
                  <VFilter
                    categories={props.filterActive}
                    onClick={(category) => props.filterItemFn(category)}
                  />
                )}
              </Styled.FilterDesktop>
            </Grid>

            {props.isPending ? (
              <p>Loading...</p>
            ) : props.dataFilter[0] === undefined ? (
              props.data.map((item, index: number) => {
                return (
                  <Grid xs={6} lg={3} item key={index}>
                    <VCardItem
                      localStorege="impamantare"
                      onClick={props.onClick}
                      data={item}
                    />
                  </Grid>
                );
              })
            ) : (
              props.dataFilter.map((item, index: number) => {
                return (
                  <Grid lg={3} xs={6} item key={index}>
                    <VCardItem onClick={props.onClick} data={item} />
                  </Grid>
                );
              })
            )}
          </Grid>
        </Styled.ProductsDiv>
      )}
    </Container>
  );
};
