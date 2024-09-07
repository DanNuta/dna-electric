import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  onClick: () => void;
  category: string;
  isCurrentCategory: boolean;
};

export const VFilterView: React.FC<Props> = ({
  category,
  onClick,
  isCurrentCategory
}) => {
  return (
    <Box
      sx={{ cursor: "pointer" }}
      pl="20px"
      display="flex"
      alignItems="center"
      gap="14px"
      onClick={onClick}>
      <Box
        sx={(theme) => ({
          border: `1px solid ${theme.palette.secondary.main}`
        })}
        borderRadius="2px"
        p="2px"
        width={14}
        height={14}>
        {isCurrentCategory && (
          <Box
            width="100%"
            height="100%"
            sx={(theme) => ({
              backgroundColor: theme.palette.primary.main
            })}
          />
        )}
      </Box>

      <Typography variant="body1">{category}</Typography>
    </Box>
  );
};
