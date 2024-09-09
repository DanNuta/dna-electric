import styled from "styled-components";
import { Box, useTheme } from "@mui/material";

export const SimilarProductsDIV = styled(Box)(() => {
  const theme = useTheme();

  return {
    width: "90%",
    margin: "45px auto",

    [theme.breakpoints.up("md")]: {
      marginTop: "115px",
      width: "100%"
    },

    ".title": {
      marginBottom: "30px"
    }
  };
});
