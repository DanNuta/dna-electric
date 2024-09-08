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
    <Container sx={{ marginTop: "115px" }} maxWidth="xl">
      <Typography fontWeight="800" variant="h3">
        CUMPARATURI
      </Typography>

      {shopList.length ? (
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
              <ShopRow key={shopItem.id} {...shopItem} />
            ))}

            <TableRow>
              <TableCell rowSpan={2} />
              <TableCell colSpan={3}>
                <Typography fontSize={20} variant="body1">
                  Spre achitare:
                </Typography>
              </TableCell>
              <TableCell colSpan={2}>
                <Typography
                  noWrap
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
      ) : (
        <Typography variant="h5" align="center">
          Momentan nu exista produse
        </Typography>
      )}
    </Container>
  );
};
