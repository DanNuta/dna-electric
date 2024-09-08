import React from "react";
import { TableRow, TableCell, Typography, Button } from "@mui/material";

import { ShopList } from "models";
import { Cancel } from "icons";
import { useWishlistContext } from "hooks";

import { ShopProductCell } from "./ShopProductCell";
import { IncreaseQuantity } from "./IncreaseQuantity";

export const ShopRow: React.FC<ShopList> = ({
  description,
  id,
  img,
  quantity,
  title,
  total,
  price
}) => {
  const { deleteItemToShopList, incrementShopQuantity, decrementShopQuantity } =
    useWishlistContext();

  const modifyQuantity = (type: "increment" | "decrement") => {
    if (type === "increment") {
      incrementShopQuantity(id);
    }

    if (type === "decrement") {
      decrementShopQuantity(id);
    }
  };

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
          {price} lei
        </Typography>
      </TableCell>
      <TableCell>
        <IncreaseQuantity
          onChangeQuantity={modifyQuantity}
          quantity={quantity}
        />
      </TableCell>
      <TableCell>
        <Typography
          noWrap
          sx={(theme) => ({
            color: theme.palette.secondary.light
          })}
          variant="h6">
          {total} lei
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Button onClick={() => deleteItemToShopList(id)} endIcon={<Cancel />} />
      </TableCell>
    </TableRow>
  );
};
