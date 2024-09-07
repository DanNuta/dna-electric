import { FirebaseError } from "firebase/app";
import React, { PropsWithChildren } from "react";
import { Grid, Typography } from "@mui/material";

import { WhatWeOffer } from "models";
import { VWhatWeOfferCardWithModal } from "components";

type Props = {
  data?: WhatWeOffer[];
  error: FirebaseError | null;
  isPending: boolean;
};

export const WhatWeOfferSectionView: React.FC<PropsWithChildren<Props>> = (
  props
) => {
  return (
    <>
      <Typography sx={{ fontWeight: "bold" }} marginBottom="25px" variant="h3">
        Ce oferim
      </Typography>
      <Grid container spacing={2} columns={16}>
        {props.data?.map((item, index) => {
          return (
            <Grid key={index} xs={8} item>
              <VWhatWeOfferCardWithModal item={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
