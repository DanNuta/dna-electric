import React from "react";
import { Button, Box } from "@mui/material";

import * as Style from "./Article.model";

export const Article: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="8px"
      flexDirection="column">
      <Style.H1 lg="56px" sm="48px">
        Momentant nu exista articole
      </Style.H1>

      <Button disableElevation variant="contained" color="primary" href="/">
        Back home{" "}
      </Button>
    </Box>
  );
};
