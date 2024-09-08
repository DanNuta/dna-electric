import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";

import { ArrowDownDecrement, ArrowUpIncrement } from "icons";

type Props = {
  quantity: number;
  onChangeQuantity: (type: "increment" | "decrement") => void;
};

export const IncreaseQuantity: React.FC<Props> = ({
  quantity,
  onChangeQuantity
}) => {
  return (
    <Box display="flex">
      <Box
        sx={{
          backgroundColor: grey[100],
          paddingInline: "16px"
        }}
        display="flex"
        alignItems="center">
        <Typography
          sx={(theme) => ({
            color: theme.palette.secondary.light
          })}
          variant="h6">
          {quantity}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: grey[100]
        }}
        display="flex"
        flexDirection="column">
        <IconButton onClick={() => onChangeQuantity("increment")}>
          <ArrowUpIncrement />
        </IconButton>
        <IconButton onClick={() => onChangeQuantity("decrement")}>
          <ArrowDownDecrement />
        </IconButton>
      </Box>
    </Box>
  );
};
