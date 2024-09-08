import React from "react";
import { TableRow, TableCell, Typography, Button } from "@mui/material";

import { ShopList } from "models";
import { Cancel } from "icons";
import { useWishlistContext } from "hooks";

import { ShopProductCell } from "./ShopProductCell";

export const ShopRow: React.FC<ShopList> = ({
  description,
  id,
  img,
  quantity,
  title,
  total
}) => {
  const { deleteItemToShopList } = useWishlistContext();

  return (
    <TableRow>
      <TableCell>
        <ShopProductCell
          description={description}
          id={id}
          img={img}
          title={title}
        />
      </TableCell>
      <TableCell>
        <Typography
          sx={(theme) => ({
            color: theme.palette.secondary.light
          })}
          variant="h6">
          750 lei
        </Typography>
      </TableCell>
      <TableCell>
        <Typography
          sx={(theme) => ({
            color: theme.palette.secondary.light
          })}
          variant="h6">
          {quantity}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography
          sx={(theme) => ({
            color: theme.palette.secondary.light
          })}
          variant="h6">
          {total}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Button onClick={() => deleteItemToShopList(id)} endIcon={<Cancel />} />
      </TableCell>
    </TableRow>
  );
};
