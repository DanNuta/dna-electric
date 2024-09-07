import React from "react";
import { Grid } from "@mui/material";

import { VPromotionCard } from "components";

import { promotionList } from "./data";

export const VPromotionSection: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {promotionList.map((promotion) => (
        <Grid md={4} key={promotion.title} xs={12} item>
          <VPromotionCard {...promotion} />
        </Grid>
      ))}
    </Grid>
  );
};
