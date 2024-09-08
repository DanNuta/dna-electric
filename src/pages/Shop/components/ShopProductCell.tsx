import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { ShopList } from "models";

type Props = Pick<ShopList, "description" | "id" | "img" | "title">;

export const ShopProductCell: React.FC<Props> = ({
  description,
  id,
  img,
  title
}) => {
  const theme = useTheme();

  return (
    <Box display="flex" gap="20px">
      <CardMedia
        sx={{
          width: "220px",
          height: "220px"
        }}
        component="img"
        image={img[0]}
        alt="green iguana"
      />
      <Box display="flex" flexDirection="column" gap="10px">
        <Typography
          sx={(theme) => ({
            color: theme.palette.secondary.main
          })}
          fontWeight={800}
          variant="h5">
          {title}
        </Typography>
        <Typography variant="body1">
          Cod: <span style={{ color: theme.palette.error.main }}>{id}</span>
        </Typography>
        <Box display="flex" flexDirection="column" gap="6px">
          <Typography
            fontWeight={600}
            sx={(theme) => ({
              color: theme.palette.secondary.main
            })}
            variant="h6">
            Descriere:
          </Typography>
          <Typography
            sx={(theme) => ({
              color: theme.palette.secondary.main
            })}
            variant="body1">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
