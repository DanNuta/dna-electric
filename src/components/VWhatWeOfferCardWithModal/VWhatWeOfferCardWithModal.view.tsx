import React, { PropsWithChildren } from "react";

import { Box, Typography, Modal } from "@mui/material";

import { WhatWeOffer } from "models";

type Props = {
  item: WhatWeOffer;
  onClick: () => void;
  state: boolean;
};

export const VWhatWeOfferCardWithModalView: React.FC<
  PropsWithChildren<Props>
> = ({ item, onClick, state }) => {
  return (
    <>
      <Box
        onClick={onClick}
        width="100%"
        sx={(theme) => ({
          paddingBlock: "82px",
          "&:hover": { backgroundColor: theme.palette.primary.main },
          cursor: "pointer"
        })}
        padding="82px 70px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="4px 1px 10px 0px rgba(0, 0, 0, 0.1)">
        <Typography textAlign="center" variant="h4">
          {item.title}
        </Typography>
      </Box>

      <Modal onClose={onClick} open={state}>
        <Box
          width={920}
          sx={(theme) => ({
            p: "60px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white
          })}>
          <Typography marginBottom="20px" textAlign="center" variant="h2">
            {item.title}
          </Typography>
          <Typography textAlign="center" variant="body1">
            {item.description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
