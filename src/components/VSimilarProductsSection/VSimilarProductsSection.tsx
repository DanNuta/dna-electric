import React from "react";
import { Grid } from "@mui/material";

import { SimilarProductsDIV } from "./VSimilarProductsSection.style";

import { VSimilarProductsView } from "../VSimilarProducts";

import { dataProductModel } from "../../models/dataProduct.model";

type Props = {
  products?: dataProductModel[];
  link?: string;
};

export const VSimilarProductsSection: React.FC<Props> = ({
  link,
  products
}) => {
  return (
    <SimilarProductsDIV>
      <h1 className="title">PRODUSE SIMILARE</h1>

      <Grid container spacing={2}>
        <VSimilarProductsView link={link} data={products} />
      </Grid>
    </SimilarProductsDIV>
  );
};
