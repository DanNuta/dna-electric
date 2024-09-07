import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const VPromotionCard: React.FC<Props> = ({
  description,
  title,
  icon
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="8px"
      sx={(theme) => ({
        border: `1px solid ${theme.palette.secondary.main}`,
        cursor: "pointer",

        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          border: `1px solid ${theme.palette.primary.main}`
        }
      })}
      p="20px"
      width="100%">
      <Box textAlign="center">{icon}</Box>
      <Typography textAlign="center" variant="h5">
        {title}
      </Typography>
      <Typography textAlign="center" variant="body1">
        {description}
      </Typography>
    </Box>
  );
};
