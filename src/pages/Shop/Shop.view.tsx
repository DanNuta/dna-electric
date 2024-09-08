import React from "react";

import {
  Container,
  Typography,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

import { ShopList } from "models";

import { CustomPaper, ShopRow } from "./components";

type Props = {
  shopList: ShopList[];
  total: number;
};

export const ShopView: React.FC<Props> = ({ shopList, total }) => {
  return (
    <Container maxWidth="xl">
      <Typography fontWeight="800" variant="h3">
        CUMPARATURI
      </Typography>

      <TableContainer sx={{ maxWidth: "100%" }} component={CustomPaper}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.secondary.light
                })}
                fontSize={24}
                variant="body1">
                Produsul
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.secondary.light
                })}
                fontSize={24}
                variant="body1">
                Pret
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.secondary.light
                })}
                fontSize={24}
                variant="body1">
                Cantitate
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.secondary.light
                })}
                fontSize={24}
                variant="body1">
                Total
              </Typography>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {shopList.map((shopItem) => (
            <ShopRow {...shopItem} />
          ))}

          <TableRow>
            <TableCell>
              <Typography fontSize={20} variant="body1">
                Spre achitare:
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.secondary.main
                })}
                fontSize={20}
                fontWeight={700}
                variant="body1">
                {total} lei
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </Container>
  );
};
